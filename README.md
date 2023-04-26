# Joseph Shambrook 2023

My brand new website. Complete with a blog, a proper design, and (bloody finally) some sense of direction.

## Try it yourself

Once you have cloned the repo locally and ran `npm i` (or `npm install` if you love tradition), the following commands become available:

```bash
# starts the dev server at http://localhost:3000
npm start
# `npm run dev` works too

# builds the website in production mode
npm run build

# starts the production site at http://localhost:3000, after running the above build command
npm run preview
```

## Tech used

- [Astro]
- [SCSS]
- [Bootstrap Icons]
- ~~[pnpm]~~ (hit some snags, so reverted to npm)

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
