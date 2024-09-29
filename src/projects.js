import React from "react";
import "./projects.css"; 
import img1 from '../src/Screenshot 2024-09-09 at 11.11.51 PM.png'
import img2 from '../src/Screenshot 2024-09-09 at 4.57.28 PM.png'
import img3 from '../src/Screenshot 2024-09-09 at 11.19.57 PM.png'
import img4 from '../src/Screenshot 2024-09-29 at 11.52.29 AM.png'


const Projects = () => {
  const projectData = [
    {
      title: "Deanonymization of illegal crypto transaction",
      description:
        "This tool employs machine learning algorithms to classify transactions and wallets, analyses publicly available transaction information to form a Transaction Network Graph. A Network analysis approach to sniff the IP's of illegal wallets.",
      imgSrc: img1,
      githubLink: "https://github.com/donutAnees/Bitcoin-Investigation-Tool",
      demoLink: "https://demo.com",
    },
    {
      title: "CropSense",
      description:
        "This model employs machine learning algorithm and neural networks to predict the suitable crop that can be grown with respect to given input features of the crop and also the predicts the disease of the plant when the user uploads the defective plant leaf.",
      imgSrc: img2,
      githubLink: "https://github.com/theshredbox/CropSense",
      demoLink: "https://demo.com",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Tic Tac Toe game is a simple game where two players take turns marking spaces on a 3x3 grid that is created with React.js. It supports HTML, CSS, and JS code.",
      imgSrc:img3,
      githubLink: "https://github.com/karthikzzzzzzz/tic-tac-toe",
      demoLink: "https://main--tic-tac-toezz.netlify.app",
    },
    {
      title: "Movie-Booking UI System",
      description:
        "Designed and developed a responsive user interface focusing on user-friendly navigation & movie listings using AngularJS,HTML and CSS",
      imgSrc:img4,
      githubLink: "https://github.com/karthikzzzzzzz/Movie-ticket-booking",
      demoLink: "https://movieticketingbooking.netlify.app/",
    },
    
   
 
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">
        My Recent <span className="highlight">Works</span>
      </h2>
     
      <p className="section-description">
        Here are a few projects I've worked on recently.
      </p>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imgSrc} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.githubLink} className="button" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.demoLink} className="button" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
