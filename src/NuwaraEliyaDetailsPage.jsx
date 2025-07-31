import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowUp, ArrowLeft } from 'lucide-react';

// --- Import NavBar component and its CSS ---
import NavBar from './NavBar'; // Assuming NavBar component is in NavBar.js
import './NavBar.css'; // Make sure NavBar.css is correctly linked and contains relevant styles

// --- Import images for the page content ---

import museum from './images/nu1.jpg';
import hospital from './images/nu3.jpg';
import tower from './images/nu2.jpg';
import seema from './images/nu4.jpg';
import Red_Mosque from './images/nu5.jpg';
import portcity from './images/nu6.jpg';
import colompo from './images/nu1.jpg'; 
const Footer = () => {
  return (
    <footer className="custom-footer-bg text-white py-4 mt-5 footer-fade-in">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="text-accent-pink">Colombo Explorer</h5>
            <p className="text-light-muted">Discover the vibrant city of Colombo, Sri Lanka. From historical sites to modern attractions, find your next adventure.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="text-accent-pink">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/contact" className="text-white text-decoration-none hover-link">Top Things to Do</a></li>
              <li><a href="/contact" className="text-white text-decoration-none hover-link">Key Attractions</a></li>
              <li><a href="/contact" className="text-white text-decoration-none hover-link">Best Experiences</a></li>
              <li><a href="/contact" className="text-white text-decoration-none hover-link">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="text-accent-pink">Contact Us</h5>
            <ul className="list-unstyled">
              <li><MapPin size={16} className="me-2" /> 123 Main Street, Colombo, Sri Lanka</li>
              <li><Phone size={16} className="me-2" /> +94 11 234 5678</li>
              <li><Mail size={16} className="me-2" /> info@colomboexplorer.lk</li>
            </ul>
            <div className="d-flex mt-3">
              <a href="https://www.linkedin.com/Anfas Mohamed" className="text-white me-3 social-icon"><Facebook size={24} /></a>
              <a href="https://www.tiktok.com/@mr_anfas_10" className="text-white me-3 social-icon"><Twitter size={24} /></a>
              <a href="https://www.youtube.com/@AnfasMohamed-c1x" className="text-white social-icon"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center text-light-muted">
          &copy; {new Date().getFullYear()} Colombo Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


// --- Hero Section Component ---
const HeroSection = ({ backgroundImage, title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        position: 'relative',
        borderRadius: '15px',
        overflow: 'hidden',
        marginBottom: '50px'
      }}
    >
      <div
        className="hero-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: 0
        }}
      ></div>

      <div className="hero-content position-relative z-1">
        <h1
          className="display-3 fw-bold mb-3 hero-title-animation"
          style={{ color: 'white' }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="lead mb-4 hero-subtitle-animation"
            style={{ color: 'white' }}
          >
            {subtitle}
          </p>
        )}

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="kana-ily-button-style d-inline-flex align-items-center justify-content-center hero-button-animation"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};


const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: '#f8f9fa', marginTop: '30px' }}  // <-- Add marginTop here
    >
      <div className="row justify-content-start ps-5">

        <div className="col-auto ps-1">
          <button
            onClick={handleBackClick}
            className="back-button-style d-inline-flex align-items-center justify-content-center"
          >
            <ArrowLeft size={20} className="me-2" /> Back
          </button>
        </div>
      </div>
    </div>
  );
};




// --- Card Component ---
const Card = ({ title, description, image }) => (
  <div className="col-md-4 mb-4">
    <div className="card shadow-lg h-100 border-0 rounded-4 card-hover-effect">
      <img
        src={image}
        alt={title}
        className="card-img-top rounded-top-4"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-uppercase text-accent-purple">{title}</h5>
        <p className="card-text text-text-primary">{description}</p>
      </div>
    </div>
  </div>
);

