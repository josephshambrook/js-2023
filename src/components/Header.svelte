<header class="full-width">
  <a class="sr-only" href="#maincontent" target="_self">Skip to main content</a> 
  <nav>
    <a class="logo-link" href="/">
      <img src="https://placeholder.pics/svg/300" class="logo-img" />
    </a>
    <div class="links-wrap">
      <a href="/">Home</a>
      <a href="#">Posts</a>
      <a href="#">Snippets</a>
      <a href="#">Bio</a>
    </div>
  </nav>
</header>

<style lang="scss">
  .sr-only {
    height: 1px;
    overflow: hidden;
    position: absolute;
    width: 1px;
  }

  header {
    background-color: var(--color-orange);
    display: flex;
    flex-wrap: wrap;
    font-size: 1.125rem;
    line-height: 1rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    position: relative;
    width: 100%;
    z-index: 50;

    @media (min-width: 660px) {
      flex-wrap: nowrap;
      font-size: 1.2rem;
      justify-content: flex-start;
    }
  }

  nav {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--max-wrapper-size);
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;

    @media (min-width: 70rem) {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .nav-wrap {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .logo-link {
    flex: none;
  }

  .logo-img {
    height: auto;
    width: 7rem;
  }

  .links-wrap {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1.25rem;

    @media (min-width: 660px) {
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      margin-top: 0;
      padding-left: 1.25rem;
    }

    > a {
      color: var(--color-white);
      font-weight: 500;
      margin-left: 1rem;
      margin-right: 1rem;

      &.active {
        color: var(--color-yellow);
      }
    }
  }
</style>