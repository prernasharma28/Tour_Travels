import React, { useState } from 'react';
import './wedding.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons for navigation

import destination1 from "../../assets/images/Destination1.png";
import destination2 from "../../assets/images/Destination2.png";
import destination3 from "../../assets/images/destination3.png";
import destination4 from "../../assets/images/Destination4.png";
import destination5 from "../../assets/images/Destination5.png";
import destination6 from "../../assets/images/Destination6.png";
import destination7 from "../../assets/images/Destination7.png";
import destination8 from "../../assets/images/Destination8.png";
import mehndi from "../../assets/images/Mehndi.png";
import haldi from "../../assets/images/Haldi.png";
import cocktail from "../../assets/images/Cocktail.png";
import renewal from "../../assets/images/Renewal.png";
import proposal from "../../assets/images/proposal.png";
import bridalShower from "../../assets/images/BridalShower.png";
import sangeet from "../../assets/images/Sangeet.png";
import honeymoon from "../../assets/images/HoneyMoon.png";
import coupleShoot from "../../assets/images/coupleShoot.png";
import heroImage from "../../assets/images/Destinationwedd.webp";
import Footer from '../Footer/Footer';

const Wedding = () => {
  const [search, setSearch] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [activeDestinationIndex, setActiveDestinationIndex] = useState(0);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  const threeImageContent = [
    { id: 1, image: destination5, heading: 'The Pierre, A Taj Hotel, New York', description: 'Experience timeless elegance at The Pierre...' },
    { id: 2, image: destination6, heading: 'Taj Exotica Resort & Spa, Goa', description: 'Discover a tropical haven in Goa...' },
    { id: 3, image: destination7, heading: 'Taj Lake Palace, Udaipur', description: 'Float into a dream on Udaipur’s Lake Pichola...' },
    { id: 4, image: destination8, heading: 'Taj Krishna, Hyderabad', description: 'Explore luxury and elegance at Taj Krishna...' }
  ];

  const destinations = [
    { title: 'Vows on the Beach', description: 'Your very own fairy tale...', image: destination1 },
    { title: 'Mountain Wedding Vows', description: 'Your very own fairy tale...', image: destination2 },
    { title: 'Royal Palace Weddings', description: 'Your very own fairy tale...', image: destination3 },
    { title: 'Iconic City Weddings', description: 'Your very own fairy tale...', image: destination4 }
  ];

  const weddingEvents = [
    { title: 'Mehndi', image: mehndi, description: 'Indulge in lively mehndi celebrations...' },
    { title: 'Haldi', image: haldi, description: 'Bask in the golden glow of joy...' },
    { title: 'CockTail', image: cocktail, description: 'Elevate your wedding with a stylish cocktail night...' },
    { title: 'Renewal of Vows', image: renewal, description: 'Rediscover your journey of love...' },
    { title: 'Proposal', image: proposal, description: 'Craft a bespoke proposal with us...' },
    { title: 'Bridal Shower', image: bridalShower, description: 'Embrace joy with your loved ones...' },
    { title: 'Sangeet', image: sangeet, description: 'Dance to the rhythm of love...' },
    { title: 'HoneyMoons', image: honeymoon, description: 'Ignite warmth and love with dream-like honeymoon experiences...' },
    { title: 'Couple Shoots', image: coupleShoot, description: 'Immortalize your love with a romantic photoshoot...' }
  ];
  const goToNextDestination = () => {
    setActiveDestinationIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const goToPrevDestination = () => {
    setActiveDestinationIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
  };

 

  return (
    <>
      <>
    <div className="wedding-page">
      <div className="hero-section">
        <img src={heroImage} alt="Wedding Destination" className="hero-image" />
      </div>

      {/* Title Section */}
      <div className="wedding-legacy">
        <h2>Timeless Weddings</h2>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search weddings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Wedding Description */}
      <div className="wedding-description">
        <h3>  Making Your Wedding Dreams Come True  </h3>
        <p>
          For generations, weddings at Taj Hotels are synonymous with cherished memories. Embark on a journey of timeless romance as our dedicated experts ensure that every detail is a reflection of your dream celebration.
        </p>

        {/* Conditionally render additional content */}
        {showMore && (
          <div>
            <p>
              Our legacy is built on personalized service, attention to detail, and a passion for making your special day truly unforgettable. Let us create a celebration that reflects your unique love story.
            </p>
            <p>
              Experience luxury with every detail taken care of—from personalized invitations to curated menus, stunning floral designs, and expert event coordination.
            </p>
            <p>
              Whether you envision a traditional, cultural wedding or a modern celebration, our expert planners are here to help guide you through every step of the process.
            </p>
          </div>
        )}

        {/* Show More/Less Button */}
        <button onClick={toggleContent} className="load-more-btn">
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>

      {/* Wedding Destinations Slider */}
      <div className="slider-section">
        <h2>  Destination Weddings Redefined  </h2>
        <p>Your very own fairy tale comes alive with  Hotels. Exquisite settings from majestic palaces, pristine beaches, and secluded retreats...</p>

        <div className="slider-items">
          {destinations.map((destination, index) => (
            <div key={index} className={`slider-item ${activeDestinationIndex === index ? 'active' : ''}`}>
              <img src={destination.image} alt={destination.title} />
              <h4>{destination.title}</h4>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="slider-navigation">
          {activeDestinationIndex !== 0 && (
            <button className="slider-btn prev" onClick={goToPrevDestination}>
              <FaChevronLeft />
            </button>
          )}
          {activeDestinationIndex !== destinations.length - 1 && (
            <button className="slider-btn next" onClick={goToNextDestination}>
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>

      {/* Wedding Festivities */}
      <div className="wedding-festives">
        <h3>  Wedding Festivities  </h3>
        <p> Unfold a tapestry of love and celebrations with intimate gatherings or grand receptions. From bridal showers and haldi ceremonies to mehndi and glitzy cocktail soirées, begin your journey of joy with Hotels....</p>

        {/* Event Titles (Mehndi, Haldi, etc.) */}
        <div className="event-titles">
          {weddingEvents.map((event, index) => (
            <button
              key={index}
              className={`event-title ${activeEventIndex === index ? 'active' : ''}`}
              onClick={() => setActiveEventIndex(index)}
            >
              {event.title}
            </button>
          ))}
        </div>

        
      </div>

      <div className="event-content">
  <img src={weddingEvents[activeEventIndex].image} alt={weddingEvents[activeEventIndex].title} />
  <div className="text">
    <h4>{weddingEvents[activeEventIndex].title}</h4>
    <p>{weddingEvents[activeEventIndex].description}</p>
  </div>
</div>


      {/* Three Images with Content */}
      <div className="three-image-section1">
        <h2>   Explore Our Wedding Highlights   </h2>
        <div className="three-image-row1">
          {threeImageContent.map((content) => (
            <div key={content.id} className="three-image-item1">
              <img src={content.image} alt={content.heading} />
              <h3>{content.heading}</h3>
              <p>{content.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      </>
      <Footer />
      </>
  );
};

export default Wedding;