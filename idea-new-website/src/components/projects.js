import {DiReact} from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { SiAuth0 } from 'react-icons/si';
import pouch from '../pouch.jpeg';


export const Projects = () => {
    
   
    return <>
        <div className='Projects-container'>
            <div className='Projects-box'>
                <div className='project-box'>
                    <div className="box-left">
                        <h3 className='project-name'>POUCH LOYALTY</h3>
                        <p className='project-date'>Jun 21 - Now</p>
                        <div className='skill-box'>
                            <div className="skill-pill"> 
                                <DiReact size={30} color="white"/>
                            </div>
                            <div className="skill-pill">
                                <SiFirebase size={30} color="white"/>
                            </div>
                        </div>
                    </div>
                    <div className="box-right">
                        <ul>
                            <li>React Native mobile application.</li>
                            <li>Hihi</li>
                            <li>Hihi</li>
                        </ul>
                    </div>

                </div>
                <div className='project-box'>                    
                    <div className="box-left">
                        <h3 className='project-name'>SEVERLESS AUTH</h3>
                        <p className='project-date'>Dec 20 - Feb 21</p>
                        <div className='project-image'></div>
                        <div className='skill-box'>
                            <div className="skill-pill"> 
                                <DiReact size={30} color="white"/>
                            </div>
                            <div className="skill-pill">
                                <FaAws size={30} color="white"/>
                            </div>
                        </div>
                    </div>
                    <div className="box-right">
                        <ul>
                            <li>React Native mobile application.</li>
                            <li>Hihi</li>
                            <li>Hihi</li>
                        </ul>
                    </div>
                </div>
                <div className='project-box'>                    
                    <div className="box-left">
                        <h3 className='project-name'>BAMBOO</h3>
                        <p className='project-date'>Hackiethon 2021</p>
                        <div className='project-image'></div>
                        <div className='skill-box'>
                            <div className="skill-pill"> 
                                <DiReact size={30} color="white"/>
                            </div>
                            <div className="skill-pill">
                                <SiAuth0 size={30} color="white"/>
                            </div>
                        </div>
                    </div>
                    <div className="box-right">
                        <ul>
                            <li>React Native mobile application.</li>
                            <li>Hihi</li>
                            <li>Hihi</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .Projects-container {
                height: 100vh;
                display: flex;
                flex-direction: row;
                background: black;
                justify-content: center;
                align-items: center;
            }

            .Projects-box {
                flex: 1;
                display: flex;
                flex-direction: column;
                margin: 40px;

            }

            .project-box {
                flex: 1;
                margin: 20px;
                height: 400px;
                display: flex;
            }

            .box-left {
                flex: 3;
                display: flex;
                flex-direction: column;
                text-align: left;
            }

            .box-right {
                flex: 4;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding: 10px 0px;
                color: white;
                text-align: left;
                justify-content: flex-start;
                font-size: 20px;
            }

            .skill-pill {
                padding: 10px;
                margin: 5px;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .skill-pill:hover{
                transform: scale(1.2);
                transition: 0.5s;
            }

            .project-name {
                color: white;
                font-size: 48px;
                margin: 0;
            }

            .project-date {
                color: white;
                font-size: 20px;
            }

            .project-image {
                background: grey;
                flex: 1;
                margin: 5px 0px;
                object-fit: contain;
            }

            .skill-box {
                display: flex;
            }
        `}</style>
    </>
}