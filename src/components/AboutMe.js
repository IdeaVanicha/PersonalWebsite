import React from 'react';

export default function AboutMe() {

    return <>
        <div className="about-container">
            <div className="paragraph">
                <h1 className="heading-paragraph">Who am I?</h1>
                <p className="intro-paragraph">
                    I am 20 year old. I was born and raised in Bangkok. My childhood involves a lot of travelling between Australia 
                    and Thailand. A fun fact about me is that I've moved to 8 different schools before coming to university. My hobbies 
                    incluce playing guitar, competing in soccer against my two golden retrievers, appreciating good designs and basketball!{'\n\n'}

                    Last year I self taught myself HTML, CSS, and Javascript and absolutely loved it. I enjoy spending my free time coming up
                    with new ideas and what are some potential products I can code.
                </p>
            </div>
            <div className='education'>
                <h1 className="heading-paragraph">Education</h1>
                <div className='institution'>
                    <p className='inst-title'>University of Sydney</p>
                    <p className='title'>Bachelor of Advanced Computing and Bachelor of Commerce</p>
                    <p className='inst-caption'>Currently on Engineering Leadership Scholarship. Distinction WAM, Majoring in Computational Data Science and Finance. </p>

                </div>
                <div className='institution'>
                    <p className='inst-title'>KIS International School</p>
                    <p className='title'>International Baccalaureate</p>
                    <p className='inst-caption'>Awarded 40 IB Points, 98.05 ATAR Equivalent. Awarded Sally Holloway IB Learner Profile Award. </p>

                </div>
            </div>
        </div>
        <style jsx>{`
        .about-container {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            border: 1px solclassName black;
            padding: 50px;
            padding-top: 80px;
          }
          
        .paragraph, .education {
            display: flex;
            flex: 1;
            width: 50%;
            justify-content: center;
            flex-direction: column;
            padding-left: 10px;
            background-color: white;
            padding: 20px;
            align-self: flex-start;
        }
        .education {
            align-self: flex-end;
        }
        .institution {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        .inst-title {
            font-size: 16px;
            color: #808080;
            font-style: italic;
        }
        .title {
            font-size: 20px;
            font-weight: 600;
        }
        
        .inst-caption {
            font-size: 16px;
            color: #808080;
        }
        .intro-paragraph {
            font-size: 18px;
            margin-bottom: 20px;
            line-height: 30px;
        }
        
        .caption-paragraph {
            font-size: 20px;
            margin-bottom: 20px;
        }
        
        .heading-paragraph {
            font-size: 48px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        
        .cv-box {
            height: 40px;
            width: 120px;
            background: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            outline: none;
            border: none;
        }
        .cv-box:hover {
            cursor: pointer;
        }

        @media (max-width: 600px){
            .paragraph, .education {
                width: 100%;
                align-self: center;
            }
        }
        
        `}</style>
    </>
}