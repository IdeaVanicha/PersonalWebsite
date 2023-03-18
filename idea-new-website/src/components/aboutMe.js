import personalPhoto from '../personalPhoto.png';

export const AboutMe = () => {

    return <>
        <div className='aboutMe-container'>
            <div className='aboutMe-box' id="photoBox">
                <img src={personalPhoto} className='aboutMe-img'/>
            </div>
            <div className='aboutMe-box'>
                <h1>Nice to meet you!</h1>
                <p>I'm currently finishing my degree in Advanced Computing. I am majoring in Computational Data Science and Cybersecurity. I love spending my free time turning my ideas into a tangible product, and code is a medium to help me achieve that goal!
                <br/><br/>Outside coding, I love a good musical, books, beginner dancing lessons, and <b>walking</b>!
                </p>
            </div>
        </div>
        <style jsx>{`
            .aboutMe-container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                padding: 80px;
            }

            .aboutMe-box {
                flex: 1;
                width: 100vw;
                font-size: 20px;
                line-height: 30px;
                display: flex;
                flex-direction: column;
                text-align: left;
                justify-content: center;
            }

            #photoBox {
                justify-content: center;
                align-items: center;
            }
            
            .aboutMe-img {
                width: 50%;
            }

            .aboutMe-img:hover {
                transform: scale(0.95);
                transition: 0.2s;
            }

            .aboutMe-img:active {
                transform: scale(1));
                transition: 0.2s;
            }
        `}</style>
    </>
}