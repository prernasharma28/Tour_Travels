import React, { useState } from 'react';
import './DiningPage.css';
import d1 from "../../assets/images/DiningFront.png"
import d2 from "../../assets/images/DiningMan.png"
import d3 from "../../assets/images/Dining2.png"
import d4 from "../../assets/images/DiningCake.png"
import d5 from "../../assets/images/DiningGift.png"
import d6 from "../../assets/images/DiningGift2.png"
import d7 from "../../assets/images/Vista.png"
import d8 from "../../assets/images/Bar.png"
import d9 from "../../assets/images/Seray.png"
import Footer from '../Footer/Footer';

const Dining = () => {
  const diningOptions = [
    {
      id: 1,
      name: 'CELEBRATED CHEFS',
      shortDescription: 'A renowned lineup of elite culinary experts, blending skill, innovation, and precision.',
      fullDescription: 'These chefs deliver unparalleled excellence in every dish, combining mastery, creativity, and precision to craft extraordinary culinary experiences that captivate and delight the senses.',
      image: d2,
    },
    {
      id: 2,
      name: 'LEGENDARY RESTAURANTS',
      shortDescription: 'Concise and highlights the key features, giving an immediate idea of the restaurant’s offering.',
      fullDescription: 'Expands on the unique aspects and gives a richer context of the experience, making it more immersive.',
      image: d3,
    },
    {
      id: 3,
      name: 'SIGNATURE RECIPES',
      shortDescription: 'Focuses on the essence of the dish and the passion behind it.',
      fullDescription: 'Expands to highlight the sensory experience and the lasting impact of the dishes.',
      image: d4,
    },
  ];

  const belowCardsContent = [
    {
      id: 1,
      heading: '--Hampers--',
      description: 'A collection of thoughtfully curated hampers that convey your warmest thoughts and greetings.',
      image: d5,
    },
    {
      id: 2,
      heading: '---Exquisite Diletto Cheese & Charcuterie Board Gift---',
      description: 'Indulge in the art of fine dining with this meticulously curated cheese and charcuterie board. Perfectly balanced with a selection of gourmet cheeses, premium cured meats, and complementary accompaniments, this board offers a luxurious culinary experience.',
      image: d6,
    },
  ];

  const threeImageContent = [
    {
      id: 1,
      image: d7,
      heading: '-Vista',
      description: 'Taj Dal View, Srinagar  An unforgettable culinary journey in a casual yet elegant ambience.....',
    },
    {
      id: 2,
      image: d9,
      heading: '-Seray',
      description: 'Taj Gorbandh Palace, Jaisalmer Seray offers an authentic Italian escape in Rajasthan.....',
    },
    {
      id: 3,
      image: d8,
      heading: '-VIXX Bar and Lounge',
      description: 'Taj Damdama Lake Resort & Spa,dcrafted cocktails for the perfect evening escape.​...',
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleDescription = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="dining-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={d1} alt="Dining Background" className="hero-image" />
        <div className="culinary-legacy">
          <h2>A Culinary Legacy</h2>
        </div>
      </div>

      {/* Dining Options */}
      <div className="dining-options">
        <h2>---Fine Dining at Trivio---</h2>
        <p>
          Set off on a voyage of refined indulgence, where exceptional service,
          elegant surroundings, and exceptional culinary craftsmanship come
          together to create an unforgettable experience for the true connoisseur.
        </p>
        <div className="cards-container">
          {diningOptions.map((option) => (
            <div key={option.id} className="dining-card">
              <div className="card-inner">
                <div className="card-front">
                  <img
                    src={option.image}
                    alt={option.name}
                    className="card-image"
                  />
                </div>
                <div className="card-back">
                  <h3>{option.name}</h3>
                  <p>
                    {expanded === option.id
                      ? option.fullDescription
                      : option.shortDescription}
                    <span
                      className="toggle-description"
                      onClick={() => toggleDescription(option.id)}
                    >
                      {expanded === option.id ? ' Show Less' : ' Show More'}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="additional-heading">
        <h2>---Giftable Dining Delights---</h2>
      </div>
      {/* Below Cards Section */}
      <div className="below-cards">
        {belowCardsContent.map((item, index) => (
          <div
            key={item.id}
            className={`below-card-item ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
          >
            <div className="below-card-image">
              <img src={item.image} alt={item.heading} />
            </div>
            <div className="below-card-content">
              <h3>{item.heading}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Three Images with Content */}
      <div className="three-image-section">
        <h2>---Explore Our Dining Highlights---</h2>
        <div className="three-image-row">
          {threeImageContent.map((content) => (
            <div key={content.id} className="three-image-item">
              <img 
                src={content.image} 
                alt="Highlight" 
                style={{ width: '100%', margin: '20px 0' }} // Use margin for spacing
              />
              <h3>{content.heading}</h3>
              <p>{content.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dining;