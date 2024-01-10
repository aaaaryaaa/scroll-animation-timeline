import React, { useState } from "react";
import logo from "../images/Mask group.svg";
import rectangle from "../images/Rectangle 39.svg";
import hamburgerIcon from "../images/burger-menu-right-svgrepo-com.svg";
import cancelIcon from "../images/cancel-svgrepo-com.svg";
import cupIcon from "../images/cup.svg";
const Navbar = () => {
  const [isNavMenuActive, setNavMenuActive] = useState(false);

  const handleHamburgerClick = () => {
    setNavMenuActive(!isNavMenuActive);
  };

  const handleNavItemClick = () => {
    setNavMenuActive(false);
  };
  return (
    <nav className="grid-container">
      <div className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="aurora Logo" />
        </a>

        {isNavMenuActive ? (
          <img
            src={cancelIcon}
            alt="cancel"
            className="hamburger-img"
            onClick={handleHamburgerClick}
          />
        ) : (
          <img
            src={hamburgerIcon}
            alt="Hamburger"
            className="hamburger-img"
            onClick={handleHamburgerClick}
          />
        )}

        <ul className={`nav-menu ${isNavMenuActive ? "active" : ""}`}>
          <li className="nav-item">
            <a href="/" onClick={handleNavItemClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" onClick={handleNavItemClick}>
              About
            </a>
          </li>
          <li className="nav-item" id="">
            <a href="/" onClick={handleNavItemClick}>
              Partners
            </a>
          </li>
          <li className="nav-item" id="">
            <a href="/" onClick={handleNavItemClick}>
              Timeline
            </a>
          </li>
          <li className="nav-item" id="">
            <a href="/" onClick={handleNavItemClick}>
              Sponsors
            </a>
          </li>
          <li className="nav-item" id="assets">
            <a href="/" onClick={handleNavItemClick}>
              <div className="overlay-container">
                <img
                  src={rectangle}
                  alt="hackathon"
                  className="rectangle-image"
                />
                <img src={cupIcon} alt="workshop" className="cup-image" />
                <div className="overlay-text">Hackathon</div>
              </div>
            </a>
          </li>
          <li className="nav-item" id="assets">
            <a href="/workshops" onClick={handleNavItemClick}>
              <div className="overlay-container">
                <img
                  src={rectangle}
                  alt="hackathon"
                  className="rectangle-image"
                />
                <img src={cupIcon} alt="workshop" className="cup-image" />
              </div>
              <div className="overlay-container">
                <div className="overlay-text-wk">Workshops</div>
              </div>
            </a>
          </li>
        </ul>
        {/* <Timeline setObserver={() => {}} callback={() => {}} /> */}
      </div>
    </nav>
  );
};

export default Navbar;