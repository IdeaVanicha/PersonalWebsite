import React from 'react';
import '../styling/AboutMe.css';
import { AiOutlineFileDone } from "react-icons/ai";
import  prom  from './prom.jpeg'
import cv from './cv.pdf'


export default function AboutMe() {

    return(
        <div id="about-container">
            <div id="photo">
                <img src={prom} id="prom-photo"/>

            </div>
            <div id="paragraph">
                <h1 id="heading-paragraph">About Me</h1>
                <p id="caption-paragraph">My Introduction</p>
                <p id="intro-paragraph">Born and raised in Bangkok (majority of the time). Lived in Sydney for a while. I enjoy travelling, meeting people from different backgrounds, playing my guitar, and competing in soccer against my two golden retrievers.</p>
                <div id="cv-box">
                    <a id="button-txt" href={cv}>View CV</a>
                    <AiOutlineFileDone size={20} color="white"/>
                </div>
            </div>
           

        </div>
    )
}