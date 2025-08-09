import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";
import logo1 from "../../images/logo.png";
import flg1 from "../../images/engl.png";
import flg2 from "../../images/usa.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import profileimag from "../../images/c4.png";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const languages = [
  { code: "en", name: "En", flag: flg1 },
  { code: "es", name: "Sp", flag: flg2 },
  { code: "ru", name: "Ru", flag: flg1 },
  { code: "uk", name: "Uk", flag: flg2 },
];

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const showPrimaryNavbar = currentPath === "/" || currentPath === "/about";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderLanguageSelector = () => (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        <span className="flag">
          <img src={selected.flag} alt={selected.name} className="flag-img" />
        </span>
        <span className="language-name">{selected.name}</span>
        <span className="arrow">{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <ul className="dropdown-list">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="dropdown-option"
              onClick={() => handleSelect(lang)}
            >
              <img src={lang.flag} alt={lang.name} className="flag-img" />
              <span className="language-name">{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <>
      {showPrimaryNavbar ? (
        <nav className="navbar primary-navbar">
          <div className="nav-container">
            <div className="nav-left">
              <div className="navbar-logo">
                <NavLink to="/">
                  <img id="set-logo" src={logo1} alt="Logo" />
                </NavLink>
              </div>
              <div className="desktop-language-selector">
                {renderLanguageSelector()}
              </div>
            </div>

            <div className="hamburger" onClick={toggleMenu} ref={hamburgerRef}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div
              className={`nav-right ${isMenuOpen ? "active" : ""}`}
              ref={menuRef}
            >
              <div className="mobile-language-selector">
                {renderLanguageSelector()}
              </div>

              <div className="navCenter">
                <div className="nav-center">
                  <div className="servicediv">
                    <select>
                      <option value="">Services</option>
                      <option value="">Spanish</option>
                      <option value="">Russian</option>
                      <option value="">Ukrainian</option>
                    </select>
                  </div>
                  <div className="aboutdiv">
                    <NavLink to="/about">About Us</NavLink>
                  </div>
                </div>
              </div>

              <button className="headerbutton1">
                Become a twitwi vetted Taskpro
              </button>
              <div className="auth-buttons">
                <button className="sign-btn">
                  <NavLink to="/dashboard">Sign In</NavLink>
                </button>
                <button className="Register-btn">Register</button>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar secondary-navbar">
          <div
            className={`nav-container ${
              currentPath === "/dashboard" ? "dashboard-header" : ""
            }`}
          >
            <div className="navCenter">
              <div className="contactdiv2">
                <IoIosSearch />
                <input type="text " placeholder="Search..." name="" id="" />
              </div>
            </div>
            <div className="profilesection-buttons">
              <button className="notifi-btn">
                <CiSettings />
              </button>
              <button className="notifi-btn">
                {" "}
                <IoMdNotificationsOutline />
              </button>
              <div className="nav-profile">
                <div className="notifi-profile">
                  {" "}
                  <img src={profileimag} alt="" />{" "}
                </div>
                <div className="notifi-profilename">
                  <h1>Rashid Lateef</h1>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
