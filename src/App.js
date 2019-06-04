import React, { Component } from 'react';
import './App.css';
import marvel from './images/marvel.png';
import carrusel from './images/carrusel.jpg';
import button from './images/button.png';

import Superheroes from './components/Superheroes/Superheroes'
//import SuperheroesInfo from './components/SuperheroesInfo/SuperheroesInfo'

const API_KEY = '139853e75bfe04a8b492968608147a1a';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      superheroes: []
    }
  }

  /*superheroeSearch = async (e) => {
    const superheroeName = e.target.elements.superheroeName.value;
    e.preventDefault();
    const api_call = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=07d6647c6490ca8893a4ef6d7a666c9b&limit=100`);

    const data = await api_call.json()
    this.setState({
      superheroes: data.data.results
    });
    console.log(this.state.superheroes)
  }*/

  componentDidMount() {
    fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=139853e75bfe04a8b492968608147a1a&hash=07d6647c6490ca8893a4ef6d7a666c9b&limit=100")
        .then(res => res.json())
        .then(json => {
            this.setState({
                superheroes: json.data.results
            })
            console.log(this.state.superheroes)
        });
}

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

        <Superheroes superheroes={this.state.superheroes}/>

      </div>
    )
  }
};

export default App;
