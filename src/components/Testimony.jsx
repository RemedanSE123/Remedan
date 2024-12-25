import React from "react";
import "./Testimony.css";

const Testimony = () => {
  const testimonials = [
    {
      name: "Solomon Abate (Ph.D)",
      title: "Project Initiator & Manager",
      message:
        "Working with Remedan was a fantastic experience. He innovative ideas and technical expertise were truly inspiring! Remedan successfully completed all tasks assigned to him, including building the Digital Address Registration System (DARS) for Ethiopia and providing tutoring on programming languages. Both tasks were delivered perfectly.",
    },
    {
      name: "Lemlem Tajebe (Ph.D)",
      title: "Project Manager",
      message:
        "Remedan consistently deliver high-quality work on time. His dedication and skills are unmatched. Remedan expertise was crucial in the development of the Agricultural Investment Support System (AISS), a full-stack solution that was completed perfectly. The project was executed flawlessly, meeting all objectives and delivering outstanding results.",
    },
  ];

  const companies = [
    {
      name: "Kukunet Digital",
      image: "src/assets/images/k.jpg",
    },
    {
      name: "BukariTech",
      image: "src/assets/images/bu1.jpg",
    },
    
    {
      name: "Upwork",
      image: "src/assets/images/Upwork-Symbol.png",
    },
    {
      name: "Freelance",
      image: "src/assets/images/freelancer.jpg",
    },
    
  ];

  return (
    <div id="testimony" className="py-5">
      <div className="container">
        {/* Testimonials Section */}
        <h2 className="text-center mb-4 text-highlight">Testimonials</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-6 col-md-12 mb-4">
              <div className="testimonial-card shadow p-4">
                <h5 className="testimonial-name">{testimonial.name}</h5>
                <p className="testimonial-title">{testimonial.title}</p>
                <p className="testimonial-message">{testimonial.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos Section */}
        <div className="company-logos mt-5">
          <h3 className="text-center mb-4 text-highlight">Companies I've Worked With</h3>
          <div className="row justify-content-center">
            {companies.map((company, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4 text-center">
                <img
                  src={company.image}
                  alt={company.name}
                  className="company-logo"
                />
                <p className="company-name mt-2">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
