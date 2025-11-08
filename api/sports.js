export default async function handler(req, res) {
  const apiKey = process.env.NEWS_API_KEY; // stored secretly in Vercel
  const url = `https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching sports news:", error);
    res.status(500).json({ error: "Failed to fetch sports news" });
  }
}
