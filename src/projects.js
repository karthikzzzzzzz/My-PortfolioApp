import React from "react";
import "./projects.css"; 
import img1 from '../src/Screenshot 2024-09-09 at 11.11.51 PM.png'
import img2 from '../src/Screenshot 2024-09-09 at 4.57.28 PM.png'
import img3 from '../src/Screenshot 2024-09-09 at 11.19.57 PM.png'
import img4 from '../src/Screenshot 2024-09-29 at 11.52.29 AM.png'
import img5 from '../src/408787623-f467500e-edc1-445a-a3a7-2687118e920a-2.png'
import img6 from '../src/415676092-e8c60e63-3445-4255-b521-eaf003d813ed.png'
import img7 from '../src/415732457-7d172fe6-7e5a-4836-8121-79455bdd6bab.png'
import img8 from '../src/415733232-502638b2-f9a3-481c-b916-497d89f1e38b.png'
import img9 from '../src/416062628-3ed65c98-1936-4385-90fd-9306ba09baf8.png'


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
    {
      title: "KarryBot - A Personal AI Assistant",
      description:
        "KarryBot is a personal AI assistant built using Streamlit, OpenAI, ChromaDB, and LangChain. It allows users to interact via text and voice, retrieve relevant information from a knowledge base, and generate AI-powered responses.",
      imgSrc:img9,
      githubLink: "https://github.com/karthikzzzzzzz/AI-Personal-Voice-Assistant",
      demoLink: "https://drive.google.com/file/d/190MCRHqQPdA5Tjyz_gYWhwp9IcpKwdAn/view?usp=drivesdk",
    },
    {
      title: "DataVizBot",
      description:
        "DataVizBot is a chatbot designed for data analysis specifically focused on CSV files. It utilizes advanced machine learning techniques such as Retrieval-Augmented Generation (RAG) and integrates with a Vector Database (VectorDB) for efficient data retrieval, analysis, and visualization. The chatbot can process CSV files, generate Python code for visualizations, and provide data-driven answers to user queries",
      imgSrc:img8,
      githubLink: "https://github.com/karthikzzzzzzz/DataVizBot",
      demoLink: "https://drive.google.com/uc?id=1t7JPSRLwNvogWBd8Na_dOIXvlk-p0HDF&export=download",
    },
    {
      title: "Real-Time Speech Transcription with Summarization and Insights",
      description:
        "This project implements a real-time speech transcription system using Azure Cognitive Services and OpenAI's GPT-4 API. The application transcribes speech from multiple speakers, identifies key dates, extracts actionable items, and provides a summarized transcript",
      imgSrc:img7,
      githubLink: "https://github.com/karthikzzzzzzz/AI-Real-time-transcription",
      demoLink: "https://github.com/karthikzzzzzzz/AI-Real-time-transcription",
    },
    {
      title: "FAQ Assistant",
      description:
        "FAQ Assistant is an intelligent system designed to assist with handling frequently asked questions (FAQ). The assistant utilizes natural language processing (NLP) techniques to provide users with accurate and relevant answers to their queries.",
      imgSrc:img6,
      githubLink: "https://github.com/karthikzzzzzzz/FAQ-Assistant",
      demoLink: "https://github.com/karthikzzzzzzz/FAQ-Assistant",
    },
    {
      title: "KarryBot-The-Grammar-Checker",
      description:
        "A React + FastAPI application for managing and processing grammar check-related tasks. This project features a frontend built with React and a backend powered by FastAPI.",
      imgSrc:img5,
      githubLink: "https://github.com/karthikzzzzzzz/KarryBot-The-Grammar-Checker",
      demoLink: "https://karrygrammer-check.netlify.app/",
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
