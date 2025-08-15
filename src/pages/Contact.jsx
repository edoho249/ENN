import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/contact.css";

const Contact = () => {

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div>
      <Header />

      <section className="contact-hero fade-in-section">
        <h1>Contact Us</h1>
        <p>Have questions, feedback, or story tips? Reach out to ENN and we’ll get back to you promptly.</p>
      </section>

      <section className="contact-form fade-in-section">
        <form>
          <label>
            Name
            <input type="text" placeholder="Your full name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="Your email address" required />
          </label>

          <label>
            Subject
            <input type="text" placeholder="Subject of your message" required />
          </label>

          <label>
            Message
            <textarea placeholder="Your message..." rows="6" required></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="contact-info fade-in-section">
        <h2>Other Ways to Reach Us</h2>
        <p>Email: info@enn-news.com</p>
        <p>Phone: +234 801 234 5678</p>
        <p>Address: 123 News Street, Nsukka, Nigeria</p>
        <div className="socials">
          <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
