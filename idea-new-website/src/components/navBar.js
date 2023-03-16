import { useState } from "react";

const NavButton = ({clicked, label, scrollTo, setClicked}) => {

    const scroll = () => {
        const section = document.querySelector( `.${scrollTo}` );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        setClicked(label);
    };

    return <>
        <button className='navButton-container' onClick={scroll}>
            <p style={{fontWeight: clicked === label ? 'bold' : 'normal'}}>{label}</p>
        </button>
        <style jsx>{`
            .navButton-container {
                outline: none;
                background: none;
                border: none;
                font-size: 18px;
                padding: 2px 20px;
            }
            .navButton-container:hover {
                cursor: pointer;
                transform: translateY(-2px);
            }
        
        `}</style>
    </>
}

export const Navbar = () => {

    const [clicked, setClicked] = useState('');

    const labels = [
        {
            label: 'Say hi! ',
            scrollTo: 'aboutMe-container'
        },        
        {
            label: 'My Values',
            scrollTo: 'banner-container',
        },
        {
            label: 'Work Experience',
            scrollTo: 'experience-container'
        },
        {
            label: 'Coding Projects',
            scrollTo: 'Projects-container'
        },
        {
            label: 'Awards & Competitions',
            scrollTo: 'awards-container'
        },
    ]

    return <>
        <div className='navbar-container'>
            {
                labels.map(val => <NavButton label={val.label} scrollTo={val.scrollTo} clicked={clicked} setClicked={setClicked}/>)
            }
        </div>
        <style jsx>{`
            .navbar-container {
                flex: 1;
                display: flex;
                position: sticky;
                top: 0;
                background-color: white;
                padding: 2px 20px;
            }
        `}</style>

    </>
}