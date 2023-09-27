<script lang="ts">
  // dependencies
  import cns from "classnames";

  //types
  import type { FooterSection } from "../types";

  // data
  import { SOCIAL_LINKS } from "src/constants";

  // styles
  // import layoutStyles from "@styles/layouts/layout.module.scss";
  // import footerStyles from "@styles/components/Footer.module.scss";

  // js
  const sections: FooterSection[] = [
    {
      heading: "Menu",
      links: [
        { text: "Home", href: "/" },
        { text: "Posts", href: "/posts" },
        // { text: "Snippets", href: "/snippets" },
        { text: "Bio", href: "/bio" },
      ],
    },
    // {
    //   heading: "Tutorials",
    //   links: [
    //     { text: "CSS3", href: "/tags/css3" },
    //     { text: "Animations", href: "/tags/animations" },
    //     { text: "React", href: "/tags/react" },
    //     { text: "JavaScript", href: "/tags/javascript" },
    //   ],
    // },
    {
      heading: "Useful Links",
      links: [
        { text: "GitHub", href: SOCIAL_LINKS.github, external: true },
        { text: "LinkedIn", href: SOCIAL_LINKS.linkedin, external: true },
        { text: "CodePen", href: SOCIAL_LINKS.codepen, external: true },
      ],
    },
  ];
</script>

<footer class="footer">
  <div class="container grid-auto">
    <section class="section-intro">
      <a href="/">
        <img
          src="/assets/logos/svg/logo-on-dark.svg"
          class="logo"
          alt="Joseph Shambrook logo"
        />
      </a>
      <p class="intro">
        A front-end developer, living in Edinburgh, UK.
      </p>
    </section>
    {#each sections as section}
      <section class="section">
        <h2 class="section-heading">{section.heading}</h2>
        <ul class="section-list">
          {#each section.links as link}
            <li>
              <a
                href={link.href}
                class="section-link"
                target={link.external ? "_blank" : null}
                rel={link.external ? "noopener noreferrer" : null}
                >{link.text}</a>
            </li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>
</footer>

<style lang="postcss">
.footer {
  background-color: var(--color-dark-blue);
  color: var(--color-white);
  font-family: var(--font-heading);
  margin-block-start: 2rem;
  padding-block-end: 5rem;
  padding-block-start: 2.58rem;
}

.logo {
  max-width: 4rem;
  width: 100%;
}

.intro {
  font-size: var(--text-small);
}

.section-intro {
  grid-column: 1 / -1;

  @media (--bp-lg) {
    grid-column: initial;
  }
}

.section-heading {
  color: var(--color-yellow);
  font-size: var(--heading-6);
  margin-block-end: 1.3rem;
  margin-block-start: 0;
  text-transform: uppercase;
}

.section-list {
  list-style-type: none;
  padding-inline-start: 0;
}

.section-link {
  color: var(--color-white);
  font-size: var(--text-small);
  font-weight: normal;
  text-decoration: none;
}

</style>
