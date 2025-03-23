import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Podcast from "./pages/Podcast";
import Newsletter from "./pages/Newsletter";

function App() {
  return (
    <Router>
      <div style={{ position: "relative" }}>
        {/* Particles in the background */}
        <div style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
          <ParticleBackground />
        </div>

        {/* NavBar and Content */}
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;