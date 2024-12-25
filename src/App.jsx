import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Components
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Testimony from './components/Testimony.jsx';
import Certificate from './components/Certificate.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <Router>






      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Testimony />
      <Certificate />
      <Contact />
      <Footer />

  
    </Router>
  );
}

export default App;
