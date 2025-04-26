import React, { useState, useEffect } from "react";
import chatbotIcon from "../assets/images/imageLogo.png";
import faqImage from "../assets/images/Travel.png";
import travelImg from "../assets/images/Travel.png";
import c1 from '../assets/images/ContactImg.png';
import "../styles/contact.css";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [activeSection, setActiveSection] = useState("contact");

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/v1/feedback/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Failed to send email");  // Use the error message from backend
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while sending the email.");
    }
  };



  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-theme', !isDarkMode);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", paddingBottom: "120px" }}>
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

      <div className="contact-page">
        <div className="hero-section1">
          <img src={c1} alt="Event Background" className="hero-image" />
          <div className="contact-legacy">
            <h2>-- Contact --</h2>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <div className="contact-heading">
          <h2>--- Get In Touch ---</h2>
        </div>

        <h3>Worldwide Reservation Centre</h3>

        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th>Toll-Free Number</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>India</td><td>1-800-111-825</td></tr>
            <tr><td>India Network</td><td>0091-22-6601-1825</td></tr>
            <tr><td>USA & Canada</td><td>1-866-969-1825</td></tr>
            <tr><td>Bahrain</td><td>80004866</td></tr>
            <tr><td>Brazil</td><td>8000381422</td></tr>
            <tr><td>Egypt</td><td>8000000485</td></tr>
            <tr><td>UAE</td><td>800-035-702-467</td></tr>
            <tr><td>Other countries</td><td>00-800-4-588-1-825</td></tr>
          </tbody>
        </table>
        <p><em>*Local / STD charges as applicable</em></p>
      </div>

      <div className="contact-feedback-buttons">
        <button onClick={() => setActiveSection("contact")} className="nav-button">Contact Us</button>
        <button onClick={() => setActiveSection("feedback")} className="nav-button">Feedback</button>
      </div>

      {activeSection === "contact" && (
        <div className="contact-info">
          <div className="contact-heading" />
          <div className="visme_d"
            data-title="Contact_Form"
            data-url="8r1ddn0v-contact-form"
            data-domain="forms"
            data-full-page="false"
            data-min-height="500px"
            data-form-id="90015"
          ></div>
        </div>
      )}

      {activeSection === "feedback" && (
        <div className="feedback-section">
          <h2>--- Feedback Form ---</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit Feedback</button>
          </form>

          {submitted && <p style={{ color: "green" }}>✅ Thank you! Your feedback was sent to your email.</p>}
        </div>
      )}

      <button
        onClick={toggleChatbot}
        style={{
          position: "fixed",
          bottom: "40px",
          right: "30px",
          height: "100px",
          width: "100px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: "1000",
        }}
      >
        <img src={chatbotIcon} alt="Chatbot" style={{ width: "100px", height: "100px" }} />
      </button>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p><strong>Email:</strong> travelease48@gmail.com</p>
        <p><strong>Phone:</strong> +919999999999</p>
        <p><strong>Address:</strong> Punjab, India</p>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;