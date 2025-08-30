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
            Hello! I'm Karthik Rajan, a passionate and results-driven <strong className='highlight'>Software Engineer</strong> specializing in <strong className='highlight'>Artificial Intelligence, Machine Learning, and Full Stack Development</strong>.
            </p>
            
            <p>
            With a strong foundation in <strong className='highlight'>Python, and AI/ML</strong>, I'm dedicated to creating innovative, AI-powered solutions and scalable web applications. Whether it's developing intelligent systems or building modern web technologies, I strive to deliver user-centric applications that make a tangible impact.
            </p>
            
            <p>I'm certified as an <strong className='highlight'>AWS Certified AI Practitioner, Microsoft Certified Azure AI Engineer Associate, and Azure AI Fundamentals</strong>, which reflect my commitment to continuous learning in the AI space.
            </p>
            <p>
            If you’re looking for a driven engineer with a deep technical skill set and a focus on AI, I’d love to collaborate and contribute to your projects.
            Feel free to connect with me via LinkedIn to discuss how we can build the future together.
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
