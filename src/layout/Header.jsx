import React from "react";
import logo from "../assets/shared/logo.svg"
import hamburger from "../assets/shared/icon-hamburger.svg"
import iconClose from "../assets/shared/icon-close.svg"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";

export default function Header(){
    const screenWidth = useSelector((state) => state.webConfig.screenWidth)
    const desktopWidth = useSelector((state) => state.webConfig.desktopWidth)
    const tabletWidth = useSelector((state) => state.webConfig.tabletWidth)
    const [navOpen, setNavOpen] = React.useState(false)

    function handleOpenNav(){
        setNavOpen(true)
    }

    function handleCloseNav(){
        setNavOpen(false)
    }

    const activeStyle = {
        color: "$color-tertiary",
        borderBottom: "4px solid white"
    }

    return(
        <header className="header">
            <img src={logo} alt="logo" className="header__logo"/>

            {screenWidth<tabletWidth && <button className="hamburger-button" onClick={handleOpenNav} ><img src={hamburger} alt="" /></button>}
            {navOpen && screenWidth<tabletWidth? 
                <nav className="nav-mobile">
                    <button className="nav-mobile__close-button" onClick={handleCloseNav}><img src={iconClose} alt="" /></button>
                    <ul>
                        <NavLink to="/" end><b>00</b> HOME</NavLink>
                        <NavLink to="destination" ><b>01</b> DESTINATION</NavLink>
                        <NavLink to="crew"><b>02</b> CREW</NavLink>
                        <NavLink to="technology"><b>03</b> TECHNOLOGY</NavLink>
                    </ul>
                </nav> : null
            }

            {screenWidth>=desktopWidth && <section className="nav-desktop__decorative-line"></section>}

            {screenWidth>=tabletWidth &&
                <nav className="nav-tablet">
                    <ul>
                        <NavLink to="/" style={({ isActive }) => isActive? activeStyle : undefined} end>{screenWidth>=desktopWidth && <b>00</b>}HOME</NavLink>
                        <NavLink to="destination" style={({ isActive }) => isActive? activeStyle : undefined}>{screenWidth>=desktopWidth && <b>01</b>}DESTINATION</NavLink>
                        <NavLink to="crew" style={({ isActive }) => isActive? activeStyle : undefined}>{screenWidth>=desktopWidth && <b>02</b>}CREW</NavLink>
                        <NavLink to="technology" style={({ isActive }) => isActive? activeStyle : undefined}>{screenWidth>=desktopWidth && <b>03</b>}TECHNOLOGY</NavLink>
                    </ul>
                </nav>
            }
        </header>
    )
}