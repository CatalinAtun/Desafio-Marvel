import React, { Component } from 'react';
import './App.css';
import marvel from './images/marvel.png';
import carrusel from './images/carrusel.jpg';
import button from './images/button.png';

import Superheroes from './components/Superheroes/Superheroes'

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <header className="principalHeader"><img src={marvel} alt="logo" className="logo" /></header>
          <div className="navButtons"><button>CHARACTERS</button><button>LET'S PLAY</button></div>
        </section>

        <section>
          <img src={carrusel} alt="logo" className="carrusel" />
          <div className="navUnderCarrusel"></div>
        </section>

        <img src={button} alt="logo" className="characters" />

        

        <Superheroes />
      </div>
    )
  }
};

export default App;
