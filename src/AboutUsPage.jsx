import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Use ArrowLeft icon
import './AboutUsPage.css';

 import Red_Mosque from './images/bat5.jpg';
import portcity from './images/bat6.jpg';

const AboutUsPage = () => {
  const navigate = useNavigate();

  const goToMap = () => {
    navigate('/'); // Replace with your map route if different
  };

  return (
    <div className="about-us-container">
      {/* Go to Sri Lanka Map Button */}
      <div className="mb-3">
        <button
          onClick={goToMap}
          className="back-button-style d-inline-flex align-items-center justify-content-center"
        >
          <ArrowLeft size={20} className="me-2" /> Back
        </button>
      </div>

      <nav className="breadcrumb">
        <span className="breadcrumb-item">HOME</span>
        <span className="breadcrumb-separator">➤</span>
        <span className="breadcrumb-item active">ABOUT US</span>
      </nav>

      <h1 className="about-us-title">ABOUT US</h1>

      <div className="about-us-text">
        <p>
          A group from Sri Lanka’s private tourism sector came together shortly after the Easter outrage...
        </p>
        <p>
          Spearheaded by the private sector, the Alliance has launched a Resilience Action Plan...
        </p>
        <p>
          But above all, the Sri Lanka Tourism Alliance continues to be an example...
        </p>
      </div>

      <div className="about-us-cards">
        <div className="card">
          <img 
            src={Red_Mosque}
            alt="Join the Alliance" 
            className="card-image"
          />
          <h3 className="card-title">JOIN THE ALLIANCE</h3>
        </div>

        <div className="card">
          <img 
            src={portcity}
            alt="Twitter Feed" 
            className="card-image"
          />
          <h3 className="card-title">TWITTER FEED</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
