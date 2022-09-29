import * as React from "react";
import LayoutStyles from "@styles/layouts/layout.module.scss";
import HeroStyles from "@styles/components/Hero.module.scss";

export default function Hero() {
  const [weather, setWeather] = React.useState("");

  // get data from Worker
  React.useEffect(() => {
    console.log("hello");
    const getWeather = async function () {
      const weatherResponse = await fetch(
        "https://weather-word.josephshambrook.workers.dev/"
      );
      const weatherData = await weatherResponse.json();
      console.log("weatherData", weatherData);
      if (weatherData.condition) {
        setWeather(weatherData.condition);
      }
    };

    try {
      getWeather();
    } catch (e) {
      console.log("Could not retrieve weather");
    }
  }, []);

  return (
    <section className={HeroStyles.hero}>
      <div className={LayoutStyles.container}>
        <h1 className={HeroStyles.title}>
          <p>Hey 👋</p>
          <p>
            I'm Joseph Shambrook, a Front End Developer living in
            {weather ? ` ${weather}` : ""} Edinburgh, UK.
          </p>
        </h1>
      </div>
    </section>
  );
}
