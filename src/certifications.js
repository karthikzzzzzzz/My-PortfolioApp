import React from 'react';
import './certifications.css'; 
import img from '../src/certificate Karthik_page-0001.jpg'
import img1 from '../src/Coursera HNF9TAZXJVVG-19_page-0001.jpg'
import img2 from '../src/Privacy And Security In Online Social Media_page-0001.jpg'
import img3 from '../src/SKR AWS_page-0001.jpg'
import img4 from '../src/WhatsApp Image 2024-08-31 at 12.40.22 (1).jpeg'
import img5 from '../src/sih.jpg'

const Certifications = () => {
  return (
    <div>
    
      <h1 className="certifications-title">CERTI<span className='highlight'>FICATIONS</span></h1>

    

      <div className="scroll-container">
        <div className="projects">
          <div className="project-item">
            <img
              src={img}
              alt="Arrowai Industries 2022"
              className="project-image"
            />
            <h3>Data Analytics using Deep Learning | 2023</h3>
            <p>
            The 'Data Analytics using Deep Learning' certification from NUS Singapore has significantly enhanced my expertise in applying deep learning techniques to data analytics. 
             
            </p>
          </div>
          <div className="project-item">
            <img
              src={img1}
              alt="Borcelle 2023"
              className="project-image"
            />
            <h3>Coursera, Board Infinity | 2024</h3>
            <p>
            I explored core technologies like HTML, CSS, and JavaScript, and gained proficiency in popular frameworks such as React and Angular. The course focused on integrating frontend interfaces with Java backends through RESTful APIs.
            </p>
          </div>
          <div className="project-item">
            <img
              src={img2}
              alt="Borcelle 2023"
              className="project-image"
            />
            <h3>NPTEL | 2023</h3>
            <p>
            Completing the NPTEL course in “Privacy & Security in Online Social Media” significantly enhanced my understanding of the challenges and strategies related to online privacy and security.
            </p>
          </div>
          <div className="project-item">
            <img
              src={img3}
              alt="Borcelle 2023"
              className="project-image"
            />
            <h3>Data Analytics using Big Data, AWS | 2023</h3>
            <p>
            This certification has enhanced my ability to tackle complex data challenges and optimize data workflows, enabling more effective analysis and decision-making.
            </p>
          </div>
          <div className="project-item">
            <img
              src={img4}
              alt="Borcelle 2023"
              className="project-image"
            />
            <h3>Web Development Training | 2023</h3>
            <p>
            The training provided a solid foundation in integrating various web technologies, which has improved my ability to create dynamic and responsive web solutions.
            </p>
          </div>
          <div className="project-item">
            <img
              src={img5}
              alt="Borcelle 2023"
              className="project-image"
            />
            <h3>SIH | 2023</h3>
            <p>
            Through the hackathon, I honed my skills in rapid problem-solving, teamwork,project execution and developing a functional prototype which improved my ability to work efficiently.
            </p>
          </div>
          
          
        </div>
      </div>
      </div>
      
   
  );
};

export default Certifications;
