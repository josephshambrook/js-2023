<script>
  // dependencies
  import cns from "classnames";

  // styles
  import layoutStyles from "@styles/layout.module.scss";
  import headerStyles from "@styles/components/Header.module.scss";

  // assets
  import logo from "/assets/logos/svg/logo-on-dark.svg";
  // import github from "/assets/icons/github.svg";
  // import linkedin from "/assets/icons/linkedin.svg";
  // import twitter from "/assets/icons/twitter.svg";
</script>

<header class={cns(headerStyles.header)}>
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
        <a href="#">Posts</a>
        <a href="#">Snippets</a>
        <a href="#">Bio</a>

        <!-- <img src={github} alt="GitHub" />
        <img src={linkedin} alt="LinkedIn" />
        <img src={twitter} alt="Twitter" /> -->
      </div>
    </nav>
  </div>
</header>
