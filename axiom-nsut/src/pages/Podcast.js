
import React from "react";
import Particles from "react-tsparticles"; // Import Particles
import "./Podcast.css"; // Import the CSS file for styling

const Podcast = () => {
  return (
    <div className="podcast-container">
      {/* Particle Background */}
      <Particles
        options={{
          background: {
            color: {
              value: "#000000", // Black background
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff", // White particles
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
      {/* Coming Soon Message */}
      <div className="coming-soon">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default Podcast;