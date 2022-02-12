import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import bamboo  from '../assets/bamboo.png';
import quokka  from '../assets/Quokka.png';
import nodes from '../assets/nodes.png';
import pouchhome from '../assets/Pouch-home.png';
import pouchsearch from '../assets/pouch-search.png';
import createaccount from '../assets/create-account.png';
import cafescreen from '../assets/cafe-screen.png';
import makeOffer from '../assets/makeOffer.png';
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import resetpassword from '../assets/reset-password.png';
import signup  from '../assets/signup.png';
import login from '../assets/login.png';
import verify from '../assets/verify.png';
import bambooapp from '../assets/bamboo-app.png';

export default function Projects() {

    const Pouch = {
        title: 'Pouch Loyalty',
        description: 'Pouch is a React Native mobile application designed to store loyalty points on mobile. Pouch\'s uses Firebase as its backend. Pouch started as a fun personal project. However, as Pouch is approaching completion it will soon be published on App Store for everyone to use!',
        key_reflection: `
            Through Pouch I have learned a lot of lesson. I started Pouch back in July 2021 with zero knowledge of React Native and some background in React. Apart from learning
            to become better at React and React Native, I've also picked up Firebase from this project. I believe that the most valuable lesson from this experience
            was learning how to put myself in users shoe. Throughout the process of making the app I have to consistently ask myself, how should I design my app so that it not only is 
            easy but also fun to use! Although first prototype of Pouch is almost complete, I will continue working on this project and keep on making Pouch better.
        `,
        language: ['React Native', 'Firebase', 'React'],
        date: 'July 2021 - Present',
        image: [pouchhome, pouchsearch, createaccount, cafescreen, makeOffer]
    }

    const AuthProject = {
        title: 'Serverless Authentication',
        description: 'As part of my internship project, I\'ve designed and created a user authentication flow and integrated with AWS Cognito backend. The design can be used in both light and dark theme',
        key_reflection: `
           My internship project involves me designing log in, sign up, email verification UI. After the UI was constructed, I had to integrate it with AWS Cognitio. From
           this project I've learned how to use the AWS Cognito SDK to add users to userpool, assign them to the correct groups, validate users email when signing up and 
           implementing a system where user can reset their password. I've also learned how to move some of the SDK functions onto AWS Lambda and API Gateway to optimise 
           the process. One the biggest takeaway from this project was learning to be very detailed oriented. I came to realise the importance of details from user experience 
           and considering how user would behave on the application through to something more technical like writing code that is more efficient and uses less memory space.
        `,
        language: ['React', 'AWS Cognito', 'Next.js'],
        date: 'December 2021 - February 2022',
        image: [login, signup, resetpassword, verify]
    }


    const Bamboo = {
        title: 'Bamboo',
        description: 'A productivity tracker to make to-do list, earn points upon completing tasks, add friends, view friends tasks and send challenges.',
        key_reflection: `
        This is the first time collaborating with others to build a React App. Hackiethon 2021 was a great experience for me because I went in with no knowledge on
        databasing, user authentication flow, and very minimal experience with using React. After the Hackiethon, I gained better understandings into databases and
        how I can utilise on third party tools to build tools that requires high level of security such as user authentication. Apart from the technical skills I've picked up
        I've also learned how to collaborate with others in a team, and lots of agile tools such as Git. 
           
        `,
        language: ['React', 'Easybase', 'Auth0'],
        date: 'Hackiethon 2021',
        image: [bambooapp],
        video: 'https://devpost.com/software/bamboo-bzutwq?ref_content=user-portfolio&ref_feature=in_progress'
    }
    
    return <>
        <div className="projects-container">
            <div className='project-header'>
                <h1 className="header-project">Projects</h1>
            </div>
            <Link to='/IndividualProject' state={Pouch} >
                <div className="box" id='quokka-box'>
                    <div className='img-box'>
                        <img id='quokka' src={quokka}></img>
                    </div>
                    <div className='txt-box'>
                        <h1 className='prj-title' id='black'>Pouch</h1>
                        <p className='prj-des' id='black'>A React Native app made to store loyalty points on mobile phone.</p>
                        <div className='language-cont'>
                            <div className='language-box'>React Native</div>
                            <div className='language-box'>Firebase</div>
                            <div className='language-box'>React</div>
                            <div className='language-box'>HTML</div>
                            <div className='language-box'>CSS</div>
                            <div className='language-box'>JS</div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='/IndividualProject' state={AuthProject} >
                <div className="box" id='auth-box'>
                    <div className='txt-box' id='prj-two'>
                        <h1 className='prj-title'>Serverless Authentication</h1>
                        <p className='prj-des'>Constructed a login and a sign up page. Design the flow of user authentication, email verification, password reset, and integrated with AWS Cognito.</p>
                        <div className='language-cont'>
                            <div className='language-box'>React</div>
                            <div className='language-box'>Next.js</div>
                            <div className='language-box'>AWS Cognito</div>
                            <div className='language-box'>HTML</div>
                            <div className='language-box'>CSS</div>
                            <div className='language-box'>JS</div>
                        </div>
                    </div>
                    <div className='img-box'>
                    <img id='bamboo' src={nodes}></img>

                    </div>
                </div>
            </Link>
            <Link to='/IndividualProject' state={Bamboo}>
                <div className="box" style={{backgroundColor: '#FFCC66'}} onClick={() => console.log('here')}>
                    <div className='img-box'>
                        <img id='bamboo' src={bamboo}></img>

                    </div>
                    <div className='txt-box'>
                        <h1 className='prj-title' id='black'>Bamboo</h1>
                        <p className='prj-des' id='black'>A productivity tracker for making to-do list, earn points upon completing tasks, add friends, view friends tasks and send challenges.</p>
                        <div className='language-cont'>
                            <div className='language-box'>React</div>
                            <div className='language-box'>Auth0</div>
                            <div className='language-box'>HTML</div>
                            <div className='language-box'>CSS</div>
                            <div className='language-box'>JS</div>
                            <div className='language-box'>Hackiethon 2021</div>
                        </div>
                    </div>
                </div>  
            </Link>
              
        </div>
        <style jsx>{`
        a {
            text-decoration: none;
        }
        .projects-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 100px;
            padding-top: 30px;
        }
        .header-project {
            font-size: 48px;
            font-weight: 600;            
        }
        .box {
            flex: 1;
            height: 250px;
            display: flex;
            flex-direction: row;
            overflow: hidden;
            margin-top: 20px;
            box-shadow: 0 5px 10px 2px rgba(0,0,0,0.05); 
            border-radius: 20px;

        }
        #black {
            color: black;
            text-align: right;
        }

        .box:hover {
            cursor: pointer;
            transform: translateY(-5px);
        }
          
        .prjImg {
            object-fit: cover;
            height: 100%;
        }
        
        #prj-caption {
            height: 15%;
            width: 100%;
            color: grey;
            font-size: 14px;
            font-weight: 500;
        }
        
        #prj-des {
            height: 30%;
            width: 100%;
            font-size: 14px;
            font-weight: 500;
        }
        
        #git-button {
            height: 40px;
            width: 150px;
            background-color: #ed755a;
            border-radius: 10px;
            display: flex;
            align-items: center;
            padding-left: 10px;
            padding-right: 20px;
            justify-content: space-between;
            margin-top: 10px;
            flex-direction: row;
        }
        #quokka {
            height: auto;
            width: 100%;
            margin-left: 90px;
        }

        #bamboo {
            width: 80%;
            height: auto;
        }

        #quokka-box {
            background-color: #FF6A6B;
        }

        #auth-box {
            background-color: #151619;
            color: white;
        }
        
        .img-box {
            flex: 1;
        }

        .txt-box {
            flex: 3;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            padding: 50px;
            flex-direction: column;
        }
        #prj-two {
            justify-content: flex-start;
            align-items: flex-start;  
            flex: 2;
        }
        .language-box {
            display: flex;
            height: 40px;
            border: 1px solid white;
            border-radius: 10px;
            padding: 2px;
            padding-left: 10px;
            padding-right: 10px;
            justify-content: center;
            align-items: center;
            margin-right: 7px;
            color: white;
        }
        .language-cont {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        .prj-title {
            font-size: 44px;
            font-weight: 600;
            color: white;
            margin: 0px;
        }
        .project-header {
            flex: 1;
        }
        @media (max-width: 600px){
            .projects-container {
                width: 100%;
                align-self: center;
                padding: 0px;
                flex-wrap: wrap;
            }
            .box {
                margin: 10px;
                justify-content: center;
                align-items: center;
            }
            .img-box, .prj-des {
                display: none;
            }

            .prj-title {
                font-size: 36px;
                align-self: flex-start;
            }

            .project-header {
                margin-left: 20px;
                flex: 1;
            }
        }
        `}
        
        </style>
    </>
}

export function IndividualProject(props) {

    const location = useLocation();
    const [index, setIndex] = useState(0);

    const counter = (type) => {

        let value = index;
        if (type === 'add'){
            value ++;
        } else {
            value --;
        }

        if (value >= location.state.image.length - 1){
            value = location.state.image.length - 1;
        } else if (value < 0){
            value = 0;
        }
        setIndex(value);
    }


    return <>
        <div className='project-container'>
            <div className='project-box'>
                <div className='description'>
                    <h1 className='title'>{location.state.title}</h1>
                    <p className='date'>{location.state.date}</p>
                    <div className='language-cont'>
                        {
                            location.state.language.map(val => <div className='language-box'>{val}</div>)
                        }
                    </div>
                    <p className='caption'>{location.state.description}</p>
                    <p className='caption'>{location.state.key_reflection}</p>
                  
                </div>
                { location.state.video !== undefined ? <a id='video-demo' href={location.state.video}>Video demo</a> : <></>}
                <div className='img-box'>
                    <img src={location.state.image[index]} style={{resize: 'cover', height: '100%'}}/>
                    <div className='slider'>
                        <button onClick={() => counter('minus')} className='img-btn'>
                            <GrFormPrevious size={40}/>
                        </button>
                        <p>{index + 1} of {location.state.image.length}</p>
                        <button onClick={() => counter('add')} className='img-btn'>
                            <GrFormNext size={40}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .project-container {
                width: 100vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 20px;
            }
            .project-box {
                flex: 1;
                padding: 80px;
                display: flex;
                flex-direction: column;
                align-items: center;

            }

            .description{
                display: flex;
                align-items: center;
                flex-direction: column;
                width: 100%;
                margin-bottom: 20px;

            }

            .img-box {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 600px;
                margin-top: 20px;
            }
            .title {
                font-size: 48px;
                margin-top: 20px;
                text-align: center;
            }
            .language-box {
                display: flex;
                height: 40px;
                border-radius: 10px;
                padding: 2px;
                padding-left: 10px;
                padding-right: 10px;
                justify-content: center;
                align-items: center;
                margin-right: 7px;
                color: white;
                background-color: #ed755a;
            }

            .language-cont {
                display: flex;
                flex-wrap: wrap;
                margin-top: 20px;
            }

            .caption {
                font-size: 16px;
                text-align: center;
                margin-top: 20px;
                line-height: 25px;
            }
            .date {
                font-size: 16px;
                color: #A9A9A9;
                margin-top: 10px;
            }
            .slider {
                width: 300px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .img-btn {
                background: none;
                border: none;
                outline: none;
            }
            .img-btn:hover {
                cursor: pointer;
            }

            #video-demo {
                color: blue;
                margin: 10px;
            }    
            @media (max-width: 600px){
                .project-box {
                    width: 100%;
                    padding: 10px;
                }

                .img-box {
                    height: 300px;
                }
           
            }
        `}</style>
    </>
}