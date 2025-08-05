
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Footer.css'; // Import the dedicated CSS file for the footer

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
              {/* For internal navigation, consider using <Link to="/path"> from react-router-dom */}
              <li><a href="/contact" className="text-white text-decoration-none hover-link">Top Things to Do</a></li>
              <li><a href="/contact" className="text-white text-decoration-none hover-link">Key Attractions</a></li>
              <li><a href="/contact" className="text-white text-decoration-none hover-link">Best Experiences</a></li>
              <li><a href="/contact" className="text-white text-decoration-none hover-link">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="text-accent-pink">Contact Us</h5>
            <ul className="list-unstyled">
              <li><MapPin size={16} className="me-2" /> 273 Katugastota Rd, Kandy 20000</li>
              <li><Phone size={16} className="me-2" /> +94 11 234 5678</li>
              <li><Mail size={16} className="me-2" /> info@colomboexplorer.lk</li>
            </ul>
            <div className="d-flex mt-3">
              <a href="https://www.linkedin.com/Anfas Mohamed" target="_blank" rel="noopener noreferrer" className="text-white me-3 social-icon"><Facebook size={24} /></a>
              <a href="https://www.tiktok.com/@mr_anfas_10" target="_blank" rel="noopener noreferrer" className="text-white me-3 social-icon"><Twitter size={24} /></a>
              <a href="https://www.youtube.com/@AnfasMohamed-c1x" target="_blank" rel="noopener noreferrer" className="text-white social-icon"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-center text-light-muted">
          © {new Date().getFullYear()} Colombo Explorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;