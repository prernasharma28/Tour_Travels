import React from "react";
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Branding Section */}
        <div className="footer-section">
          <div className="logo">
            <img src={logo} alt="Trivio Logo" className="footer-logo" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Discover Section */}
        <div className="footer-section">
          <h4>Discover</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Tours</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt /> <span>Punjab, India</span>
            </div>
            <div className="contact-item">
              <FaEnvelope /> <a href="mailto:travelease48@gmail.com">travelease48@gmail.com</a>
            </div>
            <div className="contact-item">
              <FaPhone /> <a href="tel:+919999999999">+91 9999999999</a>
            </div>
          </div>
        </div>

      </div>

      <div className="copyright">
        &copy; 2025 Travel World. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;