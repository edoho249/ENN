import sportsData from "../data/sports.json"; // relative to Sports.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SportsCarousel from "../components/SportsCarousel";
import "../styles/home.css";
import "../styles/sports.css";

const Sports = () => {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    setSportsNews(sportsData.articles || []);
  }, []);

  return (
    <div>
      <Header />
      <h2 className="section-title">Sports News</h2>
      {sportsNews.length > 0 ? (
        <SportsCarousel sportsNews={sportsNews} />
      ) : (
        <p className="no-news">No sports news available right now.</p>
      )}
      <Footer />
    </div>
  );
};

export default Sports;
