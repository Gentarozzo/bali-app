import React, { Component } from 'react';
import './App.css';
import Dati from './components/dati';
import Cure from './components/cure';
import Cibo from './components/cibo';
import Svago from './components/svago';
import NavBar from './components/navBar';
import Footer from './components/footer';
import BottoneNav from './components/bottoneNav';
import Notes from './components/notes';
import base from "./base";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      classSchede:"schedaClass",
      infoSchede:"infoClass",
      inforRow:"rowClass",
      annoNascita:2018,
      meseNascita:3,
      giornoNascita:9,
      cibo:"",
      ciboGrammi: "",
      ciboDolci : "",
      giocoNome : "",
      giocoPass : "",
      giocoAmici : "",
      cureVet: "" ,
      medVet: "",
      paraVet: "",
      notes: "test di scrittura"
    }
    }

  componentDidMount(){
    //gestione input
    let noInp = document.querySelectorAll("input");
    noInp.forEach(function(element){
      element.addEventListener("click", this.clickDelete)
      }.bind(this));
      
      //gestione pulsanti
      let bottone = document.querySelector(".bottoneNav");
      bottone.addEventListener("click",buttons)
      bottone.addEventListener("mouseover",buttons)
      function buttons(){
        document.querySelector(".bottoneHome").style.display = "block";
        document.querySelector(".bottoneNote").style.display = "block";  
      }
      bottone.addEventListener("mouseout", closeButtons);
      function closeButtons(){
        document.querySelector(".bottoneHome").style.display = "none";
        document.querySelector(".bottoneNote").style.display = "none";   
      }
      
      //gestione note/home

      //appare note
        let note = document.querySelector(".bottoneNote");
        note.addEventListener("click",notes)
        function notes(){
            document.querySelector(".appContainer").style.marginLeft = '-100%';
            document.querySelector(".appContainer").style.opacity = 0;
            document.querySelector(".navBar").style.opacity = 0;
            //aspetta fine animazione
            document.querySelector(".noteContainer").style.display = "flex";
            setTimeout(() => {
              document.querySelector(".appContainer").style.display = "none"  
              document.querySelector(".noteContainer").style.opacity = 1}, 500);
          }
      //riporta Home visibile
        let home = document.querySelector(".bottoneHome");
        home.addEventListener("click",homeBack)
        function homeBack(){
              document.querySelector(".appContainer").style.display = "grid";
            //riappare home... svanisce note
            document.querySelector(".noteContainer").style.opacity = 0;
            setTimeout(() => {
              document.querySelector(".navBar").style.opacity = 1;
              document.querySelector(".appContainer").style.marginLeft = '0px';
              document.querySelector(".appContainer").style.opacity = 1;
              document.querySelector(".noteContainer").style.display = "none";}, 300);
        }

      //gestione Firebase
          base.syncState(`cibo ${this.state.cibo}`, {
            context:this,
            state: "cibo"
          });
          base.syncState(`ciboGrammi ${this.state.ciboGrammi}`, {
            context:this,
            state: "ciboGrammi"
          });
          base.syncState(`ciboDolci ${this.state.ciboDolci}`, {
            context:this,
            state: "ciboDolci"
          });
          base.syncState(`giocoNome ${this.state.giocoNome}`, {
            context:this,
            state: "giocoNome"
          });
          base.syncState(`giocoPass ${this.state.giocoPass}`, {
            context:this,
            state: "giocoPass"
          });
          base.syncState(`giocoAmici ${this.state.giocoAmici}`, {
            context:this,
            state: "giocoAmici"
          });
          base.syncState(`cureVet ${this.state.cureVet}`, {
            context:this,
            state: "cureVet"
          });
          base.syncState(`medVet ${this.state.medVet}`, {
            context:this,
            state: "medVet"
          });
          base.syncState(`paraVet ${this.state.paraVet}`, {
            context:this,
            state: "paraVet"
          });
          base.syncState(`ciboGrammi ${this.state.ciboGrammi}`, {
            context:this,
            state: "ciboGrammi"
          });
           this.ref = base.syncState(`notes ${this.state.notes}`, {
                        context:this,
                        state: "notes"
                      });
        const notesCleaning = document.querySelector(".notesCleaning").addEventListener("click",() =>{
            document.querySelector(".noteArea").value = "";
        })                 
      }
 
  clickDelete = (e) =>{
    e.target.value="";
    }   

  calcoloAnni = (anno = 2018,mese = 3,giorno = 9) => {
      let today = new Date();
      let months, years;
        months = ((today.getFullYear() - anno) * 12) + 1;
        years = (today.getFullYear() - anno)
        months -= mese;
        months += today.getMonth();
        return months <= 0 ? 0 : giorno >= 9 ? months + " mesi" : months - 1 + " mesi" ; 
    }

   handleChange = (key) => {
        return function (e) {
          var state = {};
          state[key] = e.target.value;
          this.setState(state);
        }.bind(this);
      }

  render() {
    return (
      <div className="App">
      <BottoneNav />
        <header className="App-header">
          <h1 id="topMain" className="App-title">BaliApp</h1>
          <NavBar />
        </header>
        <div className="appContainer">
          <Dati età = {this.calcoloAnni()} class={this.state.classSchede}  infoClass={this.state.infoSchede} rowClass={this.state.inforRow} />
          <Cure
          medVet={this.state.medVet}
          paraVet={this.state.paraVet}
          cureVet={this.state.cureVet}
          funcValore={this.handleChange} 
          class={this.state.classSchede}  
          infoClass={this.state.infoSchede} 
          rowClass={this.state.inforRow} />
          <Cibo
          delete={this.clickDelete}
          ciboGrammiValue={this.state.ciboGrammi}
          ciboValue={this.state.cibo}
          ciboDolci={this.state.ciboDolci} 
          funcValore={this.handleChange} 
          class={this.state.classSchede}  
          infoClass={this.state.infoSchede} 
          rowClass={this.state.inforRow} />
          <Svago
          giocoAmici={this.state.giocoAmici}
          giocoPass={this.state.giocoPass}
          giocoNome={this.state.giocoNome}
          funcValore={this.handleChange} 
          class={this.state.classSchede} 
          infoClass={this.state.infoSchede} 
          rowClass={this.state.inforRow} />
        </div>
        <div className="noteContainer">
          <Notes 
          notes={this.state.notes} 
          funcValore={this.handleChange}
          />
        </div>
        <Footer /> 
      </div>
    );
  }
}

export default App;
