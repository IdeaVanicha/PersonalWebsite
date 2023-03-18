import { AiFillLinkedin } from 'react-icons/ai';

const SocialMediaButton = (props) => {
    return <>
        <a className='sm-container' href={props.value.link}>
            {
                props.value.emoji === 'AiFillLinkedin' ?  <AiFillLinkedin size={25} color='white'/>:
                <div className="emoji">{props.value.emoji}</div>
            }
        </a>
        <style jsx>{`
            a {
                padding: 0;
            }
            .sm-container {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 1px solid black;
                margin: 0px 10px;
                background: black;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .sm-container:hover {
                cursor: pointer;
                transform: scale(1.1);
                transition: 0.2s;
            }
            .sm-container:active {
                cursor: pointer;
                transform: scale(1);
                transition: 0.2s;
            }

            .emoji {
                font-size: 20px;
            }
        `}</style>

    </>

}

export const Landing = () => {
    
    const buttons = [
        {
            label: 'email',
            emoji: '📧',
            link: ''
        },
        {
            label: 'cv',
            emoji: '📄',
            link: ''
        },
        {
            label: 'linkedin',
            emoji: 'AiFillLinkedin',
            link: 'https://www.linkedin.com/in/phasavee-idea-vanicharoenchai-b40a5b1a4/'

        }
    ]
    return <>
        <div className='landing-container'>
            <p>Hello!<br/>I'm Idea 👩‍💻<br/>I love code, pretty UI,<br/> and cool products</p>
            <div className='smBtn-container'>
                {
                    buttons.map(val => <SocialMediaButton value={val}/>)
                }
            </div>
        </div>
        <style jsx>{`
            .landing-container {
                flex: 1;
                text-align: left;
                font-size: 72px;
                padding: 80px 40px;
            }

            .smBtn-container {
                display: flex;
                flex-direction: row;
            }

        `}</style>
    </>
}