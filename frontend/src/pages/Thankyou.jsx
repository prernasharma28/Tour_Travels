import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/thank-you.css";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookingId, setBookingId] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set booking ID or fallback
    if (location.state?.bookingId) {
      setBookingId(location.state.bookingId);
    } else {
      const fallbackId = `TRVL-${Math.floor(10000 + Math.random() * 90000)}`;
      setBookingId(fallbackId);
    }

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    }
  }, [location.state]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark-theme", !isDarkMode);
  };

  return (
    <div className="thankyou-container">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: "20px",
          right: "30px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: "1000",
          fontSize: "24px",
        }}
      >
        {isDarkMode ? "🌞" : "🌙"}
      </button>

      <div className="thankyou-card">
        <div className="confetti-animation">
          <iframe
            src="https://lottie.host/embed/0daeba58-b88f-4334-a1c3-14448f1363fc/q7MRhRiYkR.lottie"
            title="Celebration Animation"
            className="animation-frame"
            allowFullScreen
          ></iframe>
        </div>

        <h1 className="thankyou-title">Thank You for Booking! 🎉</h1>
        <p className="thankyou-subtitle">
          Your journey is now confirmed. Get ready to explore new adventures!
        </p>
        <p className="thankyou-info">
          We’ve sent the confirmation details to your email.
        </p>
        <p className="thankyou-booking">
          Booking ID: <span className="booking-id">{bookingId}</span>
        </p>

        <div className="thankyou-buttons">
          <button onClick={() => navigate("/tours")} className="primary-button">
            Book Another Tour
          </button>
          <button onClick={() => navigate("/home")} className="secondary-button">
            Return Home
          </button>
        </div>

        <div className="thankyou-footer">✨ TRIVIO</div>
      </div>
    </div>
  );
};

export default ThankYouPage;
