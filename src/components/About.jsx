import React from 'react';
import './About.css';

const About = () => {
    return (
        <main>
            
            <section  id="about" className="intro">
                <div className="text-left">
                    <h1 className="main-title">Hi, I'm Remedan Hyeredin</h1>
                    <p className="intro-text">
    I'm a Software Engineer and Web Developer with a strong focus on Data Analysis, Database Management, Machine Learning, and Geographic Information Systems (GIS). 
    I specialize in building scalable web applications and developing data-driven solutions.
</p>



                    <div className="buttons">
                        <a href="#projects" className="explore-button">Let's Connect</a>
                    </div>
                </div>
                
                <div className="video-right">
                    <video src="src\assets\images\v.mp4" autoPlay muted loop></video>
                </div>
            </section>
        </main>
    );
}

export default About;
