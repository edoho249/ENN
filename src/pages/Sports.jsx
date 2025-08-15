import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SportsCarousel from "../components/SportsCarousel";
import "../styles/home.css";
import "../styles/sports.css";

const NEWSAPI_KEY = "486b3a8076774361be518929a57881e0";

const Sports = () => {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=${NEWSAPI_KEY}`)
      .then(res => res.json())
      .then(data => setSportsNews(data.articles || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Header />

      <h2 className="section-title">Sports News</h2>
      <SportsCarousel sportsNews={sportsNews} />

      <Footer />
    </div>
  );
};

export default Sports;
