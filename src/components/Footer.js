import React from 'react';
import '../styling/Footer.css';
import  placeholder  from './placeholder.jpeg'
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram, AiOutlineSend} from "react-icons/ai";


export default function Footer() {

    return(
        <div id="footer-container">
            <div class="socials">
                    <div class="social-media">
                    <a href="https://www.linkedin.com/in/phasavee-idea-vanicharoenchai-b40a5b1a4/">
                        <AiOutlineLinkedin size={40} color="white" />
                    </a>
                    </div>
                    <div class="social-media">
                    <a href="https://www.facebook.com/titi.vanicha">
                        <AiOutlineFacebook size={40} color="white"/>
                    </a>
                    </div>
                    <div class="social-media">
                    <a href="https://www.instagram.com/phasavanicha/">
                        <AiOutlineInstagram size={40} color="white"/>
                    </a>
                    </div>
            </div>
            <div class="contact">
                <div>
                    Ph: 0410 104 442<br/>
                    Email: ideavanicha@gmail.com
                </div>
            </div>

        </div>
    )
}