import React from 'react';
import './Component Styles/Hero.css';

const Hero = () => {
    return (
        <div className='hero-main-grid' id="hero-main-grid">
            <div className="intro-wrapper">
                <span className="hi-message">
                    Hi, my name is
                </span>
                <h3 className="name">
                    Mohit Srivastava.
                </h3>
                <p className="small-about">
                    I am a software engineer based in Bangalore, IN. I specialize in building fully fledged websites and applications.
                </p>
                <a href="mailto:mohitsrivastava67@gmail.com"><button className="contact-btn">Get in touch</button></a>

            </div>
        </div>
    )
}

export default Hero
