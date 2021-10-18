import React from 'react';
import '../App.css';
import './about.css';

function About() {
    return (
        <>
            <div class="about-container">
                <div class="about-hero-container">
                    <img src="/images/Me.jpg" class="about-img-me" />
                    <div class="about-hero-text">
                        <h1>ABOUT ME</h1>
                        <p> Hi, I am Nathaniel Northrop.
                            I am a junior full stack web developer with an intrest in computer science and software development.
                            I also have an educational background in environmental studies and am an advocate for the good stewardship
                            of the environment as well as in all areas of life.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;