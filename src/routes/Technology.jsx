import React from "react";
import database from "../database.json";

export default function Technology(){
    //All technology data is stored in database.json
    let technologyData = database.technologyData

    const [currentTechnology, setCurrentTechnology] = React.useState(technologyData[0])

    //sets the currentTechnology state to a user selected technology
    function handleTechnologyChange(e) {
        let selectedTechnology = technologyData.find(technology => {return technology.technologyTitle.toLocaleLowerCase() === e.target.className.toLocaleLowerCase()})
        setCurrentTechnology(selectedTechnology)
    }

    return (
        <main className="technology">
            <p className="technology__page-title"><b aria-hidden="true">03</b>SPACE LAUNCH 101</p>

            <section className="technology__image-container">
                <picture>
                    <source srcSet={currentTechnology.technologyImageportrait} media="(width >= 1024px)"/> {/* For desktop */}
                    <img src={currentTechnology.technologyImageLandscape} alt="" className="technology__image"/> {/* Default mobile image */}
                </picture>
            </section>

            <div className="technology__navigationAndText-container">
                <section className="technology__navigation">
                    {/* Map over each technology in database to create a technology navigation system */}
                    {technologyData.map((technology, index) => (
                        <button
                            id={technology.technologyTitle.toLocaleLowerCase() === currentTechnology.technologyTitle.toLocaleLowerCase()? "technology-nav-button--active" : undefined} //Defines which button should be active
                            className={technology.technologyTitle} //Adds the role as className for handleCrewChange() to use
                            onClick={e=> handleTechnologyChange(e)}
                            key={index}
                        >
                            {index+1}
                        </button>
                    ))}
                </section>

                <section className="technology__text-container">
                    <h2 className="technology__secondary-title">THE TERMINOLOGY...</h2>
                    <h1 className="technology__name">{currentTechnology.technologyTitle}</h1>
                    <p className="technology__description">{currentTechnology.technologyText}</p>
                </section>
            </div>
        </main>
    )
}