import { useCallback } from "react";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

export const Awards = () => {

    const onClick = useCallback(() => {
        confetti({
          particleCount: 150,
          spread: 60
        });
      }, []);

    const awards = [
        {
            name: 'CBS Case Competition 1st Place 2023',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            name: 'Google Generation Award 2022',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            name: 'Macquarie Coding Fest Award 2022',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            name: 'AWS ECIP Case Competition 1st Place',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            name: 'Tech For Social Good 2nd Place',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            name: 'Faculty of Engineering Leadership Scholarship',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },

    ]
    
   
    return <>
        <div className='awards-container'>
            <div className='awards-box'>
            {
                    awards.map(value => <div className='experience-job'>
                        <h3>{value.name}</h3>
                        </div>)
                }
                <button className="confetti-btn" onClick={() => onClick()}>🎉 </button>

            </div>
            
        </div>
        <style jsx>{`
            .awards-container {
                display: flex;
                flex-direction: row;
                height: 60vh;
                padding: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .awards-box {
                flex: 1;
                text-align: center;
            }

            .confetti-btn {
                width: 60px;
                height: 60px;
                background: black;
                border-radius: 50%;
                border: none;
                margin-top: 20px;
                font-size: 30px;
            }

            .confetti-btn:hover {
                cursor: pointer;
                transform: scale(1.1);
                transition: 0.2s;
            }

            .confetti-btn:active {
                cursor: pointer;
                transform: scale(1);
                font-size: 28px;
                transition: 0.2s;
            }
        `}</style>
    </>
}