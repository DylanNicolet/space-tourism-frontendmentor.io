import React from "react";
import database from "../database.json";

export default function Destination(){
    //All planet data is stored in database.json
    let planetData = database.planetData

    const [currentPlanet, setCurrentPlanet] = React.useState(planetData[0])

    //sets the currentPlanet state to a user selected planet
    function handlePlanetChange(e){
        let selectedPlanet = planetData.find(planet => {return planet.planetName.toLowerCase() === e.target.innerHTML.toLowerCase()})
        setCurrentPlanet(selectedPlanet)
    }

    return(
        <main className="destination">
            <section className="destination__planet-image-container">
                <p><b>01</b>PICK YOUR DESTINATION:</p>
                <img src={currentPlanet.planetImage} alt={currentPlanet.planetName} />
            </section>

            <div className="destination__full-text-container">
                <section className="destination__nav-and-description-container">
                    <div className="destination__navigation-container">
                        {/* Map over each planet in databse to create a planet navigation system */}
                        {planetData.map((planet, index) =>(
                            <button id={planet.planetName.toLowerCase() === currentPlanet.planetName.toLowerCase()? "destination-nav-button--active" : undefined} onClick={e => handlePlanetChange(e)} key={index}>{planet.planetName}</button>
                        ))}
                    </div>

                    <h1>{currentPlanet.planetName}</h1>
                    <p className="destination__description-text">{currentPlanet.planetDescription}</p>
                    <div className="destination__decorative-line"></div>
                </section>

                <section className="destination__numerical-data-container">
                    <div className="destination__distance">
                        <p>AVG DISTANCE</p>
                        <h2>{currentPlanet.planetDistance}</h2>
                    </div>
                    <div className="destination__travel-time">
                        <p>EST. TRAVEL TIME</p>
                        <h2>{currentPlanet.planetTravelTime}</h2>
                    </div>
                </section>
            </div>
        </main>
    )
}