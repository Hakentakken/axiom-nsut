import React from "react";
import "./Events.css"; // Import the CSS file for styling

// Dynamically load all images and videos from the "wheel of doom" folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);

const wheelOfDoomMedia = importAll(
  require.context(
    "../assets/events/wheel of doom",
    false,
    /\.(png|jpe?g|svg|mp4|webm)$/
  )
);

const philowalk = importAll(
  require.context(
    "../assets/events/Philo Walk 24",
    false,
    /\.(png|jpe?g|svg|mp4|webm)$/
  )
);

const jagriti = importAll(
  require.context(
    "../assets/events/jagriti",
    false,
    /\.(png|jpe?g|svg|mp4|webm)$/
  )
);

const farewell24 = importAll(
  require.context(
    "../assets/events/farewell 24",
    false,
    /\.(png|jpe?g|svg|mp4|webm)$/
  )
);

const cpcMedia = importAll(
  require.context(
    "../assets/events/cpc",
    false,
    /\.(png|jpe?g|svg|mp4|webm)$/
  )
);

const Trustfalldisaster = importAll(
  require.context(
    "../assets/events/Trustfalldisaster",
    false,
    /\.(png|jpe?g|svg|mp4|webm)$/
  )
);

const Scribbleandscramble = importAll(
  require.context(
    "../assets/events/scribble and scramble",
    false,
    /\.(png|jpe?g|svg|mp4|webm)$/
  )
);



console.log("Scribble and Scramble Media:", Scribbleandscramble); // Debugging

const eventData = [
  {
    title: "Trust Fall Disaster",
    date: "March 20, 2025",
    location: "NSUT fountain ke pass wala ground",
    description: "An insightful session on the latest trends in technology.",
    media: Trustfalldisaster, // Dynamically loaded media
  },
  {
    title: "Jagriti 2025",
    date: "March 20, 2025",
    location: "NSUT fountain ke pass wala ground",
    description: "An insightful session on the latest trends in technology.",
    media: jagriti, // Dynamically loaded media
  },
  {
    title: "Wheel of Doom",
    date: "April 15, 2025",
    location: "NESCI Ground",
    description:
      "Experience the thrill of the Wheel of Doom! A captivating event filled with challenges, excitement, and unforgettable moments.",
    media: wheelOfDoomMedia, // Dynamically loaded media
  },
  {
    title: "CPC - Chai Pe Charcha",
    date: "Weekly",
    location: "NSUT Canteen",
    description:
      "Join us every week for an engaging discussion over chai. Share ideas, debate, and connect with like-minded individuals.",
    media: cpcMedia, // Dynamically loaded media
  },
  {
    title: "Scribble and Scramble",
    date: "May 5, 2025",
    location: "NSUT NESCI Ground",
    description:
      "Learn the fundamentals of Artificial Intelligence in this hands-on workshop.",
    media: Scribbleandscramble, // Dynamically loaded media
  },
  {
    title: "Philo Walk 24",
    date: "May 5, 2025",
    location: "NSUT NESCI Ground",
    description:
      "Learn the fundamentals of Artificial Intelligence in this hands-on workshop.",
    media: philowalk, // Dynamically loaded media
  },
  {
    title: "Farewell 24",
    date: "May 5, 2025",
    location: "some place",
    description:
      "Learn the fundamentals of Artificial Intelligence in this hands-on workshop.",
    media: farewell24, // Dynamically loaded media
  },
];

const Events = () => {
  return (
    <div className="events-container">
      <h2 className="events-heading">Events</h2>
      <p className="events-description">
        Explore our exciting events and activities.
      </p>
      <div className="events-list">
        {eventData.map((event, index) => (
          <div className="event-section" key={index}>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date-location">
              <strong>Date:</strong> {event.date} |{" "}
              <strong>Location:</strong> {event.location}
            </p>
            <p className="event-description">{event.description}</p>

            {/* Images Row */}
            {event.media && (
              <div className="event-images-row">
                {event.media
                  .filter((media) => /\.(png|jpe?g|svg)$/.test(media)) // Filter only images
                  .map((image, idx) => (
                    <div className="media-item" key={idx}>
                      <img src={image} alt={`${event.title} slide ${idx + 1}`} />
                    </div>
                  ))}
              </div>
            )}

            {/* Videos Row */}
            {event.media && (
              <div className="event-videos-row">
                {event.media
                  .filter((media) => /\.(mp4|webm)$/.test(media)) // Filter only videos
                  .map((video, idx) => (
                    <div className="media-item" key={idx}>
                      <video
                        controls
                        src={video}
                        alt={`${event.title} video ${idx + 1}`}
                      />
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;