import React from 'react';
import './memories.css';
import leftImage from '../src/singa.jpg'; 
import rightImage from '../src/IMG_5071.jpg'; 

const Memories = () => {
  return (
    <div className="memories-container">
      <div className="memories-header">
        <h1>ACHIEVEMENT</h1>
        <div className="memories-blue-line"></div>
      </div>

      <div className="memories-projects">
        <div className="memories-project">
          <div className="memories-project-image">
            <img src={leftImage} alt="Left Project" className="memories-img" />
          </div>
          <div className="memories-project-info-outside">
            <h2>NUS SINGAPORE | 2023</h2>
            <p>
              Team Presentation at NUS, Singapore on Data Analytics. One of the best team which won appreciation from Dr. Chan Mun Kitt.
            </p>
          </div>
        </div>

        <div className="memories-project">
          <div className="memories-project-image">
            <img src={rightImage} alt="Right Project" className="memories-img" />
          </div>
          <div className="memories-project-info-outside">
            <h2>SMART INDIA HACKETHON | 2023</h2>
            <p>
              Winning team of Smart India Hackathon held at Noida, India. We won the title with a prize money of 1 lakh as a team.
            </p>
          </div>
          
        </div>

    
      
        
      </div>

      
    </div>
  );
};

export default Memories;
