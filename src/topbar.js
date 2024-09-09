import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css'; 

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <h1>My Portfolio</h1> 
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/portfolio" className="nav-button">About</Link>
        <Link to="/experience" className="nav-button">Education</Link>
        <Link to="/projects" className="nav-button">Projects</Link>
        <Link to="/certifications" className="nav-button">Certifications</Link>
        <Link to="/memories" className="nav-button">Achievement</Link>
       
      </div>
    </div>
  );
};

export default Topbar;
