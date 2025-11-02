import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/about.css";

const About = () => {

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

      <section className="about-hero fade-in-section">
        <h1>About ENN</h1>
        <p>Welcome to ENN — Edoho News Network, your source for real-time world, tech, sports, and entertainment news.</p>
      </section>

      <section className="about-mission fade-in-section">
        <h2>Our Mission</h2>
        <p>
          At ENN, our mission is to deliver timely, accurate, and engaging news to our audience. We combine modern technology with journalistic integrity to provide a platform where you can trust the news you read.
        </p>
      </section>

      <section className="about-vision fade-in-section">
        <h2>Our Vision</h2>
        <p>
          To be the leading online news network recognized for quality journalism, comprehensive coverage, and a user-friendly experience — all while keeping our readers informed and empowered.
        </p>
      </section>

      <section className="about-values fade-in-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Accuracy:</strong> We verify every story before publishing.</li>
          <li><strong>Integrity:</strong> Our reporting is unbiased and transparent.</li>
          <li><strong>Innovation:</strong> Using technology to make news accessible everywhere.</li>
          <li><strong>Engagement:</strong> We value our readers' voice and feedback.</li>
        </ul>
      </section>

      <section className="about-team fade-in-section">
        <h2>Our Team</h2>
        <p>
          ENN is built and maintained by passionate journalists and developers who love delivering information in a seamless way. From news curation to platform development, every member plays a key role in making ENN a trusted news network.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default About;
