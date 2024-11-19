// const fs = require("fs");
import ghostData from "./_data/ghost.js";

export default function (eleventyConfig) {
    // Pass styles for public dir
    eleventyConfig.addPassthroughCopy("src/styles");

    // Pass img folder for public dir
    eleventyConfig.addPassthroughCopy("src/images");

    // Add a custom collection for Ghost CMS data
    eleventyConfig.addCollection("chapters", async function () {
        const chapters = await ghostData();
        return chapters;
    });

    return {
        // explicity state that everything should be processed using nunjucks
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
