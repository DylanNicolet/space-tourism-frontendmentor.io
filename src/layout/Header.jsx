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
            <img src={logo} alt="logo of Space Tourisme" className="header__logo"/>

            {/* Hamburger button */}
            <button className="hamburger-button" onClick={handleOpenNav} aria-label="Open menu">
                <img src={iconHamburger} alt="" />
            </button>

            {/* Mobile navigation */}
            {navOpen &&
                <nav className="nav-mobile">
                    <button className="nav-mobile__close-button" onClick={handleCloseNav} aria-label="Close menu">
                        <img src={iconClose} alt="" />
                    </button>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={() => setNavOpen(false)} end>
                                <b aria-hidden="true">00</b> 
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="destination"  onClick={() => setNavOpen(false)}>
                                <b aria-hidden="true">01</b> 
                                DESTINATION
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="crew" onClick={() => setNavOpen(false)}>
                                <b aria-hidden="true">02</b> 
                                CREW
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="technology" onClick={() => setNavOpen(false)}>
                                <b aria-hidden="true">03</b> 
                                TECHNOLOGY
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            }

            {/* Decorative line for the desktop navigation */}
            <div className="nav-desktop__decorative-line" aria-hidden="true"></div>

            {/* Desktop navigation */}
            <nav className="nav-tablet">
                <ul>
                    <li>
                        <NavLink to="/" style={({ isActive }) => isActive? activeStyle : undefined} end>
                            <b className="nav-tablet__numbers">00</b>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="destination" style={({ isActive }) => isActive? activeStyle : undefined}>
                            <b className="nav-tablet__numbers">01</b>
                            DESTINATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="crew" style={({ isActive }) => isActive? activeStyle : undefined}>
                            <b className="nav-tablet__numbers">02</b>
                            CREW
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="technology" style={({ isActive }) => isActive? activeStyle : undefined}>
                            <b className="nav-tablet__numbers">03</b>
                            TECHNOLOGY
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}