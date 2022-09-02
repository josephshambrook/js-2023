<script>
  import cns from "classnames";
  import layoutStyles from "@styles/layout.module.scss";
  import headerStyles from "@styles/components/Header.module.scss";
  import logo from "../../logos/svg/logo-on-dark.svg";
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
      </div>
    </nav>
  </div>
</header>
