import React, { Component } from 'react';
import './Game.css'
import Navbar from '../Navbar/Navbar'


const API_KEY = 'ee3ec3d304aa87d05d8a92e45b526f4d';
const HASH = "974c38ee92752852e61d83c41972e012"

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            superheroeRandom1: false,
            superheroeRandom2: false
        }
    }

    componentDidMount = () => {
        const randomNumber1 = Math.floor(Math.random()*100)
        const randomNumber2 = Math.floor(Math.random()*100)
        fetch(`https://cors-anywhere.herokuapp.com/http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}&limit=100`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    superheroeRandom1: json.data.results[randomNumber1],
                    superheroeRandom2: json.data.results[randomNumber2]
                })
            });
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.state.superheroeRandom1 !== false && this.state.superheroeRandom2 !== false ? 
                <div> 
                <img src={this.state.superheroeRandom1.thumbnail.path + "/portrait_uncanny." + this.state.superheroeRandom1.thumbnail.extension} alt=""/> 
                <p>{this.state.superheroeRandom1.name}</p>
                <img src={this.state.superheroeRandom2.thumbnail.path + "/portrait_uncanny." + this.state.superheroeRandom2.thumbnail.extension} alt=""/> 
                <p>{this.state.superheroeRandom2.name}</p>
                </div> : <p>Loading...</p> }
                
                </div>
        )
    }
}

export default Game;

/* <button onClick={() => this.randomSuperheroe()}>RANDOM</button>*/