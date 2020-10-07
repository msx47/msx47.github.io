import React from 'react';
import twit from '../assets/svg/twitter.svg'
import git from '../assets/svg/github.svg'
import './Component Styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-wrapper" id="navbar-wrapper" tabIndex={0} onBlur={removeNavbar}>
            <nav className="flex-left">
                <div className="nav-div">
                    <a href="https://github.com/msx47" target="_blank" rel="noopener noreferrer"><img src={git} alt="live-link" width="30"/></a>
                </div>
                <div className="nav-div">
                    <a href="https://twitter.com/_msx47" target="_blank" rel="noopener noreferrer"><img src={twit} alt="live-link" width="30"/></a>
                </div>
            </nav>
            <nav className="inner-nav-flex">
                <span className="nav-item"><a href="#hero-main-grid">Home</a></span>
                <span className="nav-item"><a href="#about-wrapper">About</a></span>
                <span className="nav-item"><a href="#projects-wrapper">Projects</a></span>
                <span className="nav-item"><a href="#contact">Contact</a></span>
                <span className="nav-item active"><a href="www.google.com">Resume</a></span>
            </nav>
        </div>
    )
}
const removeNavbar = (e) => {
    // console.log(e.relatedTarget.tagName);
    if(!e.relatedTarget || e.relatedTarget.tagName !== 'A'){
        document.getElementById('navbar-wrapper').classList.remove('navbar-block');
    }
}

export default Navbar
