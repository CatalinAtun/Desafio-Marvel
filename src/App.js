import React, { Component } from 'react';
import './App.css';
import marvel from './images/marvel.png';
import carrusel from './images/carrusel.jpg';
import button from './images/button.png';

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <header className="principalHeader"><img src={marvel} alt="logo" className="logo" /></header>
          <navbar className="navButtons"><button>CHARACTERS</button><button>LET'S PLAY</button></navbar>
        </section>
        
        <img src={carrusel} alt="logo" className="carrusel" />
        <div className="navUnderCarrusel"></div>
        <img src={button} alt="logo" className="characters" />
      </div>
    )
  }
};

export default App;
