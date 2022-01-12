import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);
  const onClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
                <i class="fas fa-cloud-moon"></i> MIND
            </div>
            <div className="menu-icon" onClick={onClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-page" onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/meditation" className="nav-page" onClick={closeMenu}>
                        Meditation
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/sleep" className="nav-page" onClick={closeMenu}>
                        Sleep
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about-us" className="nav-page" onClick={closeMenu}>
                        About Us 
                    </Link>
                </li>
            </ul>
      </div>
      </nav>
    </>
  );
}

export default Navbar;
