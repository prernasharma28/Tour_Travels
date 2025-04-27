import React, { useState, useEffect } from "react";
import s1 from '../assets/images/searchicon.png';
import m1 from '../assets/images/Micicon.png';
import '../styles/about.css';
import p1 from '../assets/images/AboutP1.png';
import p2 from '../assets/images/AboutP2.png';
import p3 from '../assets/images/AboutP3.png';
import p4 from '../assets/images/AboutP4.png';
import TajMagazine from "../components/Magazine/travelmagazine"; // ✅ Import Magazine Component
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.avif';
import pic3 from '../assets/images/pic3.avif';
import pic4 from '../assets/images/pic4.avif';
import Footer from "../components/Footer/Footer";

const AboutUs = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sliderBackground, setSliderBackground] = useState(p1);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Search state
  const [showMagazine, setShowMagazine] = useState(false); // ✅ State for Magazine

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-theme', !isDarkMode);
  };

  const sliderItems = [
    { image: p1, text: "Discover Stunning Destinations" },
    { image: p2, text: "Unwind in Premium Hotels" },
    { image: p3, text: "Plan Your Perfect Tour" },
    { image: p4, text: "Create Lifetime Memories" },
  ];

  // ✅ Updated search function to show Magazine
  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchQuery.toLowerCase();

    if (query === "magazine") {
      setShowMagazine(true); // ✅ Show Magazine component
    } else {
      setShowMagazine(false); // ✅ Hide Magazine if another query is entered

      const pages = {
        "home": "/home",
        "about": "/about",
        "contact":"/contact",
        "tour": "/tours",
        "subscriptions":"/subscriptions",
        "gallery":"/gallery",
        "events":"/events",
        "dining":"/dining",
        "destinations":"/destinations",
      
      };

      if (pages[query]) {
        window.open(pages[query], "_blank"); // ✅ Opens in a new tab
      } else {
        alert("Page not found!");
      }
    }
  };

  return (
    <div className="about-us-container">
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

      <div className="slider-track" style={{ transform: "translate3d(0, 0, 0)", width: "1500px" }}>
        <div className="slider-slide">
          <img
            className="slider-image"
            alt="slider-img"
            src={pic1}
          />
        </div>
      </div>

      <div className="about-section">
        <div className="title-container">
          <h1 className="about-title">ABOUT US</h1>
        </div>
      </div>

      {/* ✅ Search Bar Section with added functionality */}
      <div style={{ marginTop: '-20px' }} className="search-section">
        <form className="search-form" onSubmit={handleSearch}>
          <img className="search-icon" alt="search-img" src={s1} />
          <input
            placeholder="Search for destinations, tours, or hotels."
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" style={{ display: "none" }}></button>
          <img className="mic-icon" alt="mic-img" src={m1} />
        </form>
      </div>

      {/* ✅ Show Magazine if "magazine" is searched */}
      {showMagazine ? <TajMagazine /> : (
        <>
         <div className="details-section">
         <div className="details-title">
           <h2 className="details-subtitle">Your Gateway to Adventure</h2>
           <h2 className="details-subtitle">Experience Unmatched Comfort</h2>
           <p className="details-text">
             At Wanderlust Journeys, we specialize in curating unforgettable travel experiences. Whether you're seeking luxurious hotel stays or exploring the natural wonders of the world, we are here to make your dreams come true.
           </p>
         </div>

        <div className="vision-section">
          <div className="vision-text">
            <h3 className="vision-title">Our Vision</h3>
            <p className="vision-description">
              To inspire and connect travelers with extraordinary experiences, ensuring every journey becomes a cherished memory. With a focus on comfort, style, and sustainability, we redefine the art of travel.
            </p>
           </div>
           <div className="vision-image">
             <img
              className="vision-img"
              alt="Explore the World"
              src={pic3}
            />
          </div>
        </div>
      </div>

      <div className="MuiBox-root css-oyuug0" id="details-group-with-full-width-media">
        <div className="MuiStack-root css-1yuqvx0">
          <h2 className="MuiStack-root">
            <span className="MuiTypography-root">
              Creating Unforgettable Journeys
            </span>
          </h2>
          <div className="MuiStack-root">
            <span className="details-text">
              From bespoke travel itineraries to handpicked accommodations, we deliver personalized experiences tailored to your needs. Let us guide you on a journey filled with wonder, relaxation, and discovery.
            </span>
          </div>
        </div>
        <div className="MuiBox-root css-12595yo">
          <img
            className="MuiBox-root css-0"
            alt="Experience the Best"
            style={{ width: "80%", height: "600px", cursor: "pointer", marginLeft: "150px", borderRadius: "20px"}}
            src={pic2}
            onClick={() => {
              const videoUrl = "https://assets-cug1-825v2.tajhotels.com/video/tajness%20-%203min_17th%20Jan%2022.mp4?Impolicy=Medium_High";
              const videoElement = document.createElement("video");
              videoElement.src = videoUrl;
              videoElement.controls = true;
              videoElement.style.width = "100%";
              videoElement.style.height = "auto";
              videoElement.style.position = "fixed";
              videoElement.style.top = "50%";
              videoElement.style.left = "50%";
              videoElement.style.transform = "translate(-50%, -50%)";
              videoElement.style.zIndex = "1000";
              document.getElementById("details-group-with-full-width-media").appendChild(videoElement);
              videoElement.play();
            }}
          />
        </div>
      </div>

      <div className="slider-after-video" style={{ marginTop: '70px', position: 'relative' }}>
        <h2 style={{marginLeft: "34%"}} className="details-subtitle">A World of Possibilities</h2>
        <span className="details-text">
          Explore our curated tours, premium accommodations, and immersive experiences designed to make every trip extraordinary.
        </span>
        <div
          className="slider-background"
          style={{
            backgroundImage: `url(${sliderBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '600px',
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            transition: 'background-image 0.8s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="slider-overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1,
            }}
          ></div>
          <div
            className="slider-content"
            style={{
              zIndex: 2,
              display: 'flex',
              flexDirection: 'row',
              gap: '30px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {sliderItems.map((item, index) => (
              <div
                key={index}
                className="slider-item1"
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={() => setSliderBackground(item.image)}
              >
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    display: 'inline-block',
                  }}
                  className="slider-img"
                />
                <div
                  className="slider-text"
                  style={{
                    marginTop: '10px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: 'white',
                    transform: 'translateY(10px)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                  }}
                >
                  {item.text}
                </div>
                <style>{`
                  .slider-item:hover .slider-img {
                    transform: scale(1.2);
                  }
                  .slider-item:hover .slider-text {
                    opacity: 1;
                    transform: translateY(0);
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="paathya-section">
        <div className="paathya-container">
          <h2 className="paathya-title">Our Commitment</h2>
          <p className="paathya-description">
            We are dedicated to delivering exceptional travel experiences while promoting sustainable tourism. Our efforts focus on creating meaningful connections and enriching lives through travel.
          </p>

          <div className="paathya-img-container">
            <img
              className="paathya-image"
              alt="Our Vision for Travel"
              src={pic4}
            />
          </div>
        </div>
      </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default AboutUs;