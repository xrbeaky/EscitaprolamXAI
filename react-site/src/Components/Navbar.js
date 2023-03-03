import React, {useEffect, useState} from "react"
import logo from '../react-logo.png';
import MyContext from './MyContext';
import {Link, useLinkClickHandler} from 'react-router-dom';

export default function Navbar(props){
    useEffect(() => {
        const navbarContainer = document.querySelector(".navbar-container");
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 0) {
            navbarContainer.classList.add("sticky");
          } else {
            navbarContainer.classList.remove("sticky");
          }
        });
      }, []);


    return(
        <div className = "navbar-container">
            <nav className = "nav">
                <img className = "nav-logo" src={logo}></img>
                <h3 className = "nav-logo_text">Escitalopram Remission Predictor</h3>
                <ul className = "nav-buttons">
                    <NavButton button = "true" path = "/" text = "Input"/>
                    <NavButton button = {!props.buttonsActive} path = "/results" text = "Results"/>
                    <NavButton button = {!props.buttonsActive} path = "/explanation" text = "Why?"/>
                </ul>
            </nav>
        </div>
    );
}

function NavButton(props){
    return(
        <Link className = {props.button ? "link-button":"link-button-off"} to={props.button ? props.path : "#"}>{props.text}</Link>
    )
}