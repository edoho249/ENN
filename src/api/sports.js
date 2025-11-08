export default async function handler(req, res) {
  const NEWSAPI_KEY = process.env.VITE_NEWSAPI_KEY;

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=${NEWSAPI_KEY}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch sports news" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching sports news:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
