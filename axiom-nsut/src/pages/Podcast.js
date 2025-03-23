import React from "react";
import "./Podcast.css"; // Import the CSS file for styling

const podcastData = [
  {
    title: "The Future of Technology",
    description:
      "In this episode, we discuss the latest advancements in technology and their impact on society. Join us as we explore the future of AI, robotics, and more.",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual YouTube link
  },
  {
    title: "Philosophy and Modern Life",
    description:
      "How can ancient philosophical teachings help us navigate the complexities of modern life? Tune in to this thought-provoking discussion.",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual YouTube link
  },
  {
    title: "The Art of Innovation",
    description:
      "Innovation is at the heart of progress. In this episode, we talk about the creative process and how to foster innovation in any field.",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual YouTube link
  },
];

const Podcast = () => {
  return (
    <div className="podcast-container">
      <h2 className="podcast-heading">Podcast</h2>
      <p className="podcast-description">
        Tune into our latest podcasts and discussions.
      </p>
      <div className="podcast-list">
        {podcastData.map((podcast, index) => (
          <div className="podcast-section" key={index}>
            <h3 className="podcast-title">{podcast.title}</h3>
            <p className="podcast-description">{podcast.description}</p>
            <div className="podcast-video">
              <iframe
                width="100%"
                height="315"
                src={podcast.youtubeLink}
                title={podcast.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;