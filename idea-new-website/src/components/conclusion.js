import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { BsFillSendFill } from 'react-icons/bs';
export const Conclusion = () => {
    return <>
        <div className="conclusion-container">
            <h1 className='conclusion-txt'>📱 Message me on 
                <div className='conclusion-icon'><AiFillLinkedin size={40} style={{marginLeft: '15px'}}/></div>
            </h1>
            <h1 className='conclusion-txt'>✉️ Unless you prefer something more formal 
                <div className='conclusion-icon'><BsFillSendFill size={30} style={{marginLeft: '15px'}}/></div> 
            </h1>
            <h1 className='conclusion-txt'>🎉 Check out my new hobby 
                <div className='conclusion-icon'><AiFillInstagram size={40} style={{marginLeft: '15px'}}/></div>
            </h1>

        </div>
        <style jsx>{`
            .conclusion-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding: 150px;
            }
            .conclusion-txt {
                display: flex;
                align-items: center;
            }

            .conclusion-icon:hover {
                cursor: pointer;
                transform: scale(1.1);
            }

            .conclusion-icon:active {
                cursor: pointer;
                transform: scale(1);
            }
        `}</style>
    </>
}