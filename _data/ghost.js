import fetch from "node-fetch";

export default async function () {
  const url = "https://simplicity.ghost.io/ghost/api/content/posts/?key=6fd4ffe7ac031243b7e98714b6";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Ghost data: ${response.statusText}`);
    }
    const { posts } = await response.json();
    if (!posts) {
      throw new Error("No posts found in the Ghost API response.");
    }

    return posts.map(post => ({
      title: post.title,
      excerpt: post.excerpt,
      tags: post.tags?.map(tag => tag.name) || [],
      slug: post.slug,
      html: post.html, // Full HTML content
      url: post.url,
      localUrl: `/chapters/${post.slug}/`, // Local URL for your site
    }));
  } catch (error) {
    console.error(error.message);
    return []; // Return an empty array to prevent Eleventy from failing
  }
}
