import React, { useRef, useEffect, useContext, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../context/AuthContext";
import TravelImg from "../../assets/images/travelBox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import profilepic from "../../assets/images/usercopy.png";
import "./header.css";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/contact", display: "Contact" },
  { path: "/tours", display: "Tours" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  const logout = () => {
    dispatch({ type: "LOGOUT" }); // Dispatch logout action to reset user state
    navigate("/Register"); // Redirect to Register page
  };

  const stickyHeaderFunc = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeaderFunc);
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleLogoutVisibility = () => {
    setIsLogoutVisible(!isLogoutVisible);
  };

  useEffect(() => {
    const closeLogout = (e) => {
      if (e.target.closest(".user__profile") === null) {
        setIsLogoutVisible(false);
      }
    };
    document.addEventListener("click", closeLogout);
    return () => document.removeEventListener("click", closeLogout);
  }, []);

  const handleLogoClick = () => {
    navigate("/admin"); // Navigate to the Admin page
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo" onClick={handleLogoClick}>
              <img src={logo} alt="Logo" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <div
                    className="user__profile d-flex align-items-center gap-2"
                    onClick={toggleLogoutVisibility}
                  >
                    <img
                      src={user.profilePicture || profilepic}
                      alt="User"
                      className="user__img"
                    />
                    <h5 className="mb-0 user__name">{user.username}</h5>
                  </div>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="earth__icon" onClick={togglePopup}>
                <i className="ri-earth-line"></i>
              </span>
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>

      {/* {isLogoutVisible && user && (
        <div className="logout__dropdown">
          <Button className="btn logout__btn" onClick={logout}>
            Logout
          </Button>
        </div>
      )} */}

      
      <div className = "dp" style={{ position: "relative", zIndex: 9999 }}>
      {isLogoutVisible && user && (
      <div className="logout__btn-wrapper">
        <button className="btn logout__btn" onClick={logout}>
          Logout
        </button>
      </div>
    )}
  </div>

      {isPopupOpen && (
        <div
          className={`popup__overlay ${isPopupOpen ? "show" : ""}`}
          onClick={togglePopup}
        >
          <div
            className={`popup__content ${isPopupOpen ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Explore the World</h2>
            <div className="popup__body">
              <div className="popup__image">
                <img src={TravelImg} alt="Travel" className="popup__travel-img" />
              </div>
              <div className="popup__text">
                <p>
                  Explore amazing destinations with flights, hotels, food, and wifi!
                </p>
                <div className="features">
                  <div>
                    <MdFlight /> Flights
                  </div>
                  <div>
                    <MdOutlineLocalHotel /> Hotels
                  </div>
                  <div>
                    <IoIosWifi /> Wifi
                  </div>
                  <div>
                    <IoFastFoodSharp /> Food
                  </div>
                </div>
              </div>
            </div>
            <Button className="btn btn-dark" onClick={togglePopup}>
              Close
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
