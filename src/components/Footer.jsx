
import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-section">
          <h4>About ENN</h4>
          <p>ENN is a modern news platform delivering world, tech, sports, and entertainment news in real time.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Business</li>
            <li>Sports</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ENN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
