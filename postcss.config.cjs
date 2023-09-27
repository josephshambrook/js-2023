/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    autoprefixer: {},
    "@csstools/postcss-global-data": {
      files: ["./src/styles2/media.css"],
    },
    "postcss-custom-media": {},
    "postcss-nesting": {},
  },
};

module.exports = config;
