import React from "react";
import database from "../database.json";

export default function Destination(){
    //All planet data is stored in  database.json
    let planetData = database.planetData

    const [currentPlanet, setCurrentPlanet] = React.useState(planetData[0])

    //sets the currentPlanet state to a user selected planet
    function handlePlanetChange(e){
        let selectedPlanet = planetData.find(planet => {return planet.planetName.toLowerCase() === e.target.innerHTML.toLowerCase()})
        setCurrentPlanet(selectedPlanet)
    }

    //Map over each planet in databse to create a planet navigation system
    const navigation = planetData.map((planet, index) =>(
        <button id={planet.planetName.toLowerCase() === currentPlanet.planetName.toLowerCase()? "destination-nav-button--active" : undefined} onClick={e => handlePlanetChange(e)} key={index}>{planet.planetName}</button>
    ))

    return(
        <section className="destination">
            <section className="destination__planet-image-container">
                <p><b>01</b>PICK YOUR DESTINATION:</p>
                <img src={currentPlanet.planetImage} alt={currentPlanet.planetName} />
            </section>

            <section className="destination__full-text-container">
                <section className="destination__nav-and-description-container">
                    <section className="destination__navigation-container">
                        {navigation}
                    </section>

                    <h1>{currentPlanet.planetName}</h1>
                    <p className="destination__description-text">{currentPlanet.planetDescription}</p>
                    <section className="destination__decorative-line"></section>
                </section>

                <section className="destination__numerical-data-container">
                    <section className="destination__distance">
                        <p>AVG DISTANCE</p>
                        <h2>{currentPlanet.planetDistance}</h2>
                    </section>
                    <section className="destination__travel-time">
                        <p>EST. TRAVEL TIME</p>
                        <h2>{currentPlanet.planetTravelTime}</h2>
                    </section>
                </section>
            </section>
        </section>
    )
}