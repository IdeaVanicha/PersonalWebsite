import React from 'react';
import  profile  from '../assets/profile.png'
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";
import cv from '../assets/cv.pdf';
import {HiOutlineDocumentText} from 'react-icons/hi';

export default function Home() {

    return <>
        <div id="home-container">
            <div className="socialmedia-container">
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
                <a class="social-media" href={cv}>
                <HiOutlineDocumentText size={35} color='#F5B2A3'/>
                </a>
            </div>

            <div class="text">
                <h1 id="intro-text">Hi! I'm <span style={{color: "#ED755A"}}>Idea</span></h1>
                <p id="intro-caption">Aspiring Front-End Developer</p>
                <p id="intro-des">Full time data science and finance student at USYD. Part time innovating ideas and pretty design using code as a medium.</p>
                <a id="contact-button"  href="mailto:ideavanicha@gmail.com">
                    <AiOutlineMail size={20} color="white"/>
                    <p id='button-txt'>Send Email</p>
                </a>
            </div>

            <img src={profile} className="profile-picture"/>

        </div>
        <style jsx>{`
            #home-container {
                padding-top: 40px;
                height: 90vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-left: 150px;
                padding-right: 100px;
            }

            .social-media {
                height: 50px;
                opacity: 0%;
                margin-bottom: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                background-color: white;
                border-radius: 10px;
                animation-duration: 1s;
                animation-name: fade-in;
                animation-fill-mode: forwards;
                animation-delay: 3s;
            }

            .social-media:hover {
                cursor: pointer;
            }


            .text {
                flex: 1;
                display: flex;
                justify-content: center;
                flex-direction: column;
                padding-left: 20px;
            }

            .profile-picture {
                height: 700px;
                animation-duration: 2s;
                animation-name: slide-up;
                animation-fill-mode: forwards;
            }

            @media only screen and (max-width: 600px) {
                .social-media {
                    display: none;
                }
                #home-container {
                    padding: 10px;
                    margin-top: 60px;
                    flex-direction: column;
                }
                .profile-picture {
                    height: 400px;
                }
            }

            #intro-text {
                font-size: 60px;
                animation-duration: 3s;
                animation-name: slide-down;
                animation-fill-mode: forwards;
            }

            @keyframes slide-down {
                from {
                    margin-top: -50%;
                }

                to {
                    margin-top: 0%;
                }
            }

            @keyframes fade-in {
                from {
                    opacity: 0%;
                }

                to {
                    opacity: 100%;
                }
            }

            @keyframes slide-up {
                from {
                    margin-bottom: -50%;
                }

                to {
                    margin-bottom: 0%;
                }
            }
            #intro-caption {
                font-size: 30px;
            }
            
            #intro-des {
                font-size: 18px;
            }
            #button-txt {
                color: white;
                text-decoration: none;
            }
        
        `}</style>
    </>
}