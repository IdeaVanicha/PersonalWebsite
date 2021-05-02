import React from 'react';
import '../styling/AboutMe.css'
import friends from "./drawings/friends.png";
import firstFact from "./drawings/firstFact.png";
import Sunflower from "./drawings/sunflower.jpg";
import guitar from "./drawings/guitar.png";
import resume from "../IdeaResume.pdf";

const AboutMe = ( aboutmeElem ) => {
    
    const facts = [[1, "firstfact"], [2, "secondfact"], [3,"thirdfact"], [4,"fourthfact"]];
    let val = 0;
    let currentFactId = facts[val];
    let update = false;

    function changeFact() {

        const currentFact = document.querySelectorAll(".facts");
        for (let i = 0; i < currentFact.length; i ++){
            
            if (currentFact[i].id == currentFactId[1]){

                if (!update) {
                    val += 1

                    if (val > currentFact.length - 1) {
                        val = 0;
                    }
                    currentFactId = facts[val];
                    update = true;
                    currentFact[i].style.display = "none";

                } else {
                    currentFact[i].style.display = "flex";
                    update = false;
                    return;
                }
            }
        }
        changeFact();
    }

    function disappear() {
        document.querySelector("#aboutMe").style.display = "none";
    }

    return (
        <div>
            <link rel="stylesheet" href="AboutMe.css"/>
            <div class="AboutMePage">
                <p id="AMTitle">A B O U T_M E</p>
                <p id ="email">
                    Email: ideavanicha@gmail.com | 
                    <a href="https://www.linkedin.com/in/phasavee-idea-vanicharoenchai-b40a5b1a4/"> LinkedIn: <span style = {{ color: "#ff6b6b", textDecoration: "underline"}}> Phasavee Vanicharoenchai</span> </a> 
                    | <a href={resume} download style = {{ color: "#ff6b6b", textDecoration: "underline"}}> Resume Click Here </a>
                </p>

                <div class="Information">
                    <div class="MyInfo" id="fact"> 
                        <div class="facts" id="firstfact" style={ { display:"flex", backgroundColor: "white"}}>
                            <div class="factrow">
                            <p>My name is Idea. Like I-D-E-A.. Long story short,  my dad wants me to always think 
                                about my actions. And so, he saw this baby girls and went… I will name her Idea!
                            </p>
                            </div>
                            <div class="factrow">
                                <img src= { firstFact }></img>
                            </div>
                        </div>
                        <div class="facts" id="secondfact" style={ { display: "none", backgroundColor: "white"}}>
                            <p>
                            I’ve been to 8 different schools before university. Spending most of my childhood traveling between Australia and Thailand made me more adaptable to 
                            unfamiliar environment. 
                            </p>
                            <img src= { friends }></img>
                        </div>
                        <div class="facts" id="thirdfact" style={ { display:"none", backgroundColor: "white"}}>
                            <p> Sunflower is my favourite flower! Why? Because they always face the sun, just like what I always 
                                tell myself, “Always be optimistic!”.
                            </p>
                            <img src= { Sunflower }></img>
                        </div>    
                        <div class="facts" id="fourthfact" style={ { display:"none", backgroundColor: "white"}}>
                            <div class="factrow">
                                <img id="guitarImg" src= { guitar }></img>
                            </div>
                            <div id="guitarDes">
                            <p > Whenever I'm stressed from work, I just play my guitar and my day is now 100x better!
                            </p>
                        </div>   
                        </div>              
                    </div>
                </div>
                <div class="Information">
                    <div class="buttons">
                        <button id="factButton" onClick={changeFact}>Next Fact >></button>
                    </div>
                </div>
                <div class="Information">
                    <p id="backButton" onClick={ disappear }>BACK TO HOME</p>
                </div>
               
            </div>

        </div>
    )
    
};

export default AboutMe;
