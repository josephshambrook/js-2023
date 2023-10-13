<section class="hero">
  <div class="container">
    <h1 class="title">
      <p>
        Hey <span class="wave">👋</span>
      </p>
      <p>
        I'm Joseph Shambrook, a front&#8209;end developer living in Edinburgh,
        UK, focused on creating great websites and coaching others.
      </p>
      <p></p>
    </h1>
  </div>
</section>
;

<style lang="postcss">
  .hero {
    padding-block-end: 2rem;

    @media (--js-bp-lg) {
      padding-block-end: 5rem;
    }

    p {
      margin-block: 0;
    }
  }

  .title {
    color: var(--js-color-white);
    font-size: var(--js-heading-hero);
    font-weight: 700;
    line-height: 1.4;
    text-transform: none;
  }

  .wave {
    display: inline-block;
    transform-origin: bottom right;

    @media (prefers-reduced-motion: no-preference) {
      animation: wave 750ms ease-in-out;
      animation-iteration-count: 2;
      animation-delay: 1s;
    }
  }

  @keyframes wave {
    50% {
      transform: rotate(30deg);
    }
  }
</style>
