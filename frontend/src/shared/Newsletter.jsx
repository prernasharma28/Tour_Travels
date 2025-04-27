import React, { useState } from "react";
import "./newsletter.css";
import { Link } from 'react-router-dom';

import p1 from "../assets/images/Neupass.webp";
import p2 from "../assets/images/Galary.webp";
import p3 from "../assets/images/Destinationwedd.webp";
import p4 from "../assets/images/House.jpg"
import p5 from "../assets/images/Dining.png"
import p6 from "../assets/images/Event.png";

const TravelSlider = () => {
  const destinations = [
    { id: 1, title: "Subscription", image: p1, link: "/subscriptions" },
    { id: 2, title: "Galary", image: p2, link: "/gallery" },
    { id: 3, title: "Destination Wedding", image: p3, link: "/destinations" },
    { id: 4, title: "RentalHouse", image: p4, link: "http://localhost:3000/" },
    { id: 5, title: "Dining", image: p5, link: "/dining" },
    { id: 6, title: "Events", image: p6, link: "/events" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="slider-container1">
      <div
        className="slider-background1"
        style={{
          backgroundImage: `url(${destinations[currentIndex].image})`,
        }}
      >
        <div className="slider-text1">
          {destinations[currentIndex].link.startsWith("http") ? (
            <button onClick={() => openInNewTab(destinations[currentIndex].link)}>
              <h2>{destinations[currentIndex].title}</h2>
            </button>
          ) : (
            <Link to={destinations[currentIndex].link}>
              <h2>{destinations[currentIndex].title}</h2>
            </Link>
          )}
        </div>
      </div>

      <button className="slider-btn left1" onClick={prevSlide}>
        &#8249;
      </button>

      <div className="card-container1">
        {destinations[currentIndex].link.startsWith("http") ? (
          <button
            className="card1"
            style={{
              backgroundImage: `url(${destinations[currentIndex].image})`,
            }}
            onClick={() => openInNewTab(destinations[currentIndex].link)}
          >
            <div className="card-title1">
              <h3>{destinations[currentIndex].title}</h3>
            </div>
          </button>
        ) : (
          <Link to={destinations[currentIndex].link}>
            <div
              className="card1"
              style={{
                backgroundImage: `url(${destinations[currentIndex].image})`,
              }}
            >
              <div className="card-title1">
                <h3>{destinations[currentIndex].title}</h3>
              </div>
            </div>
          </Link>
        )}
      </div>

      <button className="slider-btn right1" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default TravelSlider;
