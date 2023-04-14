import React from 'react';
import '../styles/stlNavbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar fixed-top">
      <div className="navbar-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/MJ-Maroc.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          {/* <a href="#">Home</a> */}
          home
        </li>
        <li>
          <div onClick={handleDropdownClick}>تدبير سجل العدلي</div>
          {isDropdownOpen && (
            <ul>
              <li>
                <Link to="/main">تصوير البطاءق</Link>
              </li>
              <li>
                <Link to="/section">معالجة البطاءق</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          {/* <a href="#">Services</a> */}
          Services
        </li>
        <li>
          {/* <a href="#">Contact</a> */}
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
