
import React from "react";
import "../styles/breaking.css";

const BreakingTicker = ({ news }) => (
  <div className="breaking-ticker">
    {news.slice(0, 10).map((item, idx) => (
      <div key={idx} className="breaking-item">
        {item.multimedia && <img src={item.multimedia[0].url} alt="" />}
        <span>{item.title}</span>
      </div>
    ))}
  </div>
);

export default BreakingTicker;
