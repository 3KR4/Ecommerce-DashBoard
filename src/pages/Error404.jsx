import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../img/404-light.png'; 


export default function Error404() {
  const [isLightTheme, setIsLightTheme] = useState(true);


  useEffect(() => {
    const handleBodyClassChange = () => {
      setIsLightTheme(document.body.classList.contains('light'));
    };

    handleBodyClassChange(); // Update state initially

    // Listen for changes in body class
    document.body.addEventListener('transitionend', handleBodyClassChange);

    // Clean up event listener
    return () => {
      document.body.removeEventListener('transitionend', handleBodyClassChange);
    };
  }, []);

  return (
    <div className='error-page'>
      <h1>404</h1>
      <img src={errorImg} alt="" />

      <Link to='./' className='main-buttom'>Back To Home</Link>
    </div>
  );
}
