import fetch from "node-fetch";

export async function handler(event) {
    const ghostUrl = process.env.GHOST_API_URL;
    const apiKey = process.env.GHOST_API_KEY;

    const { query } = event.queryStringParameters;

    if (!query) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Query parameter is required." }),
        };
    }

    try {
        const response = await fetch(`${ghostUrl}/posts/?key=${apiKey}&filter=title:~'${query}'`);
        if (!response.ok) {
            throw new Error("Failed to fetch search results.");
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
