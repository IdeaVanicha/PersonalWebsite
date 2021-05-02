import React from 'react';
import '../styling/Education.css'

const Education = () => {

    return (
        <div class="Education">
            <style href="Education.css"></style>
            <div class="EducationTable">

                <div class="educationRow">
                    <div id="educationColTitle" class="educationCol">
                        <h1 id="highschool">HighSchool</h1>
                    </div>
                    <div class="educationText" id="highschoolText">
                        <ul>
                            <li>KIS International School</li>
                            <li>international baccalaureate, Awarded 40 IB points equivalent to 98.05 ATAR</li>
                            <li>Extracirriculars: House Captain, Service Club Advisor, Football, Basketball</li>
                            <li>Outstanding Achivements: Sally Hollaway IB Learner Profile, KIS Book Scholarship</li>
                        </ul>
                    </div>

                </div>

                <div class="educationRow">
                    <div id="educationColTitle" class="educationCol">
                        <h1 id="university">University</h1>
                    </div>
                        <div class="educationText" id="highschoolText">
                        <ul>
                            <li>University of Sydney: 2020 - 2024</li>
                            <li>Bachelor of Advanced Computing and Bachelor of Commerce</li>
                            <li>Majors: Computational Data Science and Finance</li>
                            <li>Scholarship: Engineering Leadership Scholarship</li>
                            <li>WAM: Distinction</li>
                        </ul>
                    </div>

                </div>


            </div>

        </div>

    )
    
};

export default Education;
