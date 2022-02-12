import React from 'react';
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram, AiOutlineSend} from "react-icons/ai";
import cv from '../assets/cv.pdf';
import {HiOutlineDocumentText} from 'react-icons/hi';

export default function Footer() {

    return <>
        <div id="footer-container">
            <div className="socials">
                <a href="https://www.linkedin.com/in/phasavee-idea-vanicharoenchai-b40a5b1a4/">
                    <AiOutlineLinkedin size={40} color="white" />
                </a>
                <a href="https://www.facebook.com/titi.vanicha">
                    <AiOutlineFacebook size={40} color="white"/>
                </a>
                <a href="https://www.instagram.com/phasavanicha/">
                    <AiOutlineInstagram size={40} color="white"/>
                </a>

                <a href={cv}>
                    <HiOutlineDocumentText size={35} color='white'/>
                </a>
            </div>
            <div class="contact">
                <div>
                    Email: ideavanicha@gmail.com
                </div>
            </div>

        </div>
        <style jsx>{`
        #footer-container {
            height: 20vh;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            background-color: #ed755a;
            flex-direction: column;
        }

        .socials {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            width: 40%;
        }

        .contact {
            width: 100%;
            display: flex;
            justify-content: center;
            color: white;
        }
        @media (max-width: 600px){
            .socials {
                width: 80%;
            }
        }

        `}</style>
    </>
}