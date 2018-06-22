import React, { Component } from 'react';
import './App.css';
import Dati from './components/dati';
import Cure from './components/cure';
import Cibo from './components/cibo';
import Svago from './components/svago';
import NavBar from './components/navBar';
import Footer from './components/footer';

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
      cibo:"Premiere junior",
      ciboGrammi: "320",
      ciboDolci : "Premietti",
      giocoNome : "Ranocchia",
      giocoPass : "2 volte",
      giocoAmici : "Chloe",
      cureVet: "Sabato 23" ,
      medVet: "Nessuna",
      paraVet: "Tra un mese"
    }
    }

  componentDidMount(){
    let noInp = document.querySelectorAll("input");
    console.log(noInp)
    noInp.forEach(function(element){
      element.addEventListener("click", this.clickDelete)
      }.bind(this));
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
        <header className="App-header">
          <h1 className="App-title">BaliApp</h1>
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
        <Footer /> 
      </div>
    );
  }
}

export default App;
