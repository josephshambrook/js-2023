import * as React from "react";
import LayoutStyles from "@styles/layouts/layout.module.scss";
import HeroStyles from "@styles/components/Hero.module.scss";

export default function Hero() {
  const [weather, setWeather] = React.useState("");

  // get data from Worker

  return (
    <section className={HeroStyles.hero}>
      <div className={LayoutStyles.container}>
        <h1 className={HeroStyles.title}>
          <p>Hey 👋</p>
          <p>
            I'm Joseph Shambrook, a Front End Developer living in
            {weather ? ` ${weather}` : ""} Edinburgh, UK, focused on creating
            great websites and coaching others.
          </p>
          <p></p>
        </h1>
      </div>
    </section>
  );
}
