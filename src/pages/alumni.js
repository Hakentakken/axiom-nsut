import React from "react";
import "./alumni.css";

// Update these imports to match your actual filenames
import rounakImg from "../assets/alumni/Rounak_Raman.jpg";
import vishwasImg from "../assets/alumni/Vishwas_Latiyan.jpg";
import vehuvoyiImg from "../assets/alumni/ Vehuvoyi_Theluo.jpg";
import kushagraImg from "../assets/alumni/KUSHAGRA_LAKHWANI.jpg";
import gautamImg from "../assets/alumni/Gautam_Tayal.jpg";
import namanImg from "../assets/alumni/Naman_Dixit.jpg";
import bharatImg from "../assets/alumni/Bharat.jpeg";
import nisargImg from "../assets/alumni/nisagar_kumar.jpeg";
import amanImg from "../assets/alumni/aman_rana.jpg";

const Alumni = () => {
  const alumniData = [
    { 
      name: "Rounak Raman", 
      batch: "2021", 
      image: rounakImg, 
      thought: "Axiom was the spark that lit my flame, Where thoughts collided, never the same. In halls of logic, minds would roam, Yet every idea felt like home." 
    },
    { 
      name: "Vishwas Latiyan", 
      batch: "2017-2021", 
      image: vishwasImg, 
      thought: "What started as a tiny interest in Metaphysics eventually opened a door to a whole new world. I met incredible people - each one bringing their own unique, thoughtful spirit to every conversation. Their kind insights and genuine curiosity made me not only listen more deeply but also share my own ideas more clearly. College became more than just a place to learn; it was a warm, exciting journey filled with moments of discovery and heartfelt connection." 
    },
    { 
      name: "Vehuvoyi Theluo", 
      batch: "2023", 
      image: vehuvoyiImg, 
      thought: "There'll always be a soft spot in my heart for Axiom - the incredible people & the endless but engaging Chai pe Charchas. Brought a lot more warmth to an otherwise hectic course. Super excited and proud to see the society growing. Axiom all the way!" 
    },
    { 
      name: "Kushagra Lakhwani", 
      batch: "2025", 
      image: kushagraImg, 
      thought: "Axiom? is a state of mind and though I'll leave the place, I'll still have a piece of everyone in my heart." 
    },
    { 
      name: "Gautam Tayal", 
      batch: "2020-2024", 
      image: gautamImg, 
      thought: "Honestly, Axiom was one of the good things about my college life. Wishing all the best to the society and my juniors :)" 
    },
    { 
      name: "Naman Dixit", 
      batch: "2019-2023", 
      image: namanImg, 
      thought: "Least kaleshi place in college ❤️ A part of college that I still have close to me, should've spent a lot more time here. The world may end but CPCs shall continue forever!" 
    },
    { 
      name: "Bharat Sethi", 
      batch: "2019-2023", 
      image: bharatImg, 
      thought: "From ethical dilemmas and philosophical paradoxes to wild conspiracy theories, Axiom opened up a whole new world of thought for me. It gave me a space to engage with both like-minded and contrasting perspectives, pushing me to think deeper and question more. The CPCs, casual meets, and hangouts had a warm, homely vibe that’s hard to put into words. I met some of the brightest minds during my time here, and I’m grateful to have been part of such a thoughtful, curious, and welcoming community." 
    },
    { 
      name: "Nisarg", 
      batch: "2024", 
      image: nisargImg, 
      thought: "Axiom was one of the best and most chill societies at NSUT. The atmosphere was welcoming, and the seniors were incredibly supportive, always there when I needed help or guidance. Even the interview process was great, the group discussion wasn’t just about speaking skills but about exploring philosophical problems that made me think deeply and differently. I have some really fond memories of being part of Axiom.( especially the bee problem) If there’s one thing I regret, it’s not participating more missing out on recurring events and opportunities to engage. I truly believe my college experience, and maybe even my life, would’ve been different had I been more involved. Still, I’m grateful for everything Axiom gave me. It’ll always hold a special place in my heart." 
    },
    { 
      name: "Aman Rana", 
      batch: "2022", 
      image: amanImg, 
      thought: "Axiom was the perfect place for some horizon-broadening adventure! Diving into so many different ways of thinking was such an enriching journey, really honing my ability to see things from every angle. And those idea exchanges with so many bright minds? Seriously stimulating! Each conversation brought fresh perspectives and deepened my understanding of the world and everyone in it. Plus, it totally kicked my brain out of its usual patterns – yes, a fantastic way to unwind after lectures! Oh, and let's not forget soaking all that in with that unforgettable NESCII vibe! So yeah, massive thanks to Axiom!" 
    },
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
            </div>
            <p className="alumni-batch">Batch: {alumnus.batch}</p>
            <p className="alumni-thought">{alumnus.thought}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;