
import React from "react";
import "../styles/newsCard.css";

const NewsCard = ({ news }) => (
  <div className="news-card" style={{ backgroundImage: `url(${news.multimedia?.[0]?.url})` }}>
    <div className="overlay">
      <h3>{news.title}</h3>
      <p>{news.abstract}</p>
      <a href={news.url} target="_blank" rel="noreferrer" className="read-more-btn">Read More</a>
    </div>
  </div>
);

export default NewsCard;
