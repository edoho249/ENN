export default async function handler(req, res) {
  const apiKey = process.env.VITE_NEWSAPI_KEY;
  const url = `https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*"); // optional
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching sports news:", err);
    res.status(500).json({ error: "Failed to fetch sports news" });
  }
}
