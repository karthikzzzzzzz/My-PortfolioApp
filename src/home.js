import React from 'react';
import './home.css';
import { FaGithub,FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import img1 from '../src/eggeg.png'
import useRotatingText from './animation';
import img2 from '../src/captivating-cartoon-characters-cute-kids-playful-boys-lovely-girls-digital-world_1142283-14299.jpg'

const Home = () => {
    useRotatingText();

  return (
    <div>
   
      <section className="hero-section">
        <div className="content">
          <h1>Hello <span role="img" aria-label="wave">👋</span></h1>
          <h2>I'M <span className="highlight">KARTHIK RAJAN S</span></h2>
          <p><span className="highlight rotating-text">AI Engineer</span></p>

        </div>
        <div className="hero-image">
          <img src={img1} alt="Developer illustration" />
        </div>
      </section>

 
      <section className="about-section" id="about">
        <div className="about-content">
        
          <div className="about-text">
            <h2>LET ME <span className="highlight">INTRODUCE</span> MYSELF</h2>
            <p>
            I am a passionate and results-driven <strong className='highlight'>software engineer</strong> with a strong foundation in <strong className='highlight'>Artificial Intelligence, Machine Learning, and Full Stack Development</strong>. I thrive in dynamic environments that foster innovation, creativity, and teamwork. 
            </p>
            
            <p>With expertise in Python, JavaScript, and Java, I continuously expand my technical skill set, focusing on AI-driven solutions, modern web technologies, and scalable software systems. My certifications, including <strong className='highlight'>AWS Certified AI Practitioner, Microsoft Certified Azure AI Engineer Associate, and Azure AI Fundamentals</strong>, validate my commitment to staying at the forefront of AI advancements.

</p>
            <p>
            I am actively seeking opportunities as a <strong className='highlight'>Software Engineer </strong>where I can leverage my AI expertise, problem-solving skills, and passion for building intelligent, user-centric applications that make a meaningful impact.
            </p>
          </div>

   
          <div className="about-image">
            <img src={img2} alt="About section illustration" />
          </div>
        </div>
      </section>

     
      <footer className="footer">
        <h2>FIND ME ON</h2>
        <p>Feel free to connect with me</p>
        <div className="social-links">
          <a href="https://github.com/karthikzzzzzzz" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/karthikz/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
          </a>
          <a href="https://www.linkedin.com/in/karthik-rajan-s-aa3155266/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/_.karthikz_.03" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
