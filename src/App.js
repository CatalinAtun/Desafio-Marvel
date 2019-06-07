import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import carrusel from './images/carrusel.jpg';
import button from './images/button.png';

import Superheroes from './components/Superheroes/Superheroes'
//import SuperheroesInfo from './components/SuperheroesInfo/SuperheroesInfo'

const API_KEY = 'ee3ec3d304aa87d05d8a92e45b526f4d';
const HASH = "974c38ee92752852e61d83c41972e012"

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

  componentDidMount = () => {
    fetch(`https://cors-anywhere.herokuapp.com/http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}&limit=100`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                superheroes: json.data.results
            })
            //console.log('fetch 1: ' + this.state.superheroes[0].thumbnail.path + '/portrait_fantastic.' + this.state.superheroes[0].thumbnail.extension)
        });
}

  render() {

    return (
      <div>
        <Navbar />
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
