<script lang="ts">
  // dependencies
  import cns from "classnames";

  //types
  import type { FooterSection } from "../types";

  // data
  import { SOCIAL_LINKS } from "src/constants";

  // styles
  import layoutStyles from "@styles/layouts/layout.module.scss";
  import footerStyles from "@styles/components/Footer.module.scss";

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

<footer class={footerStyles.footer}>
  <div class={cns(layoutStyles.container, layoutStyles["grid-auto"])}>
    <section class={footerStyles["section-intro"]}>
      <a href="/">
        <img
          src="/assets/logos/svg/logo-on-dark.svg"
          class={footerStyles.logo}
          alt="Joseph Shambrook logo"
        />
      </a>
      <p class={footerStyles.intro}>
        A front-end developer, living in Edinburgh, UK.
      </p>
    </section>
    {#each sections as section}
      <section class={footerStyles["section"]}>
        <h2 class={footerStyles["section-heading"]}>{section.heading}</h2>
        <ul class={footerStyles["section-list"]}>
          {#each section.links as link}
            <li>
              <a
                href={link.href}
                class={footerStyles["section-link"]}
                target={link.external ? "_blank" : null}
                rel={link.external ? "noopener noreferrer" : null}
                >{link.text}</a
              >
            </li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>
</footer>
