import React, { useState, useEffect } from 'react';
import './experience.css';

const Experience = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const quizQuestions = [
    {
      question: "What is the primary goal of Artificial Intelligence?",
      options: [
        "To create machines that can only perform repetitive tasks",
        "To replace human intelligence entirely", 
        "To simulate human intelligence in machines",
        "To eliminate the need for human decision-making"
      ],
      correct: 2
    },
    {
      question: "A company is implementing AI systems to enhance its decision-making processes. Which is the most critical first step in ensuring effective AI governance?",
      options: [
        "Focusing on AI system performance metrics",
        "Investing in advanced AI technologies",
        "Training employees on AI ethics",
        "Establishing clear data governance policies"
      ],
      correct: 3
    },
    {
      question: "A company is developing an AI system for hiring decisions. During testing, it is discovered that the AI favors certain demographic groups over others due to biased training data. What should the company do to address this ethical issue?",
      options: [
        "Ignore the bias since it reflects real-world data",
        "Retrain the AI with more diverse and representative data",
        "Limit the AI's use to non-critical hiring decisions",
        "Replace the AI system with human decision-makers"
      ],
      correct: 1
    },
    {
      question: "A company deploying an AI system for customer service discovers that the system is vulnerable to data manipulation by external actors. Which risk factor does this scenario primarily highlight?",
      options: [
        "Likelihood",
        "Vulnerability", 
        "Impact",
        "Opportunity"
      ],
      correct: 1
    },
    {
      question: "What is the primary function of a neural network in machine learning?",
      options: [
        "To mimic the human brain in processing information",
        "To generate random predictions for datasets",
        "To store large amounts of data for analysis", 
        "To replace traditional databases in machine learning systems"
      ],
      correct: 0
    },
    {
      question: "A company wants to use machine learning to predict customer churn based on past behavior. Which aspect of neural networks makes them suitable for this task?",
      options: [
        "Their ability to identify complex patterns in data",
        "Their capability to store large amounts of customer data",
        "Their ability to replace traditional databases",
        "Their speed in processing simple calculations"
      ],
      correct: 0
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };
  return (
    <div className="education-section">
      <div className="education-left">
        <h1>EDUCATION AND EXPERIENCE</h1>
        <hr />
        <h2>Professional Experience</h2>
        <p>
          <strong>AI Engineer</strong> @ <a href="https://www.sarvam.ai/" target="_blank" rel="noopener noreferrer" className="company-link">Sarvam AI, Bengaluru</a>
          <br />
          Building Agents.
        </p>

        <h2>Internship Programme</h2>
        <p>
          <strong>AI Intern</strong> @ <a href="https://vahan.co/" target="_blank" rel="noopener noreferrer" className="company-link">Vahan.ai, Bangalore</a> (May-June 2025)
          <br />
          Worked as AI Intern, developing ASR systems & voice bot agents using OpenAI models. Working on speech-to-text, text-to-speech, and real-time voice interaction pipeline.
        </p>
        <p>
          <strong>SDE Intern</strong> @ <a href="https://ninjacart.com/" target="_blank" rel="noopener noreferrer" className="company-link">NinjaCart, Bangalore</a> (April 2025)
          <br />
          Worked as SDE Intern, building AI Agents to automate workflows across Agri-tech and Fintech domains.
        </p>
        <p>
          <strong>Data Science Intern</strong> @ <a href="@https://signatech.com" target="_blank" rel="noopener noreferrer" className="company-link">Signa Tech Services Pvt Ltd</a>
          <br />
          Contributed to working with LLM applications and developing a standalone web application that leverages OpenAI models.
        </p>
        <p>
          <strong>Global Academic Internship Programme</strong> on 'Data Analytics using Big Data' in association 
          with School of Computing @ <a href="https://www.nus.edu.sg/" target="_blank" rel="noopener noreferrer" className="company-link">National University of Singapore (NUS)</a> and <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="company-link">Amazon (AWS)</a>
        </p>
        <p>
          <strong>Android Application Development Internship</strong> from <a href="@https://pkinnovatives.com/" target="_blank" rel="noopener noreferrer" className="company-link">PK Innovatives, Chennai</a>, during Jan-Feb, 2023 (Online)
        </p>
       
        <h2>Achievement</h2>
        <p>
          <strong>Patent Publications:</strong>
        </p>
        <p>
          Published a patent titled <strong>'ALZCARE: Personalized Voice Assistant for Alzheimer Patients'</strong> (Application No. 202441089436, Publication Date: 29/11/2024), leveraging deep learning and Azure IoT for advanced neurodegenerative care solutions.
        </p>
        <p>
          Published a patent titled <strong>'EDGE-AI Powered Pothole Detection System & Method for Real-Time Road Safety Enhancement'</strong> (Co-Inventor, Application No. 202541010838 A, dated: 14/02/2025), integrating deep learning models like YOLO with edge computing.
        </p>
        <p>
          <strong>Hackathon & Research:</strong>
        </p>
        <p>
          Winner of Smart India Hackathon, 2023, held at Amity University, Noida 
          during December 2023 which was organised by Ministry of Education 
        </p>
        
        <p>
          Presented a paper in the 7th World Conference on “Smart Trends in System, Security & Sustainability”, Aug, 2023 
          (accepted for springer LLN serious in scopus indexed journal)  
        </p>
      </div>

      <div className="education-right">
        <h2>2019 - 2025</h2>
        <div className="education-details">
          <div className="education-item">
            <h3>Bachelor Degree</h3>
            <p>B.E. Computer Science and Engineering - Final Year, from Easwari Engineering College, Ramapuram, Chennai (Affiliated to Anna University) - CGPA: 8.6 (As of Semester VI)</p>
          </div>
          <div className="education-item">
            <h3>Senior secondary (12th)</h3>
            <p>Alwin Memorial Public School, Selaiyur, Chennai.(CBSE)Total marks obtained 454 / 500 with 91%
</p>
          </div>
          <div className="education-item">
            <h3>Secondary (10th) </h3>
            <p>Alwin Memorial Public School, Selaiyur, Chennai. (CBSE)
Total marks obtained 474/500 with 94%</p>
          </div>
        </div>
        

        
        {/* Floating Stats */}
        <div className="floating-stats">
          <div className="stat-card">
            <div className="stat-number">2</div>
            <div className="stat-label">Patents</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Internships</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8.7</div>
            <div className="stat-label">CGPA</div>
          </div>
        </div>
        
        {/* Tech Quiz */}
        <div className="mini-game">
          <h3>🧠 Tech Quiz Challenge</h3>
          <div className="game-container">
            {!showResults ? (
              <>
                <div className="quiz-progress">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </div>
                <div className="quiz-question">
                  {quizQuestions[currentQuestion].question}
                </div>
                <div className="quiz-options">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`quiz-option ${selectedAnswer === index ? 'selected' : ''}`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button 
                  className="game-reset" 
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                >
                  {currentQuestion + 1 === quizQuestions.length ? 'Finish Quiz' : 'Next Question'}
                </button>
              </>
            ) : (
              <>
                <div className="quiz-results">
                  <h4>Quiz Complete! 🎉</h4>
                  <div className="final-score">
                    Your Score: <span>{score}</span> / {quizQuestions.length}
                  </div>
                  <div className="score-percentage">
                    {Math.round((score / quizQuestions.length) * 100)}%
                  </div>
                  <div className="score-message">
                    {score === quizQuestions.length ? "Perfect! You're a tech expert! 🚀" :
                     score >= quizQuestions.length * 0.8 ? "Great job! You know your tech! 💪" :
                     score >= quizQuestions.length * 0.6 ? "Good effort! Keep learning! 📚" :
                     "Keep exploring the tech world! 🌟"}
                  </div>
                </div>
                <button className="game-reset" onClick={resetQuiz}>
                  Take Quiz Again
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Experience;
