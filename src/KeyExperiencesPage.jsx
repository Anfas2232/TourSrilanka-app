import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KeyExperiencesPage.css';  // optional

const experiences = [
  {
    id: 1,
    title: "Sri Lanka Safari Adventure",
    description: "Explore the wild jungles and see elephants, leopards, and exotic birds in their natural habitat.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Ancient Temples Tour",
    description: "Visit historic temples and ruins from the ancient kingdoms of Sri Lanka.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Tea Plantation Walk",
    description: "Walk through lush green tea plantations in the hill country and taste fresh Ceylon tea.",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
  },
];

const KeyExperiencesPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/map'); // உங்கள் map page URL-க்கு மாற்றுங்க
  };

  return (
    <div className="container py-5">
      <button 
  className="btn btn-success mb-4"
  onClick={handleBackClick}
>
  ← Back to Map
</button>


      <h2 className="mb-4 text-center">Key Experiences in Sri Lanka</h2>
      
      <div className="row">
        {experiences.map(exp => (
          <div key={exp.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={exp.image} alt={exp.title} className="card-img-top" style={{height: '200px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">{exp.title}</h5>
                <p className="card-text">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyExperiencesPage;
