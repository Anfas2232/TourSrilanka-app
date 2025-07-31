import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './ContactUsPage.css';

const ContactUsPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

 

  const goToMap = () => {
    navigate('/map'); // Navigate to Sri Lanka Map page
  };

  return (
    <div className="contact-page">
      <div className="container py-5">
        {/* Buttons */}
        <div className="mb-4 d-flex justify-content-start gap-3">
          <button
            onClick={goToMap}
            className="back-button-style d-inline-flex align-items-center justify-content-center"
          >
            <ArrowLeft size={20} className="me-2" /> Back
          </button>

      
        </div>

        <h2 className="text-center mb-4">Contact Us</h2>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h5>Get in Touch</h5>
            <p><strong>Address:</strong> Colombo, Sri Lanka</p>
            <p><strong>Email:</strong> info@srilankatour.com</p>
            <p><strong>Phone:</strong> +94 77 123 4567</p>
            <p><strong>Working Hours:</strong> Mon - Fri, 9am - 6pm</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
