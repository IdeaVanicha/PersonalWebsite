import React from 'react';
import '../styling/Consulting.css'
import JudoBank from "./drawings/JudoBank.png"


const Consulting = () => {
    return (
        <div class="ConsultingPage">
            <style href="Consulting.css"></style>
            <div class="ConsultingTable">
                <div class="ConDisplay" id="ConTitle">
                    <p class="conAlphabet">C</p>
                    <p class="conAlphabet">O</p>
                    <p class="conAlphabet">N</p>
                    <p class="conAlphabet">S</p>
                    <p class="conAlphabet">U</p>
                    <p class="conAlphabet">L</p>
                    <p class="conAlphabet">T</p>
                    <p class="conAlphabet">I</p>
                    <p class="conAlphabet">N</p>
                    <p class="conAlphabet">G</p>
                    <p class="conAlphabet"> E X P E R I E N C E</p>
                    <p class="conAlphabet"> + C A S E - C O M P E T I T I O N </p>

                </div>
                <div class="ConDisplay" id="ConInfo">
                    <div id="infoText">
                        <img id="judoImg" src={JudoBank}></img>
                        <p>2021: HoustonKemp First-Year Prize | Role: Team Member</p>
                        <p>2021: International Case Championship Delegate | Role: Team Member</p>
                        <p>2020: Innovation Cup 1st Place |  Role: Student Consultant</p>
                        <p>2020: USYD Cup 2nd Place | Role: Student Consultant</p>
                    </div>                    
                </div>
        </div>
           
    </div>
    )
}

export default Consulting;