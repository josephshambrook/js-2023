<script lang="ts">
  // dependencies
  import cns from "classnames";

  // styles
  import layoutStyles from "@styles/layouts/layout.module.scss";
  import headerStyles from "@styles/components/Header.module.scss";

  // assets
  import logo from "/assets/logos/svg/logo-on-dark.svg";
  import github from "/assets/icons/github.svg";
  import twitter from "/assets/icons/twitter.svg";

  // data
  import { SOCIAL_LINKS } from "../constants";

  // props
  export let isTransparent = false;
</script>

<header
  class={cns(headerStyles.header, {
    [headerStyles["is-transparent"]]: isTransparent,
  })}
>
  <div class={cns(headerStyles.wrapper, layoutStyles.container)}>
    <a class={headerStyles["sr-only"]} href="#maincontent" target="_self"
      >Skip to main content</a
    >

    <a class={headerStyles["logo-link"]} href="/">
      <img
        src={logo}
        class={headerStyles["logo-img"]}
        alt="Joseph Shambrook logo"
      />
    </a>

    <nav class={headerStyles.nav}>
      <div class={headerStyles["links-wrap"]}>
        <a href="/posts">Posts</a>

        <!-- <a href="#">Snippets</a> -->

        <a href="/bio">Bio</a>

        <a href={SOCIAL_LINKS.github}>
          <img src={github} alt="GitHub" />
        </a>

        <!-- <a href={SOCIAL_LINKS.linkedin}>
          <img src={linkedin} alt="LinkedIn" />
        </a> -->

        <a href={SOCIAL_LINKS.twitter}>
          <img src={twitter} alt="Twitter" />
        </a>
      </div>
    </nav>
  </div>
</header>
