import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import Subtitle from "./../shared/Subtitle";
import experienceImg from '../assets/images/experience.png';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonaryImagesGallery from '../components/Image-gallery/MasonaryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';
import chatbotIcon from '../assets/images/imageLogo.png';
import heroVideo1 from '../assets/images/hero-video.mp4';
import Popup from '../components/Pop-up/Popup';
import TravelMagazine from '../components/Magazine/travelmagazine';
import Ocassion from '../components/Talking/Ocassion';
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  // Load the theme from localStorage if available
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
      <Popup/>
      {/* Dark/Light mode toggle button */}
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
        {isDarkMode ? '' : '🌙'}
      </button>


      {/* Video section at the top */}
      <section className="video-section" style={{ position: 'relative', height: '50vh' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '200%',
            objectFit: 'cover',
            zIndex: '-1', 
            pointerEvents: 'none',
          }}
        >
          <source src={heroVideo1} type="video/mp4" />
        </video>
      </section>


      <section className = 'sch' >

         <Container>
           <Row>
             <Col lg='6'>
               <div className="hero__content">
                 <div className="hero__subtitle d-flex align-items-center">
                 </div>
                 <h1 className="animated-text">
                  Traveling opens the door to creating <span className="highlight">memories</span>
                </h1>
                <p>Traveling offers the chance to try new foods, drinks, and activities, creating cherished memories. From skydiving to exploring vibrant cultures, each adventure leaves a lasting impression. Step out of your comfort zone, pack your bags, and embark on a journey filled with excitement, discovery, and unforgettable experiences.
                 </p>
               </div>
             </Col>
           </Row>
        </Container>
        <SearchBar />
        </section>



      {/* Other sections */}
      <section className='serve'>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__tour-title">
                Our Featured Tours
              </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br />
                  Maxime amet quos nobis, facere dolorum deserunt officia.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <Ocassion />

      <TravelMagazine />

      <Newsletter />

      {/* Chatbot Button */}
      <button
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '30px',
          height: '100px',  
          width: '100px',   
          backgroundColor: 'transparent', 
          border: 'none',
          cursor: 'pointer',
          zIndex: '1000',
        }}
      >
        <img src={chatbotIcon} alt="Chatbot" style={{ width: '75px', height: '75px' }} />
      </button>

      {/* Chatbot iframe */}
      {showChatbot && (
        <iframe
          src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/17/07/20241117073438-229OFMC2.json"
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '500px',
            border: 'none',
            zIndex: '1000',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          title="Chatbot"
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
          }}
        ></iframe>
      )}
      <Footer />
    </>
  );
};


export default Home;