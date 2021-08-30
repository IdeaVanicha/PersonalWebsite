import React, { useState, useEffect } from 'react';
import '../styling/Navigation.css';
import {Link} from 'react-scroll';
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";


export default function NavigationBar() {

    const [collasped, setCollasped] = useState(true)

    const showNav = () => {

        if (collasped){
            document.querySelector(".drop-down").style.display = "flex";
            setCollasped(false)
        } else {
            document.querySelector(".drop-down").style.display = "none";
            setCollasped(true)
        }
    }

    window.addEventListener('resize', (event) => {

        if (window.innerWidth >= 800){
            document.querySelector(".drop-down").style.display = "none";
            setCollasped(true)
        }
      });

    return(
        <div class="container">
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
        <div class="drop-down">
                <Link to="about-container" smooth={true} class="drop">About Me</Link>
                <Link to="overall-container"  smooth={true} class="drop">Education</Link>
                <Link to="overall-container" smooth={true} class="drop">Experience</Link>
                <Link to="projects-container" smooth={true} class="drop">Projects</Link>
                <Link to="footer-container" smooth={true} class="drop">Contact Me</Link>
        </div>
        <div class="menu">
            {collasped ?
                <AiOutlineMenu size={30} color="black" onClick={showNav}/> :
                <AiFillCloseCircle  size={30} color="black" onClick={showNav}/> }
            </div> 
        </div >


    )
}