import React, { Component } from 'react';

const Cibo = (props) => {
           return(
                <div id="cibo" className = {props.class}>
                    <div className={props.infoClass}>
                        <div className={props.rowClass}>
                            <p className="leftText">Il mio cibo</p>
                            <input placeholder="🍖" value={props.ciboValue} onChange={props.funcValore("cibo")}/>
                        </div>
                        <div className={props.rowClass}>
                            <p className="leftText">Quanto mangio al giorno</p>
                            <input placeholder="grammi"value={props.ciboGrammiValue} onChange={props.funcValore("ciboGrammi")}/>
                        </div>
                        <div className={props.rowClass}>
                            <p className="leftText">I miei "dolci"</p>
                            <input placeholder="🍬"value={props.ciboDolci} onChange={props.funcValore("ciboDolci")}/>
                        </div>
                    </div>
                </div>
           )    
} 

export default Cibo;