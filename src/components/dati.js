import React, { Component } from 'react';

const Dati = (props) => {
           return(
                <div id="dati" className = {props.class}>
                    <div className={props.infoClass}>
                        <div className={props.rowClass}>
                            <p className="leftText">Il mio nome</p>
                            <p className="rightText">Bali</p>
                        </div>
                        <div className={props.rowClass}>
                            <p className="leftText">La mia età</p>
                            <p className="rightText">{props.età}</p>
                        </div>
                        <div className={props.rowClass}>
                            <p className="leftText">La mia data di nascita</p>
                            <p className="rightText">09/03/2018</p>
                        </div>
                    </div>
                </div>
           )    
} 

export default Dati;