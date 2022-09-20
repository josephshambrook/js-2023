<script type="ts">
  // dependencies
  import cns from "classnames";

  // data
  import { FooterSection } from "../types";
  import { SOCIAL_LINKS } from "src/constants";

  // styles
  import layoutStyles from "@styles/layouts/layout.module.scss";
  import footerStyles from "@styles/components/Footer.module.scss";

  // assets
  import logo from "/assets/logos/svg/logo-on-dark.svg";

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
        { text: "GitHub", href: SOCIAL_LINKS.github },
        { text: "LinkedIn", href: SOCIAL_LINKS.linkedin },
        { text: "Twitter", href: SOCIAL_LINKS.twitter },
        { text: "CodePen", href: SOCIAL_LINKS.codepen },
      ],
    },
  ];
</script>

<footer class={footerStyles.footer}>
  <div class={cns(layoutStyles.container, layoutStyles["grid--12"])}>
    <section class={footerStyles["section--intro"]}>
      <a href="/">
        <img src={logo} class={footerStyles.logo} alt="Joseph Shambrook logo" />
      </a>
      <p class={footerStyles.intro}>
        A Front End developer, living in Edinburgh, UK.
      </p>
    </section>
    {#each sections as section}
      <section class={footerStyles["section"]}>
        <h6 class={footerStyles["section-heading"]}>{section.heading}</h6>
        <ul class={footerStyles["section-list"]}>
          {#each section.links as link}
            <li>
              <a
                href={link.href}
                class={footerStyles["section-link"]}
                target="_blank"
                rel="noopener noreferrer">{link.text}</a
              >
            </li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>
</footer>

<style lang="scss">
</style>
