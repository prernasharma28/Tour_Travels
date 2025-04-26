import React from 'react';
import './travelmagazine.css';

const TajMagazine = () => {
  return (
    <div className="group-card5">
      <div className="card-header5">
        {/* Left Section */}
        <div className="title-stack5">
          <h2 className="group-title5">
            <div className="title-divider5">
              <hr className="divider5" />
              <span className="title5">TRAVELEASE</span>
            </div>
            <div className="title-magazine5">
              <span className="title5">Magazine</span>
            </div>
          </h2>
        </div>
        {/* Right Section */}
        <div className="subtitle-container5">
          <span className="subtitle5">
            The TravelEase magazine is an exciting journey through the world of adventure and travel, bringing you exclusive insights into the best destinations, thrilling experiences, unique cultures, and stunning landscapes around the globe. 
          </span>
          <div className="more-link-container5">
            <div className="more-link5">
              <a href="/en-in/taj-e-magazine" className="more">MORE</a>
              <svg
                className="chevron-icon5"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ChevronRightIcon"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body5">
        <div className="latest-issue5">
          <h4 className="issue-title5">Latest issue</h4>
          <span className="issue-description5">
            Delve into our latest digital edition of The TravelEase Magazine to uncover exclusive stories of insight and interest. From breathtaking travel destinations to the best wedding venues, adventure spots, and luxury hotels, our latest issue has everything to inspire your next journey.
          </span>
          <div className="issue-volume5">
            <b>VOL.50 NO.02 - 2023</b>
          </div>
          <div className="read-button-container5">
            <button className="read-button5" style={{display:"flex", gap: "50px" }}>
              <a
                href="https://online.flippingbook.com/view/372486/"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ NOW
              </a>
            </button>
        
              <button className="read-button5" style={{display:"flex", gap: "50px" }}>
              <a
                href="https://online.flippingbook.com/view/948836/"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ NOW
              </a>
            </button>
          </div>
        </div>
        <div className="image-container5">
          <img
            className="magazine-image5"
            alt="Taj Magazine"
            src="https://c1.wallpaperflare.com/preview/262/812/847/travel-outdoors-girl-landscape.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default TajMagazine;
