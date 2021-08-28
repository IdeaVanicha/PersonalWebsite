import React from 'react';
import '../styling/Education.css';
import  placeholder  from './placeholder.jpeg'
import  education  from './education.png'
import unilodge from './unilodge.png'
import ar from './ar.jpeg'
import kis from './kis.png'
import usyd from './usyd.png'


export default function Education() {

    const displayEducation = () => {
        document.querySelector("#work-main").style.display = "none";
        document.querySelector("#education-main").style.display = "flex";
    }


    const displayWork = () => {
        document.querySelector("#work-main").style.display = "flex";
        document.querySelector("#education-main").style.display = "none";
    }

    return(
        <div id="overall-container">
            <div id="side">
                <div class="work-experience">
                    <div class="title" onClick={displayWork}>Work Experience</div>

                </div>
                <div class="education-container">
                    <div class="title" onClick={displayEducation}>Education</div>

                    {/* <div id="education-title">Education</div>
                    <div>My education journey</div>
                    <div>
                        <img src={education} id="education-photo"/>
                    </div> */}
                </div>
            </div>
        <div id="main1">
            <div id="work-main">
                <div id="work"> 
                    <img src={unilodge} id="work-img" />
                    <div id="work-des">
                    <div id="title-box"><p id="work-title">Residential Assistant</p><br/>Jan.21 - Jul.21</div>
                    <div id="des-box"><p>Plan, host and promote events in student accomodation to enrich student life and uplift community spirit </p></div></div>
                </div>
                <div id="work"> 
                    <img src={ar} id="work-img"/>
                    <div id="work-des">
                        <div id="title-box"><p id="work-title">Data Administrator</p><br/>Aug.21 - Current</div>
                        <div id="des-box"><p>Collect and clean data. Assist with some basic HTML/CSS for marketing campaigns.</p></div>
                    </div>
                </div>
            </div>

            <div id="education-main">
            <div id="work"> 
                    <img src={kis} id="kis-img" />
                    <div id="work-des">
                    <div id="title-box"><p id="work-title">KIS International School</p></div>
                    <div id="des-box">IB Score: 40 points, 98.05 ATAR Equivalent</div></div>
                </div>
                <div id="work"> 
                    <img src={usyd} id="work-img"/>
                    <div id="work-des">
                    <div id="title-box"><p id="work-title">University of Sydney</p></div>
                    <div id="des-box">B. of Advanced Computing & B.Commerce <br/>( 2020 - 2024 )</div></div>
                </div>
            </div>

        </div>



        </div>
        
    )
}