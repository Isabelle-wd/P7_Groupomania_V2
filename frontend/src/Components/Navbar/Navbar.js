import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <img
                        alt="logo"
                        src= "images/icon-left-font-monochrome-black.svg"
                    />
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div> 
                    <ul className={click ? "nav-menu active" : "nav-menu" }>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                                Connexion
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
                                Inscription
                            </Link>
                        </li>
                    </ul>
                    
                </div> 
            </nav>

        </>
    )
}

export default Navbar
