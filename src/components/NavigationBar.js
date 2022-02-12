import React, { useEffect, useState } from 'react';
import {Link} from 'react-scroll';
import { Link as Linking, useLocation } from 'react-router-dom';


export default function NavigationBar() {

    const [path, setPath] = useState(window.location.href.split('/'));
    const location = useLocation();

    useEffect(() => {
        setPath(window.location.href.split('/'));
    }, [location]);

    return <>
        <div class="navbar-container">
            {
                path[ path.length - 1] === 'IndividualProject' ?
                    <Linking to='/'>
                        <h1 className="navbar-logo">Idea</h1>
                    </Linking> : <Link to="home-container" smooth={true} class="navbar-logo">Idea</Link>
            }
            <div class="navbar-links">
                <Link to="footer-container" smooth={true} class="links">
                    <p>Contact</p>
                </Link>
            </div>
        </div>
        <style jsx>{`
            a {
                text-decoration: none;
                color: black;
            }
            .link-label {
                font-size: 16px;
            }
            .navbar-container {
                height: 70px;
                width: 100vw;
                background-color: white;
                box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
                display: flex;
                flex-direction: row;
                position: sticky;
                top: 0;
                z-index: 1000;
            }

            .navbar-links {
                right: 0;
                width: 60vw;
                height: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                padding-right: 50px;
            }

            .navbar-logo {
                right: 0;
                width: 40vw;
                font-size: 30px;
                padding-left: 40px;
                display: flex;
                align-items: center;
                font-weight: 600;
            }

            .navbar-logo:hover {
                cursor: pointer;
            }

            .links {
                width: 100px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            .links:hover {
                cursor: pointer;
            }

            .links:active {
                color: pink;
            }

        `}</style>
    </>
}