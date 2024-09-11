import { useEffect } from 'react';
import './animation.css'
const useRotatingText = () => {
  useEffect(() => {
    const texts = ['Full Stack Developer', 'ML Enthusiast',];
    const element = document.querySelector('.rotating-text');
    let index = 0;

    const changeText = () => {
      element.textContent = texts[index];
      index = (index + 1) % texts.length;
    };

    const interval = setInterval(changeText, 3000); 

    return () => clearInterval(interval); 
  }, []);
};

export default useRotatingText;
