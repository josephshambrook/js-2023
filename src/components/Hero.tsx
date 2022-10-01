import * as React from "react";
import LayoutStyles from "@styles/layouts/layout.module.scss";
import HeroStyles from "@styles/components/Hero.module.scss";
import { WEATHER_ICON_NAMES } from "@src/constants";
import Icon from "astro-icon";

export default function Hero() {
  const [weatherIcon, setWeatherIcon] = React.useState("");

  // get data from Worker
  React.useEffect(() => {
    const getWeather = async function () {
      const weatherResponse = await fetch(
        "https://weather-word.josephshambrook.workers.dev/"
      );
      const weatherData = await weatherResponse.json();
      console.log("weatherData", weatherData);
      if (weatherData.condition.id) {
        const icon = WEATHER_ICON_NAMES[weatherData.condition.id];
        setWeatherIcon(icon);
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
            {weatherIcon ? "" : ""} Edinburgh, UK.
          </p>
        </h1>
      </div>
    </section>
  );
}
