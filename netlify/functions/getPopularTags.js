import fetch from "node-fetch";

export async function handler() {
    const ghostUrl = process.env.GHOST_API_URL;
    const apiKey = process.env.GHOST_API_KEY;

    try {
        const response = await fetch(`${ghostUrl}/tags/?key=${apiKey}&limit=all&include=count.posts`);
        if (!response.ok) {
            throw new Error("Failed to fetch tags.");
        }

        const { tags } = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(
                tags
                    .map(tag => ({
                        name: tag.name,
                        slug: tag.slug,
                        postCount: tag.count.posts,
                    }))
                    .sort((a, b) => b.postCount - a.postCount) // Sort by number of posts
            ),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}
