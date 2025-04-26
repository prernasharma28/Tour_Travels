import React, { useState, useEffect } from 'react';
import './SubscriptionPage.css';
import '@fontsource/poppins';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

const SubscriptionPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme); 
    document.body.classList.toggle('dark-theme', !isDarkMode); 
  };

  const plans = [
    {
      title: 'Basic',
      price: '₹599/month',
      features: ['Access to basic tours', 'Email support', 'Standard itineraries'],
      theme: 'basic-theme',
      icon: '🌍',
      link: '/basic-plan',
    },
    {
      title: 'VIP',
      price: '₹999/month',
      features: ['Exclusive tours', 'Priority support', 'Personalized itineraries', 'Travel gifts'],
      theme: 'vip-theme',
      icon: '✨',
      link: '/vip-plan',
    },
    {
      title: 'Premium',
      price: '₹3999/month',
      features: ['All-inclusive perks', '24/7 Concierge', 'Luxury experiences', 'Private tours'],
      theme: 'premium-theme',
      icon: '👑',
      link: '/premium-plan',
    },
  ];

  // Navigate to QR Page
  const handleQRNavigation = () => {
    navigate('/qrpage');
  };

  return (
    <>
    <div className={`enhanced-subscription-page1 ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '20px',
          right: '30px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000,
          fontSize: '24px',
        }}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>

      {/* Header */}
      <header className="header1">
        <h1 className="heading1">Find Your Perfect Plan</h1>
      </header>

      {/* Cards Container */}
      <div className="cards-container2">
        {plans.map((plan, index) => (
          <div className={`card2 ${plan.theme}`} key={index}>
            <div className="card-header2">
              <div className="icon1">{plan.icon}</div>
              <h2>{plan.title}</h2>
            </div>

            <p className="card-price1">{plan.price}</p>

            <ul className="features-list1">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button className="subscribe-btn1" onClick={handleQRNavigation}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SubscriptionPage;
