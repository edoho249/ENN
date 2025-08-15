import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SportsCarousel from "../components/SportsCarousel";
import "../styles/home.css";
import "../styles/sports.css";


const NEWSAPI_KEY = import.meta.env.VITE_NEWSAPI_KEY;

const Sports = () => {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
   
    fetch(
      `https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=${NEWSAPI_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setSportsNews(data.articles || []))
      .catch((err) => console.error("Error fetching sports news:", err));
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
