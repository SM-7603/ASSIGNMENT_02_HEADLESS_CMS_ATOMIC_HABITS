const fs = require("fs");

module.exports = function (eleventyConfig) {
    // Pass styles for public dir
    eleventyConfig.addPassthroughCopy("src/styles");

    // Pass img folder for public dir
    eleventyConfig.addPassthroughCopy("src/images");

    return {
        // explicity static that everything should be processed using nunjucks
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
        },
    };
};
