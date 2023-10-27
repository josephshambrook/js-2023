<h1 align="center">Joseph Shambrook 2023</h1>

![My logo in the center, on a dark blue background](/public/assets/IMG_0343.png)

<p align="center">My brand new website. Complete with a blog, a proper design, and (bloody finally) some sense of direction.</p>

## Try it yourself

Once you have cloned the repo locally and ran `npm i` (or `npm install` if you love tradition), the following commands become available:

```bash
# starts the dev server at http://localhost:4321
npm start

# does the same as npm start, but also runs TS type-checking at the same time
npm run dev

# builds the website in production mode
npm run build

# starts the production site at http://localhost:4321, after running the above build command
npm run preview
```

## Tech used

- [Astro]
- Modern CSS
- [Bootstrap Icons]

### Why Astro?

- It builds to static files by default, eliminating as much JavaScript as possible.
- It lets me use other JS frameworks/libraries like Svelte and React when I feel like it, rather than locking me in to one or the other.
- There are nice DX features, like import aliases, file-system routing and Markdown support.
- It is being actively developed into a framework that stands with the giants.

[astro]: https://astro.build
[bootstrap icons]: https://icons.getbootstrap.com/
