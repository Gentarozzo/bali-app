import React, { Component } from 'react';

const Svago = (props) => {
           return(
                <div id="svago" className = {props.class}>
                    <div className={props.infoClass}>
                        <div className={props.rowClass}>
                            <p className="leftText">Il mio gioco preferito</p>
                            <input placeholder="woof!" value={props.giocoNome} onChange={props.funcValore("giocoNome")}/>
                        </div>
                        <div className={props.rowClass}>
                            <p className="leftText">Quanto ho passeggiato questa settimana</p>
                            <input placeholder="stanca..." value={props.giocoPass} onChange={props.funcValore("giocoPass")}/>
                        </div>
                        <div className={props.rowClass}>
                            <p className="leftText">La mia amica</p>
                            <input placeholder="♥" value={props.giocoAmici} onChange={props.funcValore("giocoAmici")}/>
                        </div>
                    </div>
                </div>
           )    
} 

export default Svago;