export const LetsTalk = () => {
    return <>
        <div className="letsTalk-container">
            <h1 className="letsTalk-txt" style={{transform: "translateY(25px) rotate(-3deg)"}}>LET'S TALK</h1>
            <h1 className="letsTalk-txt" style={{transform: "translateY(0px) rotate(-3deg)"}}>LET'S TALK</h1>
            <h1 className="letsTalk-txt" style={{transform: "translateY(-25px) rotate(-3deg)"}}>LET'S TALK</h1>
        </div>
        <style jsx>{`
            .letsTalk-container {
                background: black;
                color: white;
                clip-path: polygon(0 30%, 100% 0, 100% 70%, 0 100%);
                padding: 40px;
                display: flex;
                justify-content: space-between;
                
            }

            .letsTalk-txt {
                color: white;
                font-size: 64px;
                transform: rotate(-4deg);
            }

        
        `}</style>
    </>
}

export const Banner = () => {
    const values = ['BRING OUT ENERGY IN OTHERS', 'STAY SILLY, TAKE IT EASY', 'DO EVERYTHING WITH GOOD INTENTION']
    return <>
        <div className="banner-container">
            <div className='banner-box'>
                {
                    values.map(val => <div className="banner-value">
                        <p className="banner-valueTxt">{val}</p>
                    </div>)
                }
            </div>

        </div>
       
        <style jsx>{`
            .banner-container {
                width: 100vw;
                padding: 60px 0px;
                display: flex;
            }
            .banner-box {
                background: black;
                width: 100vw;
                display: flex;
                flex-direction: row;
                overflow: scroll;
            }
            .banner-value {
                color: white;
                font-size: 48px;
            }

            .banner-valueTxt {
                width: 1000px;
                padding: 0px 20px;
            }
            
        `}</style>
    </>
}