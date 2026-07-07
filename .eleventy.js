module.exports = function(eleventyConfig) {
  // BootstrapのCSSをコピー
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/css/bootstrap.min.css": "css/bootstrap.min.css"
  });

  // BootstrapのJSをコピー
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "js/bootstrap.bundle.min.js"
  });
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
