import React, { useState } from 'react';
import './Projects.css';
import WebDevelopment from './WebDevelopment';
import SQLDatabase from './SQLDatabase';
import PowerBI from './PowerBI';
import PythonData from './PythonData';
import QGIS from './QGIS';
import ExcelAnalysis from './ExcelAnalysis';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Responsive Web Development',
      description: 'Developed full-stack web applications utilizing React and Node.js. Designed modern, responsive user interfaces.',
      image: 'src/assets/images/w.jpg',
      component: <WebDevelopment />,
    },
    {
      title: 'Advanced SQL Database Architecture',
      description: 'Crafted and fine-tuned complex relational databases to maximize performance, security, and scalability.',
      image: 'src/assets/images/d.png',
      component: <SQLDatabase />,
    },
    {
      title: 'Power BI & Tableau Analytics',
      description: 'Developed interactive dashboards in Power BI and Tableau, transforming complex datasets into actionable insights.',
      image: 'src/assets/images/dv.gif',
      component: <PowerBI />,
    },
    {
      title: 'Python Data Analysis',
      description: 'Leveraged Python libraries like Pandas, NumPy, and Seaborn to analyze complex datasets and generate detailed, actionable reports.',
      image: 'src/assets/images/p.jpg',
      component: <PythonData />,
    },
    {
      title: 'QGIS Spatial Analysis',
      description: 'Conducted geospatial data analysis using QGIS to create insightful visualizations for urban planning and resource management.',
      image: 'src/assets/images/q.jpg',
      component: <QGIS />,
    },
    {
      title: 'Excel Data Analysis',
      description: 'Advanced Excel techniques to analyze complex datasets, creating insightful reports and visualizations that help business decisions.',
      image: 'src/assets/images/es.jpg',
      component: <ExcelAnalysis />,
    },
  ];

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">My Projects</h2>
      <p className="text-center mb-4">
        Explore my impressive range of projects that showcase my commitment to delivering innovative solutions.
      </p>
      <div className="row gx-4 gy-4"> {/* Add Bootstrap gap utilities */}
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6"> {/* Adjust column size */}
            <div className="card h-100 shadow-sm project-card">
              <img
                src={project.image}
                className="card-img-top project-image"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title project-title">{project.title}</h5>
                <p className="card-text project-description">{project.description}</p>
                <button
                  className="btn btn-warning"
                  onClick={() => openPopup(project.component)}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  

      {/* Popup Modal */}
      {selectedProject && (
        <div className="popup-modal">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            {selectedProject}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
