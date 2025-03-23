// filepath: [AboutUs.js](http://_vscodecontentref_/3)
import React from "react";
import "./AboutUs.css"; // Import the CSS file for styling

import familyImage from "../assets/FAMILY.HEIC"; // Import the family image
import Footer from "../components/Footer"; // Import the Footer component

// Dynamically load all images from the gallery folder
const importAll = (requireContext) =>
  requireContext.keys().map(requireContext);

const galleryImages = importAll(
  require.context("../assets/gallery", false, /\.(png|jpe?g|svg)$/)
);

console.log("Gallery Images:", galleryImages); // Debugging: Check loaded images

const AboutUs = () => {
  const cards = [
    {
      title: "Our Philosophy",
      content:
        "AXIOM stands as a beacon of intellectual curiosity, a society where ideas converge and minds expand. We believe in fostering an environment where questions are celebrated, and answers are merely the beginning of new inquiries.",
    },
    {
      title: "Our Mission",
      content:
        "To cultivate a community of thinkers, dreamers, and doers. AXIOM is dedicated to exploring the depths of human thought, bridging the gap between philosophy, science, and art.",
    },
    {
      title: "Our Vision",
      content:
        "A world where knowledge is boundless, where every individual is empowered to think critically and creatively. AXIOM envisions a future driven by innovation and guided by wisdom.",
    },
  ];

  return (
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
          <h2 className="long-card-title">The Origin of AXIOM</h2>
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

      {/* Gallery Section */}
      <div className="gallery-container">
  <h2 className="gallery-heading">GALLERY</h2>
  <div className="gallery-slider">
    <div className="gallery-track">
      {galleryImages.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img
            src={image}
            alt={`Gallery item ${index + 1}`}
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = "https://via.placeholder.com/300"; // Fallback image
            }}
          />
        </div>
      ))}
      {/* Duplicate images for seamless looping */}
      {galleryImages.map((image, index) => (
        <div className="gallery-item" key={`duplicate-${index}`}>
          <img
            src={image}
            alt={`Duplicate Gallery item ${index + 1}`}
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = "https://via.placeholder.com/300"; // Fallback image
            }}
          />
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutUs;