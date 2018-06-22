import React, { Component } from 'react';

const Footer = (props) => {
           return(
                <div className="footerBar">
                    <div>
                        <p>Developed with 💜 By <strong className="linkeLink">
                        <a target="_blank" href="https://www.linkedin.com/in/fabio-russo-b3182614b/">FaB</a>
                        </strong>
                        </p>
                    </div>
                    <div className="technologies">
                        <img src="reactLogo_mini.png"/> 
                        <img src="githubLogo_mini.png"/> 
                        <img src="firebase_mini.png"/>
                    </div>
                </div>
           )    
} 

export default Footer;