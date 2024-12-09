import fetch from "node-fetch";

export async function handler() {
    const ghostUrl = process.env.GHOST_API_URL;
    const apiKey = process.env.GHOST_API_KEY;

    try {
        const response = await fetch(`${ghostUrl}/posts/?key=${apiKey}&limit=all`);
        if (!response.ok) {
            throw new Error("Failed to fetch posts.");
        }

        const { posts } = await response.json();
        const randomPost = posts[Math.floor(Math.random() * posts.length)];

        return {
            statusCode: 200,
            body: JSON.stringify({
                title: randomPost.title,
                slug: randomPost.slug,
                localUrl: `/chapters/${randomPost.slug}/`,
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}
