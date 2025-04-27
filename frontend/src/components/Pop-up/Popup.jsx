import React, { useState } from 'react';
import './popup.css'; 
import pic from "../../assets/images/Popup.png";
import p11 from "../../assets/images/p1.svg";
import p12 from "../../assets/images/p12.svg";
import p13 from "../../assets/images/p13.avif";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="popup-close" onClick={handleClose}>
          ✖
        </button>
        <div className="popup-content">
          <div className="popup-image-container">
            <img
              src={pic}
              alt="Travel"
              className="popup-image"
            />
          </div>

          <div className="popup-text">
            <h3>EXPLORE THE WORLD WITH US</h3>
            
            <div className="MuiBox-root css-1q79099">
              <div className="MuiBox-root css-zttbi5">
                <img 
                  className="MuiBox-root css-0" 
                  alt="Enjoy Exclusive Member Rates" 
                  src={p11}
                />
                <span className="MuiTypography-root MuiTypography-body-xxs css-9w7qol">Enjoy Exclusive Member Rates</span>
              </div>

              <div className="MuiBox-root css-zttbi5">
                <img 
                  className="MuiBox-root css-0" 
                  alt="Unique Tier based Benefits & Privileges" 
                  src={p12}
                />
                <span className="MuiTypography-root MuiTypography-body-xxs css-9w7qol">Unique Tier based Benefits & Privileges</span>
              </div>

              <div className="MuiBox-root css-zttbi5">
                <img 
                  className="MuiBox-root css-0" 
                  alt="Earn minimum 4% NeuCoins (1 NeuCoin = ₹1)" 
                  src={p13}
                />
                <span className="MuiTypography-root MuiTypography-body-xxs css-9w7qol">Earn minimum 4% NeuCoins (1 NeuCoin = ₹1)</span>
              </div>
                      </div>
                       <button className="enroll-button">Start Your Adventure</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
