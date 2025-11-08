import React from "react";
import "../styles/sports.css";

const SportsCarousel = ({ sportsNews }) => {
  const filteredSportsNews = sportsNews.filter(news => news.urlToImage);

  return (
    <section className="sports-carousel">
      <div className="carousel-wrapper">
        {filteredSportsNews.length > 0 ? (
          filteredSportsNews.map((news, idx) => (
            <div
              className="carousel-item"
              key={idx}
              style={{
                backgroundImage: `url(${news.urlToImage || "/fallback-image.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay">
                <h4>{news.title || "No Title"}</h4>
                <a
                  href={news.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="read-more"
                >
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "gold" }}>No sports news available right now.</p>
        )}
      </div>
    </section>
  );
};

export default SportsCarousel;
