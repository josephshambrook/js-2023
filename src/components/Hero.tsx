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
          <span>Hey 👋</span>
          <br />
          <br />
          <span>
            I'm Joseph Shambrook, a Front End Developer living in
            {weather ? ` ${weather}` : ""} Edinburgh, UK
          </span>
        </h1>
      </div>
    </section>
  );
}
