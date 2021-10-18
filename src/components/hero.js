import React from 'react'
import '../App.css';
import { Button } from './buttons';
import './hero.css';


function Hero() {
    return (
        <div className="hero-container">
            <video src="\videos\Floor - 899.mp4" autoPlay loop muted />
            <h1>Nathaniel Northrop</h1>
            <p>Web Developer</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>PORTFOLIO</Button>
                {/* <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>SIGNUP
                </Button> */}
            </div>
        </div>
    )
}


export default Hero;
