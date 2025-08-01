import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          <em>One</em> <strong>Sri Lanka</strong>
        </Link>

        {/* Toggle for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>

            {/* ABOUT US */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ABOUT US
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="dropdown-item" to="/about">Our Story</Link></li>
              </ul>
            </li>

            {/* PLANNING A TRIP */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PLANNING A TRIP
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="dropdown-item" to="/about">Visa Info</Link></li>
                <li><Link className="dropdown-item" to="/about">Best Time to Visit</Link></li>
                <li><Link className="dropdown-item" to="/about">Travel Tips</Link></li>
              </ul>
            </li>

            {/* DESTINATIONS */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                DESTINATIONS
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
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

            {/* KEY EXPERIENCES */}
            <li className="nav-item">
              <Link className="nav-link" to="/key-experiences">KEY EXPERIENCES</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;