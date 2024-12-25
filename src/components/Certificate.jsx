import React, { useState } from "react";
import "./Certificate.css";

const Certificate = () => {
  const certificates = [
     {
      title: "Completion of Internship Program",
      issuedBy: "Kukunet Digital ",
    
      image: "src/assets/Certificates/Internship_certificate_Remedan.pdf",
    }, 
    {
      title: "AI, Data Analyst & Android Dev't",
      issuedBy: "Udacity",
     
      image: "src/assets/Certificates/AI_merged.pdf",
    },
    
      {
      title: " Strategies For Success",
      issuedBy: "E-SHE and Minister of Education",
     
      image: "src/assets/Certificates/Certificates.pdf",
    },

    {
      title: " Graphic Design and Video Editing",
      issuedBy: "Coursera",
     
      image: "src/assets/Certificates/grapics.pdf",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle to show or hide certificates
  const toggleCertificates = () => {
    setShowAll(!showAll);
  };

  // Open modal with content
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="certificate" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-highlight">Certificates</h2>

        <div className="row">
          {/* Show only the first 3 certificates initially */}
          {(showAll ? certificates : certificates.slice(0, 3)).map((certificate, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="certificate-card shadow">
                {certificate.image.endsWith(".pdf") ? (
                  <iframe
                    src={certificate.image}
                    title={certificate.title}
                    className="certificate-image"
                    onClick={() => openModal(certificate.image)}
                  />
                ) : (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-image"
                    onClick={() => openModal(certificate.image)}
                  />
                )}
                <h5 className="certificate-title">{certificate.title}</h5>
                <p className="certificate-issuer">Issued By: {certificate.issuedBy}</p>
             
              </div>
            </div>
          ))}
        </div>

        {/* Button to show all certificates */}
        <div className="text-center">
          <button className="show-all-btn" onClick={toggleCertificates}>
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>

        {/* Modal for Image or PDF */}
        {isModalOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {modalContent.endsWith(".pdf") ? (
                <iframe
                  src={modalContent}
                  title="Certificate"
                  className="modal-iframe"
                />
              ) : (
                <img src={modalContent} alt="Certificate" className="modal-img" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
