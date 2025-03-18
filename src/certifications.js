import React from 'react';
import './certifications.css';
import img from '../src/certificate Karthik_page-0001.jpg'
import img1 from '../src/Coursera HNF9TAZXJVVG-19_page-0001.jpg'
import img2 from '../src/Privacy And Security In Online Social Media_page-0001.jpg'
import img3 from '../src/SKR AWS_page-0001.jpg'
import img4 from '../src/WhatsApp Image 2024-08-31 at 12.40.22 (1).jpeg'
import img5 from '../src/sih.jpg'
import img6 from '../src/ai-102.jpg'
import img7 from '../src/ai-900.jpg'
import img8 from '../src/aws-ai.jpg'

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
              src={img8}
              alt="AWS Certified AI Practitioner"
              className="project-image"
            />
            <h3>AWS Certified AI Practitioner | 2024</h3>
            <p>
              Earned the AWS Certified AI Practitioner certification, showcasing expertise in AI/ML concepts, AWS AI services, and best practices for deploying AI-driven solutions in the cloud.
            </p>
          </div>

          <div className="project-item">
            <img
              src={img6}
              alt="Microsoft Certified Azure AI Engineer Associate"
              className="project-image"
            />
            <h3>Microsoft Certified Azure AI Engineer Associate | 2024</h3>
            <p>
              Achieved the Azure AI Engineer Associate certification, demonstrating proficiency in designing, deploying, and managing AI solutions on Microsoft Azure using cognitive services and machine learning models.
            </p>
          </div>

          <div className="project-item">
            <img
              src={img7}
              alt="Microsoft Certified Azure AI Fundamentals"
              className="project-image"
            />
            <h3>Microsoft Certified Azure AI Fundamentals | 2024</h3>
            <p>
              Obtained the Azure AI Fundamentals certification, validating foundational knowledge in AI concepts, machine learning, and Azure AI services, essential for building intelligent applications.
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
