import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="nav-left">
        <Link to="/" className="nav-brand">
          <em>One</em> <strong>Sri Lanka</strong>
        </Link>
      </div>

      {/* Hamburger menu icon for mobile */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </button>

      {/* The main menu container */}
      <div className={`nav-center ${isMenuOpen ? 'nav-open' : ''}`}>
        <ul className="nav-menu">
          <li><Link to="/">HOME</Link></li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="about">
              ABOUT US
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/about">Our Story</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="about">
              PLANNING A TRIP
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/about">Visa Info</Link></li>
              <li><Link className="dropdown-item" to="/about">Best Time to Visit</Link></li>
              <li><Link className="dropdown-item" to="/about">Travel Tips</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="about">
              DESTINATIONS
            </a>
            <ul className="dropdown-menu">
              {/* All your destination links */}
              <li><Link className="dropdown-item" to="/details/Colombo">Colombo</Link></li>
              <li><Link className="dropdown-item" to="/details/Kandy">Kandy</Link></li>
              <li><Link className="dropdown-item" to="/details/Galle">Galle</Link></li>
              <li><Link className="dropdown-item" to="/details/Sigiriya">Sigiriya</Link></li>
              <li><Link className="dropdown-item" to="/details/Anuradhapura">Anuradhapura</Link></li>
              <li><Link className="dropdown-item" to="/details/Pasikudah">Pasikudah</Link></li>
              <li><Link className="dropdown-item" to="/details/ArugamBay">ArugamBay</Link></li>
              <li><Link className="dropdown-item" to="/details/Batticaloa">Batticaloa</Link></li>
              <li><Link className="dropdown-item" to="/details/Bentota">Bentota</Link></li>
              <li><Link className="dropdown-item" to="/details/Dambulla">Dambulla</Link></li>
              <li><Link className="dropdown-item" to="/details/Ella">Ella</Link></li>
              <li><Link className="dropdown-item" to="/details/Jaffna">Jaffna</Link></li>
              <li><Link className="dropdown-item" to="/details/Negombo">Negombo</Link></li>
              <li><Link className="dropdown-item" to="/details/NuwaraEliya">NuwaraEliya</Link></li>
              <li><Link className="dropdown-item" to="/details/Polonnaruwa">Polonnaruwa</Link></li>
              <li><Link className="dropdown-item" to="/details/YalaNationalPark">YalaNationalPark</Link></li>
            </ul>
          </li>
          
          <li><Link to="/key-experiences">KEY EXPERIENCES</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;