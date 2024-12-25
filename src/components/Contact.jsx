import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="py-5" style={{ backgroundColor: "#0d1117", color: "#ffffff" }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: "#ff9800" }}>Contact Me</h2>
        <div className="row">
          {/* Map Section */}
          <div className="col-lg-6 mb-4">
            <div className="map-container shadow rounded">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7890.772554722722!2d39.28050983874153!3d8.558803882907503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1f807b401f11%3A0xa23ad015fae14d56!2sASTU%20MAIN%20GATE!5e0!3m2!1sen!2set!4v1694075792924!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: "0", borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-lg-6">
            <form className="shadow p-4 rounded" style={{ backgroundColor: "#1c2026" }}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-100 mb-3">
                Send Message
              </button>
            </form>

            {/* Social Links Section */}
                        <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="mailto:youremail@example.com">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+1234567890">
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>
    
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Contact;
