// filepath: [AboutUs.js](http://_vscodecontentref_/3)
import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import familyImage from "../assets/FAMILY.HEIC";
import Footer from "../components/Footer";
import { PiAtomBold, PiTargetBold, PiEyeBold, PiSparkleBold } from "react-icons/pi";

// Dynamically load all images from the gallery folder
const importAll = (requireContext) =>
  requireContext.keys().map(requireContext);

const galleryImages = importAll(
  require.context("../assets/gallery", false, /\.(png|jpe?g|svg)$/)
);

const AboutUs = () => {
  const cards = [
    {
      title: (
        <>
          <PiAtomBold style={{ color: "#00fff7", marginRight: 10, fontSize: "1.5em", verticalAlign: "middle" }} />
          Our Philosophy
        </>
      ),
      content:
        "AXIOM stands as a beacon of intellectual curiosity, a society where ideas converge and minds expand. We believe in fostering an environment where questions are celebrated, and answers are merely the beginning of new inquiries.",
    },
    {
      title: (
        <>
          <PiTargetBold style={{ color: "#a259ff", marginRight: 10, fontSize: "1.5em", verticalAlign: "middle" }} />
          Our Mission
        </>
      ),
      content:
        "To cultivate a community of thinkers, dreamers, and doers. AXIOM is dedicated to exploring the depths of human thought, bridging the gap between philosophy, science, and art.",
    },
    {
      title: (
        <>
          <PiEyeBold style={{ color: "#fff176", marginRight: 10, fontSize: "1.5em", verticalAlign: "middle" }} />
          Our Vision
        </>
      ),
      content:
        "A world where knowledge is boundless, where every individual is empowered to think critically and creatively. AXIOM envisions a future driven by innovation and guided by wisdom.",
    },
  ];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  // Carousel state
  const [current, setCurrent] = useState(0);
  const visibleCount = 3; // Number of images visible at once

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Get visible images for the carousel
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < visibleCount; i++) {
      images.push(galleryImages[(current + i) % galleryImages.length]);
    }
    return images;
  };

  return (
    <div className="page-container">
      <div className="about-container">
        <h1 className="about-heading">Welcome to AXIOM</h1>
        <p className="about-description">
          A hub of intellectual exploration and philosophical wonder. Here at AXIOM, we dare to ask the big questions and embrace the infinite possibilities of the mind.
        </p>
        <div className="cards-container">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-content">{card.content}</p>
            </div>
          ))}
        </div>

        {/* Long card for the origin of AXIOM */}
        <div className="long-card">
          <div className="long-card-content">
            <h2 className="long-card-title">
              <PiSparkleBold style={{ color: "#00fff7", marginRight: 10, fontSize: "1.3em", verticalAlign: "middle" }} />
              The Origin of AXIOM
            </h2>
            <p>
              AXIOM began as a humble idea, a spark of inspiration among a group of thinkers who yearned for a space to explore the depths of human thought. It was born from conversations that stretched long into the night, fueled by curiosity and a shared belief in the power of knowledge.
            </p>
            <p>
              Over time, AXIOM grew into a community—a collective of dreamers, philosophers, scientists, and artists. Together, they forged a path toward understanding, blending disciplines and breaking boundaries. AXIOM isn't just a society; it's a movement, a testament to what can be achieved when minds come together in pursuit of truth.
            </p>
          </div>
          <div className="long-card-image">
            <img src={familyImage} alt="AXIOM Family" />
          </div>
        </div>

        {/* Modern Carousel Gallery */}
        <div className="gallery-container">
          <h2 className="gallery-heading">GALLERY</h2>
          <div className="carousel-gallery">
            {getVisibleImages().map((img, idx) => (
              <div
                className="carousel-image-wrapper"
                key={`${current}-${idx}-${img}`} // Unique key for each carousel state
              >
                <img
                  src={img}
                  alt={`Gallery item ${current + idx + 1}`}
                  className="carousel-image"
                  loading="lazy"
                  onError={e => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/300"; }}
                />
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button
              className="carousel-btn"
              onClick={() => setCurrent((current - 1 + galleryImages.length) % galleryImages.length)}
            >&#8592;</button>
            <button
              className="carousel-btn"
              onClick={() => setCurrent((current + 1) % galleryImages.length)}
            >&#8594;</button>
          </div>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;