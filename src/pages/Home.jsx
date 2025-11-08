import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SportsCarousel from "../components/SportsCarousel";
import "../styles/home.css";
import "../styles/breaking.css";
import "../styles/newsCard.css";
import "../styles/sports.css";

const NYT_API_KEY = import.meta.env.VITE_NYT_API_KEY;
const NEWSAPI_KEY = import.meta.env.VITE_NEWSAPI_KEY;

const Home = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [loadingBreaking, setLoadingBreaking] = useState(true);
  const [loadingTop, setLoadingTop] = useState(true);
  const [loadingSports, setLoadingSports] = useState(true);

  useEffect(() => {
    const fetchBreakingNews = async () => {
      try {
        const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NYT_API_KEY}`);
        const data = await res.json();
        setBreakingNews(data.results?.slice(0, 10) || []);
      } catch (err) {
        console.error("Error fetching breaking news:", err);
      } finally {
        setLoadingBreaking(false);
      }
    };

    const fetchTopNews = async () => {
      try {
        const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${NYT_API_KEY}`);
        const data = await res.json();
        setTopNews(data.results?.slice(0, 6) || []);
      } catch (err) {
        console.error("Error fetching top news:", err);
      } finally {
        setLoadingTop(false);
      }
    };

    const fetchSportsNews = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=${NEWSAPI_KEY}`);
        const data = await res.json();
        setSportsNews(data.articles || []);
      } catch (err) {
        console.error("Error fetching sports news:", err);
      } finally {
        setLoadingSports(false);
      }
    };

    fetchBreakingNews();
    fetchTopNews();
    fetchSportsNews();
  }, []);

  return (
    <div>
      <Header />

      {/* Breaking News */}
      <h2 className="section-title">Breaking News</h2>
      <div className="breaking-news">
        {loadingBreaking ? (
          <p>Loading breaking news...</p>
        ) : breakingNews.length > 0 ? (
          breakingNews.map((news, idx) => (
            <div className="breaking-item" key={idx}>
              {news.multimedia?.[0]?.url && (
                <img src={news.multimedia[0].url} alt={news.title || "Breaking news"} />
              )}
              <span>{news.title || "No title"}</span>
            </div>
          ))
        ) : (
          <p>No breaking news available right now.</p>
        )}
      </div>

      {/* Top News */}
      <h2 className="section-title">Top News</h2>
      <section className="top-news-section">
        {loadingTop ? (
          <p>Loading top news...</p>
        ) : topNews.length > 0 ? (
          topNews.map((news, idx) => (
            <div
              key={idx}
              className="news-card"
              style={{
                backgroundImage: `url(${news.multimedia?.[0]?.url || "/fallback-image.jpg"})`,
              }}
            >
              <div className="overlay">
                <h3>{news.title || "No title"}</h3>
                <p>{news.abstract || "No description available."}</p>
                <a href={news.url || "#"} target="_blank" rel="noreferrer" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No top news available right now.</p>
        )}
      </section>

      {/* Sports News */}
      <h2 className="section-title">Sports News</h2>
      {loadingSports ? (
        <p>Loading sports news...</p>
      ) : sportsNews.length > 0 ? (
        <SportsCarousel sportsNews={sportsNews} />
      ) : (
        <p>No sports news available right now.</p>
      )}

      <Footer />
    </div>
  );
};

export default Home;