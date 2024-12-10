import fetch from "node-fetch";

export async function handler(event) {
    const ghostUrl = process.env.GHOST_API_URL;
    const apiKey = process.env.GHOST_API_KEY;
    const { currentSlug } = event.queryStringParameters;

    if (!currentSlug) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "currentSlug parameter is required." }),
        };
    }

    try {
        const response = await fetch(`${ghostUrl}/posts/?key=${apiKey}`);
        if (!response.ok) {
            throw new Error("Failed to fetch chapters.");
        }

        const { posts } = await response.json();
        const chapters = posts.map(post => ({
            title: post.title,
            slug: post.slug,
            localUrl: `/chapters/${post.slug}/`,
        }));

        const currentIndex = chapters.findIndex(ch => ch.slug === currentSlug);

        const next = currentIndex > 0 ? chapters[currentIndex - 1] : null;
        const previous = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

        return {
            statusCode: 200,
            body: JSON.stringify({ previous, next }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}
