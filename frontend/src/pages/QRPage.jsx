import React, { useState, useEffect } from 'react';
import '../styles/QRPage.css'; // Optional: Ensure your styles are loaded
import p from '../assets/images/QRImg.png'
import Footer from "../components/Footer/Footer";

const QRPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle the dark mode state
  };

  // Save the theme in localStorage to persist on reload
  useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
      }
    }, []);
  
    // Toggle theme (light/dark)
    const toggleTheme = () => {
      const newTheme = !isDarkMode ? 'dark' : 'light';
      setIsDarkMode(!isDarkMode);
      localStorage.setItem('theme', newTheme); // Save theme to localStorage
      document.body.classList.toggle('dark-theme', !isDarkMode); // Apply dark-theme class
    };
  
  return (
    <>
    <div className={`qr-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <h2>Scan the QR Code</h2>
      <img src={p} alt="QR Code" className="qr-code" />
      <p>Scan the above QR code to proceed with your plan.</p>

      {/* Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '20px',
          right: '30px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: '1000',
          fontSize: '24px',
        }}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>
      </div>
      <Footer />
      </>
  );
};

export default QRPage;