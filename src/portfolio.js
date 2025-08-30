import React from 'react';
import './portfolio.css'; // Import your CSS file

import img1 from '../src/ffff.png'

const Profile = () => {
  const skillDocs = {
    'Python': 'https://docs.python.org/3/',
    'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'TypeScript': 'https://www.typescriptlang.org/docs/',
    'SQL': 'https://www.w3schools.com/sql/',
    'React': 'https://react.dev/',
    'React Native': 'https://reactnative.dev/docs/getting-started',
    'REST APIs': 'https://restfulapi.net/',
    'Firebase': 'https://firebase.google.com/docs',
    'MySQL': 'https://dev.mysql.com/doc/',
    'PostgreSQL': 'https://www.postgresql.org/docs/',
    'Machine Learning': 'https://scikit-learn.org/stable/',
    'Deep Learning': 'https://pytorch.org/docs/stable/index.html',
    'Natural Language Processing': 'https://huggingface.co/docs/transformers/index',
    'Computer Vision': 'https://opencv.org/',
    'Large Language Models': 'https://huggingface.co/docs/transformers/main_classes/model',
    'Generative AI': 'https://openai.com/api/',
    'LangChain': 'https://python.langchain.com/docs/get_started/introduction',
    'LangGraph': 'https://langchain-ai.github.io/langgraph/',
    'Vector Databases': 'https://www.pinecone.io/learn/',
    'Prompt Engineering': 'https://www.promptingguide.ai/',
    'RAG': 'https://python.langchain.com/docs/use_cases/question_answering/',
    'MCP': 'https://modelcontextprotocol.io/',
    'Streamlit': 'https://docs.streamlit.io/',
    'Flask': 'https://flask.palletsprojects.com/',
    'FastAPI': 'https://fastapi.tiangolo.com/',
    'Power BI': 'https://learn.microsoft.com/en-us/power-bi/',
    'AWS': 'https://docs.aws.amazon.com/',
    'Azure': 'https://docs.microsoft.com/en-us/azure/',
    'Docker': 'https://docs.docker.com/',
    'Kubernetes': 'https://kubernetes.io/docs/',
    'Git': 'https://git-scm.com/doc'
  };

  const handleSkillClick = (skill) => {
    const url = skillDocs[skill];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="profile-container">
     
      <div className="intro-section">
        <div className="intro-content">
          <div className="intro-text">
            <h1 className="title">About <span className="highlight">ME</span></h1>
            <hr />
            <p>
              Hi, I am <span className="name-highlight">Karthik Rajan</span> from Chennai, India.
            </p>
            
            <p>
              I am currently working as an <strong>AI Engineer</strong> at <a href='https://www.sarvam.ai/' target='_blank' rel='noopener noreferrer' className="company-link">Sarvam AI, Bengaluru</a>, where I focus on developing innovative AI solutions and machine learning applications.
            </p>
            
            <p>
              I am optimistic and determined in every task I undertake, driven by curiosity and a passion for continuous learning. I value relationships and believe in building strong professional connections through collaboration and mutual respect.
            </p>
            <div className="activities-section">
              <h3>Apart from coding, some other activities that I love to do!</h3>
              <ul className="activities-list">
                <li>🎮 Playing Games</li>
                <li>🏏Playing Cricket</li>
                <li>🌍 Travelling</li>
              </ul>
            </div>
            
            
            <div className="resume-section">
              <a
                href="/Karthik-Rajan.pdf"
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
        <h2>Technical <span className="highlight">Skills</span></h2>
        <div className="skills-buttons">
          <button className="skill-button" onClick={() => handleSkillClick('Python')}>Python</button>
          <button className="skill-button" onClick={() => handleSkillClick('JavaScript')}>JavaScript</button>
          <button className="skill-button" onClick={() => handleSkillClick('TypeScript')}>TypeScript</button>
          <button className="skill-button" onClick={() => handleSkillClick('SQL')}>SQL</button>
          <button className="skill-button" onClick={() => handleSkillClick('React')}>React</button>
          <button className="skill-button" onClick={() => handleSkillClick('React Native')}>React Native</button>
          <button className="skill-button" onClick={() => handleSkillClick('REST APIs')}>REST APIs</button>
          <button className="skill-button" onClick={() => handleSkillClick('Firebase')}>Firebase</button>
          <button className="skill-button" onClick={() => handleSkillClick('MySQL')}>MySQL</button>
          <button className="skill-button" onClick={() => handleSkillClick('PostgreSQL')}>PostgreSQL</button>
          <button className="skill-button" onClick={() => handleSkillClick('Machine Learning')}>Machine Learning</button>
          <button className="skill-button" onClick={() => handleSkillClick('Deep Learning')}>Deep Learning</button>
          <button className="skill-button" onClick={() => handleSkillClick('Natural Language Processing')}>Natural Language Processing</button>
          <button className="skill-button" onClick={() => handleSkillClick('Computer Vision')}>Computer Vision</button>
          <button className="skill-button" onClick={() => handleSkillClick('Large Language Models')}>Large Language Models</button>
          <button className="skill-button" onClick={() => handleSkillClick('Generative AI')}>Generative AI</button>
          <button className="skill-button" onClick={() => handleSkillClick('LangChain')}>LangChain</button>
          <button className="skill-button" onClick={() => handleSkillClick('LangGraph')}>LangGraph</button>
          <button className="skill-button" onClick={() => handleSkillClick('Vector Databases')}>Vector Databases</button>
          <button className="skill-button" onClick={() => handleSkillClick('Prompt Engineering')}>Prompt Engineering</button>
          <button className="skill-button" onClick={() => handleSkillClick('RAG')}>RAG</button>
          <button className="skill-button" onClick={() => handleSkillClick('MCP')}>MCP</button>
          <button className="skill-button" onClick={() => handleSkillClick('Streamlit')}>Streamlit</button>
          <button className="skill-button" onClick={() => handleSkillClick('Flask')}>Flask</button>
          <button className="skill-button" onClick={() => handleSkillClick('FastAPI')}>FastAPI</button>
          <button className="skill-button" onClick={() => handleSkillClick('Power BI')}>Power BI</button>
          <button className="skill-button" onClick={() => handleSkillClick('AWS')}>AWS</button>
          <button className="skill-button" onClick={() => handleSkillClick('Azure')}>Azure</button>
          <button className="skill-button" onClick={() => handleSkillClick('Docker')}>Docker</button>
          <button className="skill-button" onClick={() => handleSkillClick('Kubernetes')}>Kubernetes</button>
          <button className="skill-button" onClick={() => handleSkillClick('Git')}>Git</button>
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
