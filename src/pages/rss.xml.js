import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("./posts/**/*.md", { eager: true });
const posts = Object.values(postImportResult);

function addQueryParam(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";

  if (uri.match(re)) {
    uri = uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    uri = uri + separator + key + "=" + value;
  }
  return uri;
}

export const get = () =>
  rss({
    // `<title>` field in output xml
    title: "Joseph Shambrook",
    // `<description>` field in output xml
    description:
      "Blog posts by Joseph Shambrook, a front-end developer from the UK",
    // add a custom stylesheet to make the feed look prettier within browsers
    stylesheet: "/pretty-feed-v3.xsl",
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: posts
      .filter((post) => !post.frontmatter.draft ?? false)
      .map((post) => ({
        link: addQueryParam(post.url, "at_medium", "rss"),
        title: post.frontmatter.title,
        pubDate: post.frontmatter.publishDate,
        description: post.frontmatter.description,
      })),
  });
