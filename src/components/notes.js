import React, { Component } from 'react';


const Notes = (props) => {
            return(
                    <div >
                    <h1 id="testoNote">Le nostre note 📋</h1>
                    <p id="cleanNote"><button class="notesCleaning">clean notes 🚿</button></p>
                    <textarea value={props.notes} className="noteArea" onChange={props.funcValore("notes")}>    
                    </textarea> 
                    </div>
            )
            }    

export default Notes;