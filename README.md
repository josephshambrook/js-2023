# Joseph Shambrook 2023

My brand new website. Complete with a blog, a proper design, and (bloody finally) some sense of direction.

> 🚧 This is still in its early stages, targeting an MVP release by Jan 2023. No judging, yet.

## Try it yourself

The usual jazz, though with **[pnpm]** instead of npm.

1. Clone the repo locally and point a terminal at the downloaded folder
2. Install the dependencies using `pnpm install`
3. Run `pnpm start` to run the site in dev mode, or `pnpm build` then `pnpm run preview` to view the site in prod mode
4. Visit [localhost:3000] and feel good about yourself

## Tech used

- [Astro]
  - A mix of frameworks wherever I like, but usually [Svelte]
- [pnpm]
- [SCSS]

### Why Astro?

- It builds to static files by default, eliminating as much JavaScript as possible
- It lets me use other JS frameworks/libraries like Svelte and React when I feel like it, rather than locking me in to one or the other
- There's nice DX features, like import aliases, file-system routing and Markdown support

### Styling

I use SCSS, because I still love some of its powerful features like mixins, variables and nesting. CSS is slowly catching up and rendering more parts of SCSS redundant, so this is intended as a graceful use of both the modern features of CSS, with the extension of SCSS.

#### Variable strategy

SCSS has build-time variables, CSS has run-time custom properties. Both are useful in their own ways, and I combine them in a way that makes sense to me.

I intentionally do not store **every** variable with SCSS variables - only the ones that make sense to store there. For me, this applies to colours, as SCSS has powerful colour functions I may want to use. I define them as CSS custom properties too, but has the SCSS variables as their values. For other variables though, I default to CSS custom properties.

[astro]: https://astro.build
[pnpm]: https://pnpm.io/
[scss]: https://sass-lang.com/
[svelte]: https://svelte.dev/
