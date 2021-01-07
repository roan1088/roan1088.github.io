import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Header({ darkMode, toggleDarkMode }) {
  const location = useLocation();

  return (
    <header className="mb-4">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link to="/" className="navbar-brand" id="navBrand">Rohan Chitrakar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className={location.pathname === "/" ? "nav-item active" : "nav-item"}>
              <Link to="/" className="nav-link">About</Link>
            </li>
            <li className={location.pathname === "/portfolio" ? "nav-item active" : "nav-item"}>
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://docs.google.com/document/d/19Uls5sSoLvveeBbFePo_sh7HzL3f7aQF9ZOCT75x-ak/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </li>
            <li className={location.pathname === "/contact" ? "nav-item active" : "nav-item"}>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id="darkModeSwitch" checked={darkMode} onChange={toggleDarkMode} />
        <label className="custom-control-label" htmlFor="darkModeSwitch"></label>
      </div>
    </header>
  );
}

export default Header;