import React, { Component } from 'react';

const NavBar = (props) => {
           return(
                <div className="navBar">
                    <div className="buttonNav">
                        <a href="#dati">Dati</a>
                    </div>
                    <div className="buttonNav">
                        <a href="#cure">Cure</a>
                    </div>
                    <div className="buttonNav">
                        <a href="#cibo">Cibo</a>
                    </div>
                    <div className="buttonNav">
                        <a href="#svago">Svago</a>
                    </div>
                </div>
           )    
} 

export default NavBar;