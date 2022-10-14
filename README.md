# Joseph Shambrook 2023

My brand new website. Complete with a blog, a proper design, and (bloody finally) some sense of direction.

> 🚧 This is still a work in progress!

## Try it yourself

The usual jazz, though with **[pnpm]** instead of npm.

1. Clone the repo locally and point a terminal at the downloaded folder
2. Install the dependencies using `pnpm install`
3. Run `pnpm start` to run the site in dev mode, or `pnpm build` then `pnpm run preview` to view the site in prod mode
4. Visit [http://localhost:3000](http://localhost:3000) and feel good about yourself

## Tech used

- [Astro]
- [SCSS]
- [Bootstrap Icons]
- [pnpm]

### Why Astro?

- It builds to static files by default, eliminating as much JavaScript as possible.
- It lets me use other JS frameworks/libraries like Svelte and React when I feel like it, rather than locking me in to one or the other.
- There are nice DX features, like import aliases, file-system routing and Markdown support.
- It is being actively developed into a framework that stands with the giants.

### Styling

I use SCSS, though only for consistent media query settings, mixins and nesting. Otherwise, I utilise plain ol' CSS as much as possible.

#### Variable strategy

SCSS has build-time variables, CSS has run-time custom properties. Both are useful in their own ways, and I combine them in a way that makes sense to me.

I have intentionally tried to store all variables as CSS custom properties, as these have useful features for changing values on-the-fly at run-time. I was especially inspired by this article by Maxime Heckel called ["The Power of Composition with CSS Variables"](https://blog.maximeheckel.com/posts/the-power-of-composition-with-css-variables/), which gives practical examples and explanations behind building a colour palette using CSS variables and HSL.

However, SCSS variables are there for the areas where CSS properties can't be used yet - specifically, colour calculations and setting consistent responsive breakpoints.

[astro]: https://astro.build
[pnpm]: https://pnpm.io/
[scss]: https://sass-lang.com/
[bootstrap icons]: https://icons.getbootstrap.com/
[gum]: https://github.com/charmbracelet/gum
