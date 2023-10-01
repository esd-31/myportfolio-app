import React from "react";
import "../sass/header.scss";
import { Link } from "react-router-dom";


const Header = () => {

    return(
        <header className="header-container">
            <header className="header-content">
                <div className="header-title">
                    <h1>Eduard.dev</h1>
                </div>
                <div className="header-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </header>
        </header>
    )
}

export default Header;