import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

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

export const get = async () => {
  const posts = await getCollection("posts");
  return rss({
    // `<title>` field in output xml
    title: "Joseph Shambrook",
    // `<description>` field in output xml
    description:
      "Blog posts by Joseph Shambrook, a front-end developer from the UK",
    // add a custom stylesheet to make the feed look prettier within browsers
    stylesheet: "/pretty-feed-v3.xsl",
    // base URL for RSS <item> links
    // SITE will use "site" from the project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // TODO: restore adding query param to urls
    items: posts
      .filter((post) => !post.data.draft ?? false)
      .map((post) => ({
        link: addQueryParam(`/posts/${post.url}`, "at_medium", "rss"),
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
      })),
    // items: postImportResult,
  });
};
