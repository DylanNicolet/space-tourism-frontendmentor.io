import React from "react";
import logo from "../assets/shared/logo.svg"
import hamburger from "../assets/shared/icon-hamburger.svg"

export default function Header(){
    return(
        <header>
            <img src={logo} alt="logo" className="header__logo"/>
            <button className="hamburger-menu"><img src={hamburger} alt="" /></button>
        </header>
    )
}