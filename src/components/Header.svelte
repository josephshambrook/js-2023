<script>
  import styles from "@styles/components/Header.module.scss";
  import logo from "../../logos/svg/logo-on-dark.svg";
</script>

<header class="header">
  <div class={styles.wrapper}>
    <a class={styles["sr-only"]} href="#maincontent" target="_self"
      >Skip to main content</a
    >
    <a class={styles["logo-link"]} href="/">
      <img src={logo} class={styles["logo-img"]} alt="Joseph Shambrook logo" />
    </a>
    <nav class={styles.nav}>
      <div class={styles["links-wrap"]}>
        <a href="#">Posts</a>
        <a href="#">Snippets</a>
        <a href="#">Bio</a>
      </div>
    </nav>
  </div>
</header>
