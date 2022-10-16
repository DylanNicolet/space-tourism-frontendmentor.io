import React from "react";
import database from "../database.json";

export default function Crew(){
    //All crew data is stored in  database.json
    let crewData = database.crewData

    const [currentCrew, setCurrentCrew] = React.useState(crewData[0])

    //sets the currentCrew state to a user selected crew
    function handleCrewChange(e){
        let selectedCrew = crewData.find(crew => {return crew.crewRole.toLowerCase() === e.target.className.toLowerCase()})
        setCurrentCrew(selectedCrew)
    }

    //Map over each crew in databse to create a crew navigation system
    const navigation = crewData.map((crew, index) =>(
        <button 
            id={crew.crewRole.toLowerCase() === currentCrew.crewRole.toLowerCase()? "crew-nav-button--active" : undefined} //Defines which button should be active
            className={crew.crewRole} //Adds the role as className for handleCrewChange() to use
            onClick={e => handleCrewChange(e)}
            key={index}>
        </button>
    ))

    return(
        <section className="crew">
            <p className="crew__page-title"><b>02</b>MEET YOUR CREW</p>

            <section className="crew__image-container">
                <img src={currentCrew.crewImage} alt="" className="crew__image"/>
            </section>
            

            <section className="crew__navigation-container">
                {navigation}
            </section>

            <h2 className="crew__role">{currentCrew.crewRole}</h2>

            <h1 className="crew__name">{currentCrew.crewName}</h1>

            <p className="crew__description">{currentCrew.crewDescription}</p>
        </section>
    )
}