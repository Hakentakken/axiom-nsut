import React from "react";
import "./Team.css"; // Assuming you will style this in a separate CSS file

// Dynamically load all images from the "team" folder
const importAll = (requireContext) =>
  requireContext.keys().map(requireContext);

const teamImages = importAll(
  require.context("../assets/team", false, /\.(png|jpe?g|svg)$/)
);

// Map team member names to their corresponding images
const getImage = (name) => {
  const formattedName = name.toLowerCase().replace(/\s+/g, "-"); // Convert name to lowercase and replace spaces with hyphens
  return (
    teamImages.find((image) =>
      image.toLowerCase().includes(formattedName)
    ) || "https://via.placeholder.com/140" // Fallback image if no match is found
  );
};
const teamData = [
  {
    role: "President",
    members: [
      {
        name: "Nikita",
        quote: "Leadership is about making others better as a result of your presence.",
        image: getImage("Nikita"),
      },
      {
        name: "Arnav",
        quote: "A leader is one who knows the way, goes the way, and shows the way.",
        image: getImage("Arnav"),
      },
    ],
  },
  {
    role: "Vice President",
    members: [
      {
        name: "Tejas",
        quote: "Empowering others is the key to success.",
        image: getImage("Tejas"),
      },
      {
        name: "Shrey Paul",
        quote: "Great leaders don’t set out to be a leader, they set out to make a difference.",
        image: getImage("Shrey Paul"),
      },
    ],
  },
  {
    role: "General Secretary",
    members: [
      {
        name: "Garima Singh",
        quote: "The secret of getting ahead is getting started.",
        image: getImage("Garima Singh"),
      },
    ],
  },
  {
    role: "Admin Directors",
    members: [
      {
        name: "Dev",
        quote: "Discipline is the bridge between goals and accomplishment.",
        image: getImage("Dev"),
      },
      {
        name: "Nikhil",
        quote: "Success is the sum of small efforts repeated day in and day out.",
        image: getImage("Nikhil"),
      },
    ],
  },
  {
    role: "Social Media Director",
    members: [
      {
        name: "Shreyashi Das",
        quote: "Social media is not a media. The key is to listen, engage, and build relationships.",
        image: getImage("Shreyashi Das"),
      },
    ],
  },
  {
    role: "Design Director",
    members: [
      {
        name: "Sachin Rout",
        quote: "Design is not just what it looks like, but how it works.",
        image: getImage("Sachin Rout"),
      },
    ],
  },
  {
    role: "Content Director",
    members: [
      {
        name: "Pratham Puri",
        quote: "Content is the reason search began in the first place.",
        image: getImage("Pratham Puri"),
      },
    ],
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <p>Meet our amazing team of thinkers and doers!</p>
      {teamData.map((group, index) => (
        <div key={index} className="team-group">
          <h3>{group.role}</h3>
          <div className="team-members">
            {group.members.map((member, idx) => (
              <div key={idx} className="team-member">
                <img src={member.image} alt={`Profile of ${member.name}`} />
                <h4>{member.name}</h4>
                <p className="quote">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;