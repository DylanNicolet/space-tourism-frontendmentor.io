import React from "react";
import logo from "../assets/shared/logo.svg"
import iconHamburger from "../assets/shared/icon-hamburger.svg"
import iconClose from "../assets/shared/icon-close.svg"
import { NavLink } from "react-router-dom";

export default function Header() {
    const [navOpen, setNavOpen] = React.useState(false)

    function handleOpenNav() {
        setNavOpen(true)
    }

    function handleCloseNav() {
        setNavOpen(false)
    }

    const activeStyle = {
        color: "$color-tertiary",
        borderBottom: "4px solid white"
    }

    return (
        <header className="header">
            <img src={logo} alt="logo" className="header__logo"/>

            {/* Hamburger button */}
            <button className="hamburger-button" onClick={handleOpenNav} >
                <img src={iconHamburger} alt="" />
            </button>

            {/* Mobile navigation */}
            {navOpen &&
                <nav className="nav-mobile">
                    <button className="nav-mobile__close-button" onClick={handleCloseNav}>
                        <img src={iconClose} alt="" />
                    </button>
                    <ul>
                        <NavLink to="/" end><b>00</b> HOME</NavLink>
                        <NavLink to="destination" ><b>01</b> DESTINATION</NavLink>
                        <NavLink to="crew"><b>02</b> CREW</NavLink>
                        <NavLink to="technology"><b>03</b> TECHNOLOGY</NavLink>
                    </ul>
                </nav>
            }

            {/* Decorative line for the desktop navigation */}
            <div className="nav-desktop__decorative-line"></div>

            {/* Desktop navigation */}
            <nav className="nav-tablet">
                <ul>
                    <NavLink to="/" style={({ isActive }) => isActive? activeStyle : undefined} end>
                        <b className="nav-tablet__numbers">00</b>
                        HOME
                    </NavLink>
                    <NavLink to="destination" style={({ isActive }) => isActive? activeStyle : undefined}>
                        <b className="nav-tablet__numbers">01</b>
                        DESTINATION
                    </NavLink>
                    <NavLink to="crew" style={({ isActive }) => isActive? activeStyle : undefined}>
                        <b className="nav-tablet__numbers">02</b>
                        CREW
                    </NavLink>
                    <NavLink to="technology" style={({ isActive }) => isActive? activeStyle : undefined}>
                        <b className="nav-tablet__numbers">03</b>
                        TECHNOLOGY
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}