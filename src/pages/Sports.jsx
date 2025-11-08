import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SportsCarousel from "../components/SportsCarousel";
import "../styles/home.css";
import "../styles/sports.css";

const Sports = () => {
  const [sportsNews, setSportsNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSportsNews = async () => {
      try {
        const res = await fetch("/api/sports");
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        setSportsNews(data.articles || []);
      } catch (err) {
        console.error("Error fetching sports news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSportsNews();
  }, []);

  return (
    <div>
      <Header />
      <h2 className="section-title">Sports News</h2>

      {loading ? (
        <p>Loading sports news...</p>
      ) : sportsNews.length > 0 ? (
        <SportsCarousel sportsNews={sportsNews} />
      ) : (
        <p className="no-news">No sports news available right now.</p>
      )}

      <Footer />
    </div>
  );
};

export default Sports;
