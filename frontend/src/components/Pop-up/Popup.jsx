// import React, { useState } from 'react';
// import './popup.css'; 
// import pic from "../../assets/images/Popup.png";

// const Popup = () => {
//   const [showPopup, setShowPopup] = useState(true);

//   const handleClose = () => {
//     setShowPopup(false);
//   };

//   if (!showPopup) return null;

//   return (
//     <div className="popup-overlay">
//       <div className="popup">
//         <button className="popup-close" onClick={handleClose}>
//           ✖
//         </button>
//         <div className="popup-content">
//           <div className="popup-image-container">
//             <img
//               src={pic}
//               alt="Travel"
//               className="popup-image"
//             />
//           </div>

//         <div className="popup-text">
//             <h3>EXPLORE THE WORLD WITH US</h3>
//             <button className="enroll-button">Start Your Adventure</button>
//         </div>
                  
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup;




import React, { useState } from 'react';
import './popup.css'; 
import pic from "../../assets/images/Popup.png";

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
                  src="https://cdn.sanity.io/images/ocl5w36p/prod2/43cb7d001b986c9dfb43eceae270d10bb8213ffb-32x32.svg"
                />
                <span className="MuiTypography-root MuiTypography-body-xxs css-9w7qol">Enjoy Exclusive Member Rates</span>
              </div>

              <div className="MuiBox-root css-zttbi5">
                <img 
                  className="MuiBox-root css-0" 
                  alt="Unique Tier based Benefits & Privileges" 
                  src="https://cdn.sanity.io/images/ocl5w36p/prod2/e3e3977c4b0f8a3f50e555fdeb7e8f9ca69daa4d-33x32.svg"
                />
                <span className="MuiTypography-root MuiTypography-body-xxs css-9w7qol">Unique Tier based Benefits & Privileges</span>
              </div>

              <div className="MuiBox-root css-zttbi5">
                <img 
                  className="MuiBox-root css-0" 
                  alt="Earn minimum 4% NeuCoins (1 NeuCoin = ₹1)" 
                  src="https://cdn.sanity.io/images/ocl5w36p/prod2/bd641de123129f59e1004f996e13e3689f2142b5-32x32.png"
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
