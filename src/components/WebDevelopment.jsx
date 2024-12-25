import React, { useState } from 'react';
import './WebDevelopment.css';

const WebDevelopment = () => {
  const [selectedImage, setSelectedImage] = useState("src/assets/images/dars.png");
  const [thumbnailIndex, setThumbnailIndex] = useState(0); // To track which thumbnail group we are on

  // Define project images, different for each project
  const images = {
    dars: [
      "src/assets/images/dars.png",
      "src/assets/images/do.png",
      "src/assets/images/t.png",
      "src/assets/images/d1.png",
      "src/assets/images/d2.png",
    ],
    aiss: [
      "src/assets/images/aiss1.png",
      "src/assets/images/aiss2.png",
      "src/assets/images/aiss3.png",
      "src/assets/images/aiss4.png",
    ],
    dv: [
      "src/assets/images/aiss1.png",
      "src/assets/images/aiss2.png",
      "src/assets/images/aiss3.png",
      "src/assets/images/aiss4.png",
    ],
    // Add more projects and images here
  };

  const projectDetails = [
    {
      title: "DARS - Digital Address Registration System",
      description: "This project aims to provide a robust, scalable system for registering digital addresses using React and Node.js. It ensures efficient data collection and management.",
      accomplishments: [
        "Developed the user interface using React.",
        "Implemented secure API endpoints with Node.js and Express.",
        "Integrated real-time geolocation services for address registration.",
        "Optimized the database for faster search queries.",
      ],
      link: "/more-about-dars",
      images: images.dars,
    },
    {
      title: "AISS - Agriculture Support System",
      description: "The AISS project is designed to assist farmers in accessing essential resources and data for better agricultural practices, with React for the frontend and Node.js for the backend.",
      accomplishments: [
        "Developed an interactive dashboard with data visualization features.",
        "Integrated weather data and crop management resources.",
        "Created user authentication for different roles (admin, farmer).",
      ],
      link: "/more-about-aiss",
      images: images.aiss,
    },
    {
      title: "DV - Agriculture Support System",
      description: "The AISS project is designed to assist farmers in accessing essential resources and data for better agricultural practices, with React for the frontend and Node.js for the backend.",
      accomplishments: [
        "Developed an interactive dashboard with data visualization features.",
        "Integrated weather data and crop management resources.",
        "Created user authentication for different roles (admin, farmer).",
      ],
      link: "/more-about-aiss",
      images: images.dv,
    },
    // Add other projects here
  ];

  const [currentProject, setCurrentProject] = useState(projectDetails[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const changeProject = (index) => {
    setCurrentProject(projectDetails[index]);
    setSelectedImage(projectDetails[index].images[0]); // Reset to the first image for the new project
    setThumbnailIndex(0); // Reset to the first set of thumbnails
  };

  const handleThumbnailScroll = (direction) => {
    if (direction === "down" && thumbnailIndex < currentProject.images.length - 3) {
      setThumbnailIndex(thumbnailIndex + 1);
    } else if (direction === "up" && thumbnailIndex > 0) {
      setThumbnailIndex(thumbnailIndex - 1);
    }
  };

  return (
    <div className="web-development-container">
      <h2 className="projects-title">Responsive Web Developments Projects</h2>

      {/* Horizontal Navigation with Circular Numbers */}
      <div className="projects-navigation">
        {projectDetails.map((_, index) => (
          <button
            key={index}
            className={`project-nav-btn ${currentProject.title === projectDetails[index].title ? "active" : ""}`}
            onClick={() => changeProject(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Project Details */}
      <div className="project-details">
        <h3 className="project-title">{currentProject.title}</h3>

        {/* Main Image with Thumbnails */}
        <div className="image-container">
          <div className="main-image-container">
            <img src={selectedImage} alt="Selected" className="main-image" />
          </div>

          {/* Thumbnail Carousel with Arrows */}
          <div className="thumbnail-carousel">
            <button
              className="arrow-btn up-btn"
              onClick={() => handleThumbnailScroll("up")}
              disabled={thumbnailIndex === 0}
            >
              &#8593; {/* Up Arrow */}
            </button>

            <div className="thumbnails">
              {currentProject.images.slice(thumbnailIndex, thumbnailIndex + 3).map((image, index) => (
                <div key={index} className="thumbnail-item">
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail"
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>

            <button
              className="arrow-btn down-btn"
              onClick={() => handleThumbnailScroll("down")}
              disabled={thumbnailIndex >= currentProject.images.length - 3}
            >
              &#8595; {/* Down Arrow */}
            </button>
          </div>
        </div>

        {/* Project Description */}
        <div className="project-description-container">
          <p className="project-description">{currentProject.description}</p>

          {/* Accomplishments */}
          <ul className="accomplishments">
            {currentProject.accomplishments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Project Link */}
          <a href={currentProject.link} className="project-link" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
