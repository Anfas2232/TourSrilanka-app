
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="custom-navbar">
      <div className="nav-left">
        <Link to="/" className="nav-brand">
          <em>One</em> <strong>Sri Lanka</strong>
        </Link>
      </div>

      <div className="nav-center">
        <ul className="nav-menu">
          <li><Link to="/">HOME</Link></li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white fw-semibold px-3" href="about" id="navbarDropdownAbout" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ABOUT US
            </a>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownAbout">
              <li><Link className="dropdown-item" to="/about">Our Story</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white fw-semibold px-3" href="about" id="navbarDropdownPlanning" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              PLANNING A TRIP
            </a>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownPlanning">
              <li><Link className="dropdown-item" to="/about">Visa Info</Link></li>
              <li><Link className="dropdown-item" to="/about">Best Time to Visit</Link></li>
              <li><Link className="dropdown-item" to="/about">Travel Tips</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white fw-semibold px-3" href="about" id="navbarDropdownDestinations" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              DESTINATIONS
            </a>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownDestinations">
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
