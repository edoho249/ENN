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

  useEffect(() => {
  
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NYT_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setBreakingNews(data.results?.slice(0, 10) || []))
      .catch((err) => console.error("Error fetching breaking news:", err));

    fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${NYT_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setTopNews(data.results?.slice(0, 6) || []))
      .catch((err) => console.error("Error fetching top news:", err));

    fetch(`https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=${NEWSAPI_KEY}`)
      .then((res) => res.json())
      .then((data) => setSportsNews(data.articles || []))
      .catch((err) => console.error("Error fetching sports news:", err));
  }, []);

  return (
    <div>
      <Header />

      <h2 className="section-title">Breaking News</h2>
      <div className="breaking-news">
        {breakingNews.length > 0 ? (
          breakingNews.map((news, idx) => (
            <div className="breaking-item" key={idx}>
              {news.multimedia?.[0] && (
                <img src={news.multimedia[0].url} alt={news.title} />
              )}
              <span>{news.title}</span>
            </div>
          ))
        ) : (
          <p>No breaking news available right now.</p>
        )}
      </div>

      <h2 className="section-title">Top News</h2>
      <section className="top-news-section">
        {topNews.length > 0 ? (
          topNews.map((news, idx) => (
            <div
              key={idx}
              className="news-card"
              style={{ backgroundImage: `url(${news.multimedia?.[0]?.url || ""})` }}
            >
              <div className="overlay">
                <h3>{news.title}</h3>
                <p>{news.abstract}</p>
                <a href={news.url} target="_blank" rel="noreferrer" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No top news available right now.</p>
        )}
      </section>

      <h2 className="section-title">Sports News</h2>
      {sportsNews.length > 0 ? (
        <SportsCarousel sportsNews={sportsNews} />
      ) : (
        <p>No sports news available right now.</p>
      )}

      <Footer />
    </div>
  );
};

export default Home;
