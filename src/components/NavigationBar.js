import React from 'react';
import '../styling/Navigation.css';
import {Link} from 'react-scroll';

export default function NavigationBar() {

    return(
        <div class="navbar-container">
                <Link to="home-container" smooth={true} class="navbar-logo">Idea</Link>
            <div class="navbar-links">
                <Link to="about-container" smooth={true} class="links">About Me</Link>
                <Link to="overall-container"  smooth={true} class="links">Education</Link>
                <Link to="overall-container" smooth={true} class="links">Experience</Link>
                <Link to="projects-container" smooth={true} class="links">Projects</Link>
                <Link to="footer-container" smooth={true} class="links">Contact Me</Link>

            </div>
        </div>
    )
}