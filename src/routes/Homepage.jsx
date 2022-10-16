import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Homepage(){
    const screenWidth = useSelector((state) => state.webConfig.screenWidth)
    const desktopWidth = useSelector((state) => state.webConfig.desktopWidth)

    return(
        <section className="homepage">
            <section className="text-container">
                <p className="text-container__slogan">SO, YOU WANT TO TRAVEL TO</p>
                <h1 className="text-container__title">SPACE</h1>
                <p className="text-container__text">Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                </p>
            </section>

            <section className="explore-button">
                {screenWidth>=desktopWidth && <section className="explore-button__desktop-hover"></section>}
                <NavLink to={"destination"} className="explore-button__text">EXPLORE</NavLink>
            </section>
        </section> 
    )
    
}