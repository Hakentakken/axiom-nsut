import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => (
  <div className="loading-overlay">
    <div className="loading-spinner"></div>
    <span className="loading-text">Loading...</span>
  </div>
);

export default LoadingScreen;