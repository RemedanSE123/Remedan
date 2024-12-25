import React, { useEffect, useState } from 'react';
import './Education.css';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState([false, false, false]);

  const handleScroll = () => {
    const elements = document.querySelectorAll('.education-item');
    const windowHeight = window.innerHeight;

    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        setVisibleItems((prev) => {
          const newVisibleItems = [...prev];
          newVisibleItems[index] = true;
          return newVisibleItems;
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section  id="education" className="education-section">
      <h2 className="section-title">My Education Journey</h2>
  
      <div className="education-container">
        {/* Adama Science and Technology University */}
        <div className={`education-item ${visibleItems[0] ? 'visible' : ''}`}>
          <div className="logo-container">
            <img
              src="src/assets/images/AdamaScienceandTechnologyUniversityASTU-logo-350x350.jpg"
              alt="Adama Science and Technology University"
              className="edu-logo"
            />
          </div>
          <div className="edu-details">
            <h3>Adama Science and Technology University</h3>
            <p className="short-paragraph">
              I earned a Bachelor's degree in Software Engineering, focusing on developing web applications, system design, and programming in various languages.
            </p>
            <ul>
              <li>Web Development</li>
              <li>Programming Languages: Java, Python, C++</li>
              <li>Database Design</li>
              <li>Security Best Practices</li>
            </ul>
            <p>Graduated: 2024</p>
          </div>
        </div>

        {/* St. Mary's University */}
        <div className={`education-item ${visibleItems[1] ? 'visible' : ''}`}>
          <div className="logo-container">
            <img
              src="src/assets/images/8271.jpg"
              alt="St. Mary's University"
              className="edu-logo"
            />
          </div>
          <div className="edu-details">
            <h3>St. Mary's University</h3>
            <p className="short-paragraph">
              I obtained a degree in Accounting and Finance, equipping me with a strong foundation in financial analysis and economic theory.
            </p>
            <ul>
              <li>Financial Analysis</li>
              <li>Accounting Principles</li>
              <li>Budgeting & Forecasting</li>
            </ul>
            <p>Graduated: 2022</p>
          </div>
        </div>

        {/* Online Courses */}
        <div className={`education-item ${visibleItems[2] ? 'visible' : ''}`}>
          <div className="logo-container">
            <img
              src="src/assets/images/c.jpg"
              alt="Online Courses"
              className="edu-logo"
            />
          </div>
          <div className="edu-details">
            <h3>Online Courses (Ongoing)</h3>
            <p className="short-paragraph">
              I am continually expanding my knowledge through various online platforms, focusing on Machine Learning, Data Science, and advanced Web Development.
            </p>
            <ul>
              <li>Machine Learning Algorithms and Data Modeling</li>
              <li>Advanced Data Analysis with Python (Pandas, NumPy)</li>
              <li>Building Real-time Web Applications (React, Node.js)</li>
              <li>Automation with Cloud Technologies (AWS, Azure)</li>
            </ul>
            <p>Ongoing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
