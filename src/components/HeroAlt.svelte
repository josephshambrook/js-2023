<script lang="ts">
  // import { onMount } from "svelte";
  // import { getWeather } from "../lib/weather";
  import LayoutStyles from "@styles/layouts/layout.module.scss";
  import HeroStyles from "@styles/components/Hero.module.scss";

  let weather: string = "";

  // onMount(async () => {
  //   weather = await getWeather();
  // });
</script>

<section class={HeroStyles["hero-alt"]}>
  <div class={LayoutStyles.container}>
    <h1 class={HeroStyles.title}>
      <p>
        Hey <span class={HeroStyles.wave}>👋</span>
      </p>
      <p>
        I'm <span class={HeroStyles["gradient-text"]}>Joseph Shambrook</span>, a
        <span class={HeroStyles["gradient-text"]}
          >front&#8209;end developer</span
        >
        living in
        {weather ? ` ${weather}` : ""} Edinburgh, UK, focused on
        <span class={HeroStyles["gradient-text"]}>creating great websites</span>
        and <span class={HeroStyles["gradient-text"]}>coaching others</span>.
      </p>
      <p />
    </h1>
  </div>
</section>
