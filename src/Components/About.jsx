import React from 'react';
import './Component Styles/About.css';

const About = () => {
    return (
        <div className="about-wrapper" id="about-wrapper">
            <h3 className="about-me-heading hi-message">About Me</h3>
            <main className="main-about-me">
                <p className="small-about">
                    Hi, I am Mohit. I am a software engineer based in Bangalore, IN.
                    <br/><br/>
                    I work as a freelance full stack developer. I like building all sorts of things that have to do with the web. This includes websites ranging from simple static design to full stack social media web apps. I also like the design aspect of things and always try my best to provide amazing UX.
                    <br/><br/>
                    I graduated from from the <span className="university">Visvesvaraya Technological University</span>, and started work as an Intern at a local startup shortly after. I currently work as a freelance web developer but I am open for job opportunites. 
                </p>
                <p className="small-about tech-stack">
                    Here are some of the languages/tech I work on frequently
                </p>
                <ul className="tech-stacklist">
                    <li className="tech-item">HTML & CSS</li>
                    <li className="tech-item">JavaScript ES6+</li>
                    <li className="tech-item">Bootstrap/Materialize</li>
                    <li className="tech-item">React</li>
                    <li className="tech-item">MySQL/NoSQL databases</li>
                    <li className="tech-item">Express</li>
                    <li className="tech-item">GraphQL</li>
                    <li className="tech-item">Node.js</li>
                    <li className="tech-item">Firebase</li>
                </ul>
            </main>
            <main className="worked-with">
                <div className="heading-container">
                    <h3 className="worked-here hi-message">Worked with</h3>
                </div>
                <div className="worked-grid">
                   <div className="inner-flex">
                        <span className="company"><span>Company : </span> Street 73</span>
                        <span className="company"><span>Location : </span>Gurgaon</span>
                        <span className="company long"><span>Details : </span>Worked as a full stack developer on technologies likes React, Node.js and MongoDB. Helped redesign the company website and worked on improving backend logic.</span>
                   </div>
                   <div className="inner-flex">
                        <span className="company"><span>Company : </span> Skootr</span>
                        <span className="company"><span>Location : </span>Gurgaon</ span>
                        <span className="company"><span>Details : </span>Worked on designing the frontend dashboard for the company's enterprise app.</span>
                   </div>
                </div>
            </main>
        </div>
    )
}

export default About
