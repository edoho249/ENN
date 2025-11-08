import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SportsCarousel from "../components/SportsCarousel";
import "../styles/home.css";
import "../styles/sports.css";

const Sports = () => {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    fetch("/data/sports.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load sports.json");
        return res.json();
      })
      .then((data) => setSportsNews(data.articles || []))
      .catch((err) => console.error("Error loading sports data:", err));
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
