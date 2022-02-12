import React from 'react';
import unilodge from '../assets/unilodge.png'
import ar from '../assets/ar.jpeg'
import accenture from '../assets/accenture-logo.png'

export default function Experience() {

    return <>
    <div className='work-container'>
        <h1 style={{fontWeight: '600', fontSize: '48px' }}>Work Experience</h1>
        <div className='work-box'>
            <div className='work'>
                <img src={accenture} style={{height: 'auto', width: '40px', marginBottom: '20px'}}/>
                <p style={{fontSize: '18px', color: '#a7a7a7', margin: '0px'}}>Accenture</p>
                <p style={{ fontWeight: '600', fontSize: '20px'}}>Software Developer Intern</p>
                <p style={{fontSize: '16px', marginTop: '20px', lineHeight: '25px'}}>Created the login and signup page for Stormwatch SaaS application using React and Next.js. Integrated AWS Cognito with the authentication process.</p>
            </div>
           
            <div className='work'>
                <img src={ar} style={{height: 'auto', width: '100px', marginBottom: '20px'}}/>
                <p style={{fontSize: '18px', color: '#a7a7a7', margin: '0px'}}>Adviser Ratings</p>
                <p style={{ fontWeight: '600', fontSize: '20px'}}>Data Administrator</p>
                <p style={{fontSize: '16px', marginTop: '20px', lineHeight: '25px'}}>Research into New Zealand market expansion strategy. Assisted with some basic HTML/CSS for marketing campaigns. Collect and clean data.</p>
            </div>
            <div className='work'>
                <img src={unilodge} style={{height: 'auto', width: '90px', marginBottom: '20px'}}/>
                <p style={{fontSize: '18px', color: '#a7a7a7', margin: '0px'}}>Unilodge</p>
                <p style={{ fontWeight: '600', fontSize: '20px'}}>Residential Assistant</p>
                <p style={{ marginTop: '20px', fontSize: '16px', lineHeight: '25px'}}>Plan, host and promote events in student accomodation to enrich student life and uplift community spirit</p>
            </div>
           
          

        </div>
    </div>

    <style jsx>{`
        .work-container {
            display: flex;
            flex-direction: column;
            padding: 100px;
            padding-top: 30px;
        }
        .work {
            width: 400px;
            height: 250px;
            margin-right: 50px;
            margin-top: 50px;
            display: flex;
            padding: 10px;
            flex-direction: column;
            background-color: white;
            box-shadow: 0 5px 10px 2px rgba(0,0,0,0.05); 
            padding: 30px;
            border-radius: 20px;
        }

        .work-box {
            display: flex;
            flex-direction: row;
        }

        .work:hover {
            box-shadow: 0 5px 10px 2px rgba(135,135,135,0.05); 
            transition: 0.2s linear box-shadow;

        }
        #work-img {
            height: 100%;
        }
        .education-container {
            height: 80px;
            display: flex;
            flex-direction: column;
            padding: 120px;
        } 
        @media (max-width: 600px){
            .work-container {
                width: 100%;
                align-self: center;
                padding: 20px;
                flex-wrap: wrap;
            }
            .work-box {
                flex-direction: column;
            }
        }
    `}</style>
    </>
}