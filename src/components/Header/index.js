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
              <a className="nav-link" href="https://drive.google.com/file/d/1UBjOSmkSVkvdJiII-qwKOJSiDNFlyJd_/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </li>
            <li className={location.pathname === "/contact" ? "nav-item active" : "nav-item"}>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="custom-control custom-switch">
        <span className={"mode-label " + (darkMode ? "mode-dark" : "")}>{darkMode ? <>Dark Mode <i className="fas fa-moon"></i></> : <>Light Mode <i className="far fa-moon"></i></>}</span>
        <input type="checkbox" className="custom-control-input" id="darkModeSwitch" checked={darkMode} onChange={toggleDarkMode} />
        <label className="custom-control-label" htmlFor="darkModeSwitch"></label>
      </div>
    </header>
  );
}

export default Header;