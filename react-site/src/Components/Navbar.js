import React from "react"
import logo from '../react-logo.png';
import {Link} from 'react-router-dom';
export default function Navbar(){

    return(
        <nav className = "nav">
            <img className = "nav-logo" src={logo}></img>
            <h3 className = "nav-logo_text">Escitalopram Remission Predictor</h3>
            <ul className = "nav-buttons">
                <Link to="/">Input</Link>
                <Link to="/results">Results</Link>
                <Link to="/explanation">Why?</Link>
            </ul>
        </nav>
    );
}