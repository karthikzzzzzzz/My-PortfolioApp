import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home';

import Topbar from './topbar';
import Portfolio from './portfolio';
import Projects from './projects';
import Certifications from './certifications';
import Experience from './experience';
import Memories from './memories';



function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/memories" element={<Memories/>} />
        
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
