import { useState, useEffect } from "react";

const NavButton = ({clicked, label, scrollTo, setClicked}) => {

    const scroll = () => {
        const section = document.querySelector( `.${scrollTo}` );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        setClicked(clicked);
    };

    return <>
        <button className='navButton-container' onClick={scroll} style={{
            color: clicked === 'Coding Projects' ? 'white' : 'black',
            transition: '0.5s'
        }}>
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
            .home-btn {
                font-style: italic;
            }
        
        `}</style>
    </>
}

export const Navbar = ({pageYOffset}) => {

    const [clicked, setClicked] = useState('');

    useEffect(() => {
        console.log(pageYOffset);
        labels.map((val) => {
            if (val.pageYOffsetStart < pageYOffset && val.pageYOffsetEnd > pageYOffset)
            {
                setClicked(val.label)
            }
        })

        if (pageYOffset < 1000){
            setClicked(null)
        }

    }, [pageYOffset]);

    const labels = [
        {
            label: 'Say hi! ',
            scrollTo: 'aboutMe-container',
            pageYOffsetStart: 1115,
            pageYOffsetEnd: 1699
        },        
        {
            label: 'Work Experience',
            scrollTo: 'experience-container',
            pageYOffsetStart: 1700,
            pageYOffsetEnd: 2424
        },
        {
            label: 'Coding Projects',
            scrollTo: 'Projects-container',
            pageYOffsetStart: 2424,
            pageYOffsetEnd: 2972
        },
        {
            label: 'Awards & Competitions',
            scrollTo: 'awards-container',
            pageYOffsetStart: 2972,
            pageYOffsetEnd: 3415
        },
    ]

    return <>
        <div className='navbar-container' 
            style={{
                background: clicked === 'Coding Projects' ? 'black' : 'white', 
            }}>
            {
                labels.map(val => 
                    <NavButton 
                        label={val.label} 
                        scrollTo={val.scrollTo} 
                        clicked={clicked} 
                        setClicked={setClicked} 
                    />)
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
                z-index: 100;
            }
        `}</style>

    </>
}