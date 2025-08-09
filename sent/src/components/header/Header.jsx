import React, { useState } from "react";
import "./header.css";
import logo1 from "../../images/logo.png";
import flg1 from "../../images/engl.png";
import flg2 from "../../images/usa.png";
import { FaBars, FaTimes } from "react-icons/fa";

const languages = [
  { code: "en", name: "En", flag: flg1 },
  { code: "es", name: "Sp", flag: flg2 },
  { code: "ru", name: "Ru", flag: flg1 },
  { code: "uk", name: "Uk", flag: flg2 },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="navbar-logo">
            <a href="/">
              <img id="set-logo" src={logo1} alt="Logo" />
            </a>
          </div>
          <div className="desktop-language-selector">
            <div className="dropdown-container">
              <div className="dropdown-header" onClick={() => setOpen(!open)}>
                <span className="flag">
                  <img
                    src={selected.flag}
                    alt={selected.name}
                    className="flag-img"
                  />
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
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="flag-img"
                      />
                      <span className="language-name">{lang.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-right ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-language-selector">
            <div className="dropdown-container">
              <div className="dropdown-header" onClick={() => setOpen(!open)}>
                <span className="flag">
                  <img
                    src={selected.flag}
                    alt={selected.name}
                    className="flag-img"
                  />
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
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="flag-img"
                      />
                      <span className="language-name">{lang.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="servicediv">
            <select name="" id="">
              <option value="">Services</option>
              <option value="">Spanish</option>
              <option value="">Russian</option>
              <option value="">Ukrainian</option>
            </select>
          </div>
          <div className="aboutdiv">About Us</div>
          <button className="headerbutton1">
            Become a twitwi vetted Taskpro
          </button>
          <div className="auth-buttons">
            <button className="sign-btn">Sign In</button>
            <button className="Register-btn">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;