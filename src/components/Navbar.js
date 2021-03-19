import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    let currentLang = props.language;
    const LANGUAGES = {
        "en": ["My Account", "Log Out"],
        "al": ["Llogaria ime", "Shkyç"]
    }
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const logout = () => {
        localStorage.removeItem("demoAppCurrentUser");
        alert("You have been logged out of your account.");
        window.location.assign("/"+currentLang+"/login");
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to={"/"+currentLang+"/search"}>
                        <div className="logo">
                            <i className='fas fa-home' />
                            RESearch
                        </div>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times":"fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu active":"nav-menu"}>
                        <li className="nav-item">
                            <Link to={"/"+currentLang+"/myaccount"} className="nav-links" onClick={closeMobileMenu}>
                                {LANGUAGES[currentLang][0]}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/en/"+window.location.href.split("/").slice(4).join()} className="nav-links" onClick={closeMobileMenu}>
                                En
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/al/"+window.location.href.split("/").slice(4).join()} className="nav-links" onClick={closeMobileMenu}>
                                Al
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={logout}>
                            {LANGUAGES[currentLang][1]}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

function HomeNavbar(props) {
    let currentLang = props.language;
    const LANGUAGES = {
        "en": ["Login", "Sign Up"],
        "al": ["Hyrja", "Regjistrohuni"]
    }

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = (language) => {
        setClick(false);
        currentLang = language;
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        <i className='fas fa-home' />
                        RESearch
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times":"fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu active":"nav-menu"}>
                    <li className="nav-item">
                            <Link to={"/en/"+window.location.href.split("/").slice(4).join()} className="nav-links" onClick={closeMobileMenu}>
                                En
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/al/"+window.location.href.split("/").slice(4).join()} className="nav-links" onClick={closeMobileMenu}>
                                Al
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"+currentLang+"/login"} className="nav-links" onClick={closeMobileMenu}>
                                {LANGUAGES[currentLang][0]}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"+currentLang+"/signup"} className="nav-links" onClick={closeMobileMenu}>
                                {LANGUAGES[currentLang][1]}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export {HomeNavbar, Navbar}