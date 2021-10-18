import React from 'react';
import NewCard from './new-card';
import "./cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Highlighted Projects!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <NewCard
                            src="images/project-screenshots/NoteTaker.png"
                            text="Note Taker"
                            label="For Notes"
                            urllabel="https://dracon75.github.io/note-taker/"
                            urltext="https://github.com/Dracon75/note-taker"

                        />
                        <NewCard
                            src="images/project-screenshots/Employee-Tracker.png"
                            text="Employee Database"
                            label="Database"
                            urllabel="https://www.youtube.com/watch?v=mF41VYsyOAw"
                            urltext="https://github.com/Dracon75/employee-tracker"

                        />
                        <NewCard
                            src="images/project-screenshots/wanderLost.png"
                            text="WanderLost"
                            label="MI Trails"
                            urllabel="https://dracon75.github.io/Project-1/"
                            urltext="https://github.com/Dracon75/Project-1"

                        />
                    </ul>
                    <ul className="cards__items">
                        <NewCard
                            src="images/project-screenshots/Capture.PNG"
                            text="Weather App"
                            label="Local Weather"
                            urllabel="https://dracon75.github.io/WeatherApp/"
                            urltext="https://github.com/Dracon75/WeatherApp"

                        />
                        <NewCard
                            src="images/project-screenshots/Tech-Blog.png"
                            text="Tech Blog"
                            label="Blog"
                            urllabel="https://dracon75.github.io/Tech-Blog/"
                            urltext="https://github.com/Dracon75/Tech-Blog"

                        />
                        <NewCard
                            src="images/scenery-river.jpg"
                            text="Coming Soon"
                            label="Website"
                            urllabel="/"
                            urltext="/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
