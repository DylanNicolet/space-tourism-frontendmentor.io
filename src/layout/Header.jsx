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
        <header>
            <img src={logo} alt="logo" className="header__logo"/>

            {screenWidth<tabletWidth && <button className="hamburger-button" onClick={handleOpenNav} ><img src={hamburger} alt="" /></button>}
            {navOpen &&
                <nav className="nav-mobile">
                    <button className="nav-mobile__close-button" onClick={handleCloseNav}><img src={iconClose} alt="" /></button>
                    <ul>
                        <NavLink><b>00</b> HOME</NavLink>
                        <NavLink><b>01</b> DESTINATION</NavLink>
                        <NavLink><b>02</b> CREW</NavLink>
                        <NavLink><b>03</b> TECHNOLOGY</NavLink>
                    </ul>
                </nav>
            }

            {screenWidth>=tabletWidth &&
                <nav className="nav-tablet">
                    <ul>
                        <NavLink to="/" style={({ isActive }) => isActive? activeStyle : undefined}>HOME</NavLink>
                        <NavLink to="destination" style={({ isActive }) => isActive? activeStyle : undefined}>DESTINATION</NavLink>
                        <NavLink to="crew" style={({ isActive }) => isActive? activeStyle : undefined}>CREW</NavLink>
                        <NavLink to="technology" style={({ isActive }) => isActive? activeStyle : undefined}>TECHNOLOGY</NavLink>
                    </ul>
                </nav>
            }
        </header>
    )
}