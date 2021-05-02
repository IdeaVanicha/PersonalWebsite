import React from 'react';
import '../styling/Experience.css'
import Consulting from './Consulting.js';
import bamboo from "./drawings/bamboo.png";
import scoreboard from "./drawings/scoreboard.png";


const Experience = () => {

    let firstClick = false;

    function display( description ) {

        if (!firstClick){

            if(description.target.id == "bambooButton"){
                document.querySelector(".bambooDes").style.display = "flex";
                document.getElementById("bimg").style.display = "none";
                document.getElementById("bambooButton").innerHTML = "CLOSE";

            } else if (description.target.id == "scoreboardButton"){
                document.querySelector(".scoreboardDes").style.display = "flex";
                document.getElementById("sbimg").style.display = "none";
                document.getElementById("scoreboardButton").innerHTML = "CLOSE";
            }

            firstClick = true;

        } else { 

            if(description.target.id == "bambooButton"){
                document.querySelector(".bambooDes").style.display = "none";
                document.getElementById("bimg").style.display = "flex";
                document.getElementById("bambooButton").innerHTML = "DESCRIPTION";
            } else if (description.target.id == "scoreboardButton"){
                document.querySelector(".scoreboardDes").style.display = "none";
                document.getElementById("sbimg").style.display = "flex";
                document.getElementById("scoreboardButton").innerHTML = "DESCRIPTION";
            }
           
            firstClick = false;
        }
    }



    return (
        <div>
            <p class="expStick" id="exp">E X P E R I E N C E S</p>
            <div class="Experience">
            <style href="Experience.css"></style>
            <div class="PjTable">
                <div id="PjTitleColumn">
                    <p id="ProjectTitle"> P</p>
                    <p id="ProjectTitle"> R</p>
                    <p id="ProjectTitle"> O</p>
                    <p id="ProjectTitle"> J</p>
                    <p id="ProjectTitle"> E</p>
                    <p id="ProjectTitle"> C</p>
                    <p id="ProjectTitle"> T</p>
                    <p id="ProjectTitle"> S</p>
                </div>
                <div id="PjColumn">
                    <div id="project 1" class="box">
                        <table>
                            <div>
                                <tr id="bimg"><img id="bambooImg" src={bamboo}></img></tr>
                                <tr class="bambooDes" id="bambooDes">
                                    <p>The theme of 2021 Hackiethon was "Working from Home". My team and I designed 
                                    <span><a id="bambooLink" href="https://devpost.com/software/bamboo-bzutwq?ref_content=user-portfolio&ref_feature=in_progress"> Bamboo </a></span> 
                                    which is productivity application where users can make their own to-do list, earn points upon completing tasks, add friends, view their friends 
                                    tasks and send challenges to their friends. I was involved in building the user authentication system, connecting our application 
                                    to the backend and handled some css and javascript.</p>
                                </tr>
                            </div>

                            <tr id="projectDes">
                                <button class="projectButtons"><a href="https://github.com/IdeaVanicha/hackiethon-2021">GITHUB</a></button>
                                <button class="projectButtons" id="bambooButton" onClick={ display }>DESCRIPTION</button>
                            </tr>

                        </table>
                    </div>

                    <div class="box">
                        <table>
                            <div>
                                <tr id="sbimg" ><img id="bambooImg"  src={scoreboard}/></tr>
                                <tr class="scoreboardDes">
                                <p> This is the first small project I've ever coded using javascript, css, and html. I started learning JS, CSS, and HTML by 
                                    myself during winter break. This is nothing big, but a first step to my self-taught journey :).
                                </p>
                                </tr>
                            </div>

                            <tr id="projectDes">
                                <button class="projectButtons"><a href="https://github.com/IdeaVanicha/Scoreboard">GITHUB</a></button>
                                <button class="projectButtons" id="scoreboardButton" onClick={ display }>DESCRIPTION</button>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        </div>
        <Consulting></Consulting>
        </div>
 
    )
    
};

export default Experience;
