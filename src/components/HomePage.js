import React from 'react';
import '../styling/HomePage.css'
import Education from './Education.js';
import AboutMe from './AboutMe';


const HomePage = () => {


    let aboutMeElem = document.querySelector("#aboutMe")
    let eduClicked = false;

    function displayEducation() {

        if (!eduClicked){
            document.getElementById("education").style.display = "flex";
            eduClicked = true;
        } else {
            document.getElementById("education").style.display = "none";
            eduClicked = false;
        }
    }


    function displayAboutMe() {
        document.getElementById("aboutMe").style.display = "flex";
    }

    document.addEventListener('scroll', function() {

        console.log("scrolling...")
        console.log(document.getElementById("expNav"))
    })

    return (
        <div class="HP">
            <div class="column">
                <div class="row">
                    <link rel="stylesheet" href="HomePage.css"/>
                    <div class="left">
                        <p onClick={ displayEducation }class="nav" id="EducationNav"> EDUCATION </p>
                    </div>
                    <div class="center">
                        <div class="Welcome" id="Title">
                            <li id="titleOne">Hi, Nice to meet you!</li><br/>
                            <li id="titleTwo">Welcome to my Portfolio</li><br/>
                        </div>
                        <div id="education">
                            <Education></Education>
                        </div>
                    </div>
                    <div class="right" onClick={ displayAboutMe }>
                        <p class="nav" id="AboutMe"> ABOUT ME </p>
                    </div>
                </div>
            </div>
            
            <div id="aboutMe" class="w3-animate-right">
                <AboutMe aboutmeElem={aboutMeElem}></AboutMe>
            </div>
        </div>
    )
    
};

export default HomePage;
