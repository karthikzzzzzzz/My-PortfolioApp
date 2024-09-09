import React from 'react';
import './portfolio.css'; // Import your CSS file

import img1 from '../src/ffff.png'

const Profile = () => {
  return (
    <div className="profile-container">
     
      <div className="intro-section">
        <div className="intro-content">
          <div className="intro-text">
            <h1 className="title">About <span className="highlight">ME</span></h1>
            <hr />
            <p>
              Hi, I am <span className="name-highlight">Karthik Rajan </span> from Chennai, India.
              <br /> 
              <br/>
              I am currently Pursuing my B.E CSE Final year at SRM Easwari Engineering College.
              <br />
              <br/>
              I am optimistic & determined in each task undertaken with curiosity. I value relationship and respect it. 
            </p>
            <div className="activities-section">
              <h3>Apart from coding, some other activities that I love to do!</h3>
              <ul className="activities-list">
                <li>🎮 Playing Games</li>
                <li>✍️ Playing Cricket</li>
                <li>🌍 Travelling</li>
              </ul>
            </div>
            
            
            <div className="resume-section">
              <a
                href="/newResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                View My Resume
              </a>
            </div>
          </div>
          <div className="intro-image">
            <img src={img1} alt="Profile" />
          </div>
        </div>
      </div>

     
      <div className="skillset-section">
        <h2>Professional <span className="highlight">Skillset</span></h2>
        <div className="skills-buttons">
          <button className="skill-button">C++</button>
          <button className="skill-button">JavaScript</button>
          <button className="skill-button">TypeScript</button>
          <button className="skill-button">Node.js</button>
          <button className="skill-button">React</button>
          <button className="skill-button">ReactNative</button>
          <button className="skill-button">Firebase</button>
          <button className="skill-button">Android Studio</button>
          <button className="skill-button">Git</button>
          <button className="skill-button">Machine Learning</button>
          <button className="skill-button">MYSQL</button>
          <button className="skill-button">Python</button>
          <button className="skill-button">Java</button>
        </div>
      </div>

      <div className="skillset-section">
        <h2>Soft <span className="highlight">Skills</span></h2>
        <div className="skills-buttons">
          <button className="skill-button">Communication</button>
          <button className="skill-button">Time management</button>
          <button className="skill-button">Team Player</button>
          <button className="skill-button">Decision Making</button>
          <button className="skill-button">Fast Learner</button>
          <button className="skill-button">Adaptable</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
