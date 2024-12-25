import React from "react";

const Footer = () => {
  return (
    <footer className="py-4" style={{ backgroundColor: "#0d1117", color: "#ffffff" }}>
      <div className="container">
       
        <hr style={{ borderColor: "#ffffff" }} />
        <p className="text-center" style={{ fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Remedan Hyeredin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
