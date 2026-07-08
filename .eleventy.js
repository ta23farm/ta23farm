import eleventyNavigation from "@11ty/eleventy-navigation";
import pluginMermaid from "@kevingimbel/eleventy-plugin-mermaid";

export default function (eleventyConfig) {
  // BootstrapのCSSをコピー
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/css/bootstrap.min.css": "css/bootstrap.min.css"
  });

  // BootstrapのJSをコピー
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "js/bootstrap.bundle.min.js"
  });

  eleventyConfig.addPlugin(eleventyNavigation);
  eleventyConfig.addPlugin(pluginMermaid);

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

