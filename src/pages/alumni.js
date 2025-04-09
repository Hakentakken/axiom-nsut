import React from "react";
import "./alumni.css"; // Add custom styles for the royal theme

const Alumni = () => {
  const alumniData = [
    { name: "John Doe", position: "Software Engineer", year: "2020", image: "placeholder.jpg" },
    { name: "Jane Smith", position: "Data Scientist", year: "2019", image: "placeholder.jpg" },
    { name: "Michael Brown", position: "Product Manager", year: "2018", image: "placeholder.jpg" },
    { name: "Emily Davis", position: "UX Designer", year: "2021", image: "placeholder.jpg" },
    { name: "Chris Wilson", position: "AI Researcher", year: "2020", image: "placeholder.jpg" },
    { name: "Sophia Johnson", position: "Marketing Specialist", year: "2019", image: "placeholder.jpg" },
    { name: "Daniel Lee", position: "DevOps Engineer", year: "2018", image: "placeholder.jpg" },
    { name: "Olivia Martinez", position: "Full Stack Developer", year: "2021", image: "placeholder.jpg" },
    { name: "James Anderson", position: "Cloud Architect", year: "2020", image: "placeholder.jpg" },
    { name: "Isabella Thomas", position: "Cybersecurity Analyst", year: "2019", image: "placeholder.jpg" },
  ];

  return (
    <div className="alumni-page">
      <h1 className="alumni-title">Our Esteemed Alumni</h1>
      <div className="alumni-container">
        {alumniData.map((alumnus, index) => (
          <div key={index} className="alumni-card">
            <div className="alumni-image-container">
              <img src={alumnus.image} alt={`${alumnus.name}`} className="alumni-image" />
            </div>
            <div className="alumni-card-header">
              <h2 className="alumni-name">{alumnus.name}</h2>
              <p className="alumni-position">{alumnus.position}</p>
            </div>
            <p className="alumni-year">Class of {alumnus.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;