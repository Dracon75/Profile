import React from 'react'
import './footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2 className="footer-link-title">Social Media</h2>
                        <a href='https://www.linkedin.com/in/nathaniel-northrop/'>Linkedin</a>
                        <a href='https://github.com/Dracon75'>GitHub</a>
                        <a href='./images/project-screenshots/resume2021.pdf'>Resume</a>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2 className="footer-link-title">Contact</h2>
                        <h3>nanorth75@gmail.com</h3>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Footer;
