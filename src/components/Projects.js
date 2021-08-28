import React, {useState} from 'react';
import '../styling/Projects.css';
import  placeholder  from './placeholder.jpeg'
import bamboo  from './bamboo.png'
import personal  from './personal.png'
import pouch  from './pouch.png'


import { AiFillGithub, AiOutlineTool} from "react-icons/ai";

export default function Projects() {
    
    return(
        <div id="projects-container">
            <div id="header-project">
                <h1>Projects</h1>
            </div>
            <div id="slider-project">
                <div id="box">
                    <div id="top">
                        <img id="prjImg" src={bamboo}></img>
                    </div>
                    <div id="bottom">
                        <div id="prj-title">Bamboo</div>
                        <div id="prj-caption">Hackiethon 2021 | JS, HTML, CSS, React</div>
                        <div id="prj-des"> A productivity tracker to make to-do list, earn points upon completing tasks, add friends, view friends 
                    tasks and send challenges</div>
                    <div id="git-button">
                    <a href="https://github.com/IdeaVanicha/hackiethon-2021" >
                        <p id="button-txt">Git Hub</p>
                    </a>
                    <AiFillGithub size={20} color="white"/>

                    </div>
                    </div>
                </div>

                <div id="box">
                    <div id="top">
                        <img id="prjImg" src={personal}></img>
                    </div>
                    <div id="bottom">
                        <div id="prj-title">Personal Website</div>
                        <div id="prj-caption">Aug 2021 | JS, HTML, CSS, React</div>
                        <div id="prj-des">Made this website using React, HTML, CSS and Javascript</div>
                    <div id="git-button">
                    <a href="https://github.com/IdeaVanicha/hackiethon-2021" >
                        <p id="button-txt">Git Hub</p>
                    </a>
                    <AiFillGithub size={20} color="white"/>

                    </div>
                    </div>
                </div>

                <div id="box">
                    <div id="top">
                        <img id="prjImg" src={pouch}></img>
                    </div>
                    <div id="bottom">
                        <div id="prj-title">Pouch Loyalty</div>
                        <div id="prj-caption">Ongoing Product | JS, HTML, CSS, React Native</div>
                        <div id="prj-des">Current project. Mobile Application made using React Native.</div>
                    <div id="git-button">
                    <p id="button-txt">Ongoing</p>
                    <AiOutlineTool size={20} color="white"/>
                    </div>
                    </div>
                </div>
 
            </div>

        </div>
    )
}