// AboutUsPage.jsx
import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <nav className="breadcrumb">
        <span className="breadcrumb-item">HOME</span>
        <span className="breadcrumb-separator">➤</span>
        <span className="breadcrumb-item active">ABOUT US</span>
      </nav>

      <h1 className="about-us-title">ABOUT US</h1>

      <div className="about-us-text">
        <p>
          A group from Sri Lanka’s private tourism sector came together shortly after the Easter outrage to form the Sri Lanka Tourism Alliance. The launch of the Love Sri Lanka website in May brought with it an outpouring of support & #love from the public. Within a few weeks Love Sri Lanka was being endorsed around the world, with over 200 members signing on to be part of the Alliance and workshops organised to assist the sector in the recovery phase.
        </p>
        <p>
          Spearheaded by the private sector, the Alliance has launched a Resilience Action Plan and a Crisis Response plan for the industry, along with a new consumer website to promote travel to Sri Lanka.
        </p>
        <p>
          But above all, the Sri Lanka Tourism Alliance continues to be an example of the immensity of things that can be achieved when people come together.
        </p>
      </div>

      <div className="about-us-cards">
        <div className="card">
          <img 
            src="https://cdn.pixabay.com/photo/2017/05/06/22/34/elephants-2282392_1280.jpg" 
            alt="Join the Alliance" 
            className="card-image"
          />
          <h3 className="card-title">JOIN THE ALLIANCE</h3>
        </div>

        <div className="card">
          <img 
            src="https://love.srilanka.travel/wp-content/uploads/2021/06/Love-Sri-Lanka-Logo-Turquoise.jpg" 
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
