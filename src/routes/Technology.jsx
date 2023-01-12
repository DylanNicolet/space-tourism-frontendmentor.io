import React from "react";
import database from "../database.json";
import { useSelector } from "react-redux";

export default function Technology(){
    //All technology data is stored in database.json
    let technologyData = database.technologyData

    const [currentTechnology, setCurrentTechnology] = React.useState(technologyData[0])

    //sets the currentTechnology state to a user selected technology
    function handleTechnologyChange(e){
        let selectedTechnology = technologyData.find(technology => {return technology.technologyTitle.toLocaleLowerCase() === e.target.className.toLocaleLowerCase()})
        setCurrentTechnology(selectedTechnology)
    }

    //Map over each technology in database to create a technology navigation system
    let navigation = technologyData.map((technology, index) =>(
        <button
            id={technology.technologyTitle.toLocaleLowerCase() === currentTechnology.technologyTitle.toLocaleLowerCase()? "technology-nav-button--active" : undefined} //Defines which button should be active
            className={technology.technologyTitle} //Adds the role as className for handleCrewChange() to use
            onClick={e=> handleTechnologyChange(e)}
            key={index}
        >
            {index+1}
        </button>
    ))

    //Detect screen size for displaying correct image
    const screenWidth = useSelector((state) => state.webConfig.screenWidth)
    const desktopWidth = useSelector((state) => state.webConfig.desktopWidth)


    return(
        <section className="technology">
            <p className="technology__page-title"><b>03</b>SPACE LAUNCH 101</p>

            <section className="technology__image-container">
                <img src={screenWidth >= desktopWidth? currentTechnology.technologyImageportrait : currentTechnology.technologyImageLandscape} alt="" className="technology__image"/>
            </section>

            

            <section className="technology__navigationAndText-container">
                <section className="technology__navigation">
                    {navigation}
                </section>

                <section className="technology__text-container">
                    <h2 className="technology__secondary-title">THE TERMINOLOGY...</h2>

                    <h1 className="technology__name">{currentTechnology.technologyTitle}</h1>

                    <p className="technology__description">{currentTechnology.technologyText}</p>
                </section>
            </section>
            
        </section>
    )
}