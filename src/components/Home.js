import React from 'react';
import '../styling/Home.css';
import  profile  from './profile.png'
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram, AiOutlineSend} from "react-icons/ai";

export default function Home() {

    return(
        <div id="home-container">
            <div class="socialmedia-container">
                <div class="social-media">
                    <a href="https://www.linkedin.com/in/phasavee-idea-vanicharoenchai-b40a5b1a4/">
                        <AiOutlineLinkedin size={40} color="#F5B2A3" />
                    </a>
                </div>
                <div class="social-media">
                    <a href="https://www.facebook.com/titi.vanicha">
                        <AiOutlineFacebook size={40} color="#F5B2A3"/>
                    </a>
                </div>
                <div class="social-media">
                    <a href="https://www.instagram.com/phasavanicha/">
                        <AiOutlineInstagram size={40} color="#F5B2A3"/>
                    </a>
                </div>


            </div>


            <div class="text">
                <h1 id="intro-text">Hi! I'm <span style={{color: "#ED755A"}}>Idea</span></h1>
                <p id="intro-caption">Aspiring Front-End Developer</p>
                <p id="intro-des">Full time data science and finance student at USYD. Part time innovating ideas and pretty design using code as a medium.</p>
                <div id="contact-button">
                    <a id='button-txt' href="mailto:ideavanicha@gmail.com">Contact Me</a>
                    <AiOutlineSend size={20} color="white"/>
                </div>
            </div>

            <div class="profile-picture">
                <img src={profile} id="profile-photo"/>

            </div>
   

        </div>
    )
}
