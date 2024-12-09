import fetch from "node-fetch";

export async function handler(event) {
    const ghostUrl = process.env.GHOST_API_URL;
    const apiKey = process.env.GHOST_API_KEY;

    const { tag } = event.queryStringParameters;

    if (!tag) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Tag parameter is required." }),
        };
    }

    try {
        const response = await fetch(`${ghostUrl}/posts/?key=${apiKey}&filter=tags:${tag}`);
        if (!response.ok) {
            throw new Error("Failed to fetch posts by tag.");
        }

        const { posts } = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(posts.map(post => ({
                title: post.title,
                slug: post.slug,
                localUrl: `/chapters/${post.slug}/`,
            }))),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}
