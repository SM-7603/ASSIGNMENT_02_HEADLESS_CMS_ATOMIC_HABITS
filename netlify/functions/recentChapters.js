import fetch from "node-fetch";

export async function handler() {
    const ghostUrl = process.env.GHOST_API_URL;
    const apiKey = process.env.GHOST_API_KEY;

    try {
        // get 5 in order...
        const response = await fetch(`${ghostUrl}/posts/?key=${apiKey}&limit=5&order=published_at desc`);
        if (!response.ok) {
            throw new Error("Failed to fetch recent chapters.");
        }

        const { posts } = await response.json();
        const formattedPosts = posts.map(post => ({
            title: post.title,
            slug: post.slug,
            localUrl: `/chapters/${post.slug}/`,
        }));

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formattedPosts),
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ error: error.message }),
        };
    }
}