// --- Section Component ---
const Section = ({ title, cards, id }) => (
  <section className="mb-5" id={id}>
    <h2 className="text-center fw-bold text-uppercase text-accent-pink mb-4 display-5 section--underline">{title}</h2>
    <div className="row">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  </section>
);

// --- BackToTopButton Component ---
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`back-to-top-btn btn btn-outline-accent-pink rounded-circle shadow-lg ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
      title="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

// --- Main Page Component: AnuradhapuraDetailsPage ---
const NuwaraEliyaDetailsPage = () => {
  const attractions = [
    { title: 'Tissa Wewa', image: museum, description: 'Discover history and heritage.' },
    { title: 'Thuparama Stupa', image: tower, description: 'An ancient stupa, one of the oldest in Sri Lanka.' },
    { title: 'Abhayagiri Stupa', image: hospital, description: 'A vast monastery complex and one of the largest stupas.' },
    { title: 'Lovamahapaya', image: seema, description: 'The Brazen Palace, a magnificent nine-storied building.' },
    { title: 'Ratnaprasadaya', image: Red_Mosque, description: 'Known for its guard stones and ancient architecture.' },
    { title: 'Jetavanarama Stupa', image: portcity, description: 'One of the tallest brick structures in the world.' },
  ];

  // Handler for the new "Kana ily" button - This handler is no longer needed but kept for context.
  const handleKanaIlyClick = () => {
    alert("Kana ily button clicked!");
    console.log("Kana ily button was pressed.");
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Render the NavBar component here */}
      <NavBar />

      {/* --- Internal CSS for this page --- */}
      <style>{`
        /* Define CSS Variables for consistency */
        :root {
          --accent-pink: #ff80a0;
          --accent-purple: #a080ff;
          --navbar-bg: #3f6b8a;
          --footer-bg: #34495e;
          --text-primary: #2c3e50;
          --text-light: #ecf0f1;
          --light-muted: #bdc3c7;
          --card-shadow-color: rgba(0,0,0,0.1);
          --card-hover-shadow-color: rgba(0,0,0,0.15);
          --content-bg: #ffffff;
          --content-border-radius: 15px;
        }

        body {
          background-color: #f8f9fa;
        }

        .custom-dark-navbar-bg {
          background-color: var(--navbar-bg);
          transition: transform 0.3s ease-in-out;
        }

        .navbar-show {
          transform: translateY(0);
        }

        .navbar-hide {
          transform: translateY(-100%);
        }

        .custom-footer-bg {
          background-color: var(--footer-bg);
        }

        .footer-hr {
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          width: 80%;
        }

        .text-accent-pink {
          color: var(--accent-pink) !important;
        }

        .text-accent-purple {
          color: var(--accent-purple) !important;
        }

        .text-text-primary {
          color: var(--text-primary) !important;
        }

        .text-light-muted {
          color: var(--light-muted) !important;
        }

        .btn-pink-gradient {
          background: linear-gradient(to right, var(--accent-pink), var(--accent-purple));
          border: none;
          transition: all 0.3s ease;
        }
        .btn-pink-gradient:hover {
          background: linear-gradient(to right, #db2777, #7c3aed);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px var(--card-shadow-color);
        }

        .btn-outline-purple {
          border-color: var(--accent-purple);
          color: var(--accent-purple);
          transition: all 0.3s ease;
        }
        .btn-outline-purple:hover {
          background-color: var(--accent-purple);
          color: white;
          box-shadow: 0 4px 8px var(--card-shadow-color);
        }

        .card-hover-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover-effect:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px var(--card-hover-shadow-color) !important;
        }

        .section--underline {
          position: relative;
          display: inline-block;
          padding-bottom: 10px;
        }
        .section--underline::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(to right, var(--accent-pink), var(--accent-purple));
          border-radius: 2px;
        }

        .hover-link {
          transition: color 0.3s ease;
        }
        .hover-link:hover {
          color: var(--accent-pink) !important;
        }

        .social-icon {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .social-icon:hover {
          transform: translateY(-3px);
          color: var(--accent-pink) !important;
        }

        @keyframes fadeInBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-fade-in {
          animation: fadeInBottom 1s ease-out forwards;
        }

        .custom-search-bar-new {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 8px 15px;
          display: flex;
          align-items: center;
          max-width: 280px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .custom-search-input-new {
          background: transparent !important;
          border: none !important;
          color: white !important;
          padding-left: 5px;
          flex-grow: 1;
        }
        .custom-search-input-new::placeholder {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        .custom-search-input-new:focus {
          box-shadow: none !important;
          outline: none !important;
        }

        .custom-search-btn-new {
          background: transparent !important;
          border: none !important;
          padding: 0;
          color: white !important;
          margin-left: 5px;
        }

        .navbar-logo {
          height: 40px;
          width: auto;
          filter: brightness(1.2);
        }

        .main-content-column {
          background-color: var(--content-bg);
          border-radius: var(--content-border-radius);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          padding: 40px;
          margin-top: 0px; /* Adjusted to sit right below the button's wrapper */
          margin-bottom: 30px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        /* This is the container for the button */
        .container-fluid.py-3 {
            padding-top: 1rem !important; /* Adjust if needed */
            padding-bottom: 1rem !important; /* Adjust if needed */
        }

        .hero-section {
          height: 400px;
          background-size: cover;
          background-position: center;
          position: relative;
          border-radius: var(--content-border-radius);
          overflow: hidden;
          margin-bottom: 50px;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 0;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title-animation {
          animation: slideInUp 1s ease-out forwards;
          animation-delay: 0.2s;
        }

        .hero-subtitle-animation {
          animation: slideInUp 1s ease-out forwards;
          animation-delay: 0.4s;
        }

        .hero-button-animation {
          animation: slideInUp 1s ease-out forwards;
          animation-delay: 0.6s;
        }

        .back-to-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1000;
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          opacity: 0;
          transform: translateY(20px);
          background: transparent;
          border: 2px solid var(--accent-pink);
          color: var(--accent-pink);
        }

        .back-to-top-btn.show {
          opacity: 1;
          transform: translateY(0);
        }

        .back-to-top-btn.hide {
          opacity: 0;
          transform: translateY(20px);
        }

        .back-to-top-btn:hover {
            background-color: var(--accent-pink);
            color: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .footer-logo {
            width: 40px;
            height: 40px;
            object-fit: cover;
        }

        /* --- Back Button Styles (reinstated and adjusted) --- */
        .back-button-style {
          background-color: #38b2ac; /* A vibrant green similar to the image */
          color: white;
          font-weight: 500;
          padding: 10px 25px;
          border-radius: 30px; /* Highly rounded corners */
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          margin-left: 20px; /* Add some left margin for positioning */
        }

        .back-button-style:hover {
          background-color: #2c8c87; /* Slightly darker green on hover */
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.3);
        }

        .back-button-style:active {
          transform: translateY(0);
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        /* --- Removed .kana-ily-button-style from here as it's no longer used --- */
      `}</style>

      {/* The BackButton component is rendered directly below the NavBar */}
      <BackButton />

      <div className="container-fluid py-5 flex-grow-1">
        <div className="main-content-column">
          <HeroSection
            backgroundImage={colompo}
            title="Explore the Wonders of Anuradhapura"
            subtitle="An ancient city filled with historical and spiritual treasures."
            // Removed buttonText and onButtonClick props to hide the button
            // buttonText="Kana ily"
            // onButtonClick={handleKanaIlyClick}
            
          />

          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 'normal',
              fontSize: '3rem',
              color: '#333',
              textAlign: 'center',
              marginTop: '50px'
            }}
          >
            The Ancient Wonders of Anuradhapura
          </h1>

          <Section title="Key Attractions" cards={attractions} id="attractions" />
        </div>
      </div>

      <Footer />
      {/* <BackToTopButton /> */}
    </div>
  );
};

export default NuwaraEliyaDetailsPage;





