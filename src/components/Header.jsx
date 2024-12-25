import React from 'react';
import './Header.css'; // CSS file for additional styling
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* Added section for image and name on the left side */}
        <div className="header-left d-flex align-items-center">
          <img
            src="src\assets\images\remdan.jpg"  // Replace with the path to your image
            alt="Remedan Hyeredin"
            className="profile-image"
          />
          <span className="name">Remedan Hyeredin</span>
        </div>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
                             
                      <li className="nav-item">
                        <a className="nav-link smooth-scroll" href="#education">Education</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link smooth-scroll" href="#Skills">Skills</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link smooth-scroll" href="#projects">Projects</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link smooth-scroll" href="#testimony">Testimony</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link smooth-scroll" href="#certificate">Certificate</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link smooth-scroll" href="#contact">Contact</a>
                      </li>



            <li className="nav-item">
  <a
    className="fab fa-github"
    href="https://github.com"
    style={{
      color: "#ffffff", // Default icon color
      fontSize: "1.5rem", // Icon size
      textDecoration: "none", // Remove underline
      display: "inline-flex", // Align icon horizontally
      alignItems: "center", // Vertically center the icon
      justifyContent: "center", // Center content within
      width: "50px", // Circle width
      height: "50px", // Circle height
      borderRadius: "50%", // Makes the link circular
      backgroundColor: "#1c2026", // Background color
      transition: "all 0.3s ease-in-out", // Smooth hover effect
      transform: "translateY(-5px)", // Initial upward placement
    }}
    onMouseEnter={(e) => {
      e.target.style.color = "#ff9800"; // Hover: Change icon color
      e.target.style.backgroundColor = "#2a2f36"; // Hover: Change background color
      e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)"; // Hover: Add shadow effect
      e.target.style.transform = "translateY(-8px)"; // Move further up
    }}
    onMouseLeave={(e) => {
      e.target.style.color = "#ffffff"; // Reset icon color
      e.target.style.backgroundColor = "#1c2026"; // Reset background color
      e.target.style.boxShadow = "none"; // Reset shadow effect
      e.target.style.transform = "translateY(-3px)"; // Reset to initial upward position
    }}
    target="_blank"
    rel="noopener noreferrer"
  ></a>
</li>


            
                 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
