import React, { useState } from "react";
import "./EventPage.css";
import e1 from "../../assets/images/Event1.png";
import e2 from "../../assets/images/Event2.png";
import e3 from "../../assets/images/Event3.png";
import e4 from "../../assets/images/Event4.png";
import e5 from "../../assets/images/Event5.png";
import e6 from "../../assets/images/Event6.png";
import e7 from "../../assets/images/Event7.png";
import e8 from "../../assets/images/Event8.png";
import e9 from "../../assets/images/Event9.png";
import Footer from "../Footer/Footer";

const EventPage = () => {
  const giftOptions = [
    {
      id: 2,
      heading: "---- Plan Your Celebrations With Us ----",
      description:
        "Our expert team, attention to detail, and diverse venues converge to transform your vision.",
      image: e5,
    },
  ];

  const highlightsContent = [
    {
      id: 1,
      image: e4,
      heading: "- Refined Retreats -",
      description:
        "With opulent suites and sophisticated rooms, welcome your guests to stays that define comfort, luxury, and unparalleled hospitality.",
    },
    {
      id: 2,
      image: e6,
      heading: "- A Culinary Kaleidoscope -",
      description:
        "A spectrum of flavours await as local delights and global cuisine tantalize your palate through our multi-course meals...",
    },
    {
      id: 3,
      image: e7,
      heading: "- LOTUS POND -",
      description:
        "A fairy tale setting, especially at night, with an illuminated fountain surrounded by landscaped lawns.",
    },
  ];

  const sliderContent = [
    {
      id: 1,
      image: e9, 
      title: "Elegant Venues",
      description: "Host your event in spaces that combine luxury and sophistication.",
    },
    {
      id: 2,
      image: e3, 
      title: "Royal Retreat",
      description:
        "Experience unparalleled luxury and sophistication at the Royal Retreat.",
    },
    {
      id: 3,
      image: e2, 
      title: "Birthday Party",
      description:
        "Celebrate your special day with joy, elegance, and unforgettable memories.",
    },
    {
      id: 4,
      image: e1, 
      title: "Martini Room",
      description: "Celebrate in style with expert cocktails and a chic atmosphere.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % sliderContent.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + sliderContent.length) % sliderContent.length);
  };

  return (
    <div className="event-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={e8} alt="Event Background" className="hero-image" />
        <div className="event-legacy">
          <h2>-- Events --</h2>
        </div>
      </div>

      {/* Event Options */}
      <div className="event-options">
        <h2>------ JOYFUL OCCASIONS & LIFE CELEBRATIONS -----</h2>
        <p>
          Discover a portfolio of venues that are the perfect canvas for your special
          moments. From intimate gatherings to grand galas, our venues are where
          celebrations come to life. Let our spaces be the stage for your joy, laughter,
          and the creation of a lifetime of memories...
        </p>
      </div>

      {/* Gift Section */}
      <div className="gift-section">
        {giftOptions.map((item, index) => (
          <div
            key={item.id}
            className={`gift-item ${index % 2 === 0 ? "left-align" : "right-align"}`}
          >
            <div className="gift-image">
              <img src={item.image} alt={item.heading} />
            </div>
            <div className="gift-content">
              <h3>{item.heading}</h3>
              <p>Our expert team, attention to detail, and diverse venues converge to transform your vision into an extraordinary experience. From concept to execution, we ensure every element is flawlessly crafted, leaving you free to immerse yourself in the magic of the moment.

              With personalized event planning, world-class catering, and cutting-edge technology, we cater to your every need, whether it’s an elegant wedding, a high-profile corporate event, or an intimate celebration. Our commitment to excellence guarantees a seamless and stress-free experience, allowing you to focus on what truly matters—cherishing every moment with your loved ones.

              Let us bring your dream event to life with sophistication, style, and impeccable service, creating memories that will be treasured forever.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Highlights Section */}
      <div className="highlights-section">
        <h2>---Our Promise---</h2>
        <div className="highlights-row">
          {highlightsContent.map((content) => (
            <div key={content.id} className="highlight-item">
              <img src={content.image} alt={content.heading} />
              <h3>{content.heading}</h3>
              <p>{content.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div class="centered-slider-section">
  <div
    class="slider-background1"
    style={{
      backgroundImage: `url(${sliderContent[activeSlide].image})`,
    }}
  ></div>

  <div class="centered-slider-content">
    <button class="slider-btn prev" onClick={handlePrevSlide}>
      ❮
    </button>
    <div class="slider-card">
      <img
        src={sliderContent[activeSlide].image}
        alt={sliderContent[activeSlide].title}
        class="slider-card-image"
      />
      <h3>{sliderContent[activeSlide].title}</h3>
      <p>{sliderContent[activeSlide].description}</p>
    </div>
    <button class="slider-btn next" onClick={handleNextSlide}>
      ❯
    </button>
  </div>
</div>
<Footer/>
    </div>
  );
};

export default EventPage;