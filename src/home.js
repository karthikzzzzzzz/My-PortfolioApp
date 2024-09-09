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
          <p><span className="highlight rotating-text">Frontend Developer</span></p>

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
            My aim is to secure a challenging position as a Software engineer in a dynamic organization that values innovation, creativity, teamwork and where I can, utilize my knowledge and skills to contribute to the success of the organization 
            </p>
            <p>I am familiar in languages like <strong>Python, Javascript, and Java and exploring day by day</strong>.</p>
            <p>I would love to work in the fields of <strong>Web Technologies and Full Stack Development</strong> as well as exploring <strong>Machine Learning</strong>.</p>
            <p>
              I apply my passion for developing products with <strong>Machine Learning</strong> and modern JavaScript libraries like <strong>React.js and AngularJs</strong>.
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
