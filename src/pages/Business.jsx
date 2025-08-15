
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";
import { API_KEY } from "../config";
import "../styles/home.css";

const Business = () => {
  const [businessNews, setBusinessNews] = useState([]);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setBusinessNews(data.results || []));
  }, []);

  return (
    <div>
      <Header />
      <section className="top-news-section">
        {businessNews.slice(0, 12).map((news, idx) => (
          <NewsCard key={idx} news={news} />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default Business;
