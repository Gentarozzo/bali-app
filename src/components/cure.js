import React, { Component } from 'react';

const Cure = (props) => {
           return(
                <div id="cure" className = {props.class}>
                    <div className={props.infoClass}>
                    <div className={props.rowClass}>
                        <p className="leftText">Il vet mi aspetta il</p>
                        <input placeholder="😰" value={props.cureVet} onChange={props.funcValore("cureVet")}/>
                    </div>
                    <div className={props.rowClass}>
                        <p className="leftText">Quali medicine prendo</p>
                        <input placeholder="💊" value={props.medVet} onChange={props.funcValore("medVet")}/>
                    </div>
                    <div className={props.rowClass}>
                        <p className="leftText">Quando prendo l'antiparassitario</p>
                        <input placeholder="🐜" value={props.paraVet} onChange={props.funcValore("paraVet")}/>
                    </div>
                     </div>
                </div>
           )    
} 

export default Cure;