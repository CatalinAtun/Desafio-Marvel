import React, { Component } from 'react';
import './Game.css'
import Navbar from '../Navbar/Navbar'


const API_KEY = 'ee3ec3d304aa87d05d8a92e45b526f4d';
const HASH = "974c38ee92752852e61d83c41972e012"

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            superheroeRandom: []
        }
    }

    componentDidMount = () => {
        fetch(`https://cors-anywhere.herokuapp.com/http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}&limit=100`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    ...this.state,
                    superheroeRandom: json.data.results
                })
                //console.log('fetch 2: ' + this.state.superheroeRandom[0].name)
            });
    }

    render() {
        
        const mapSuperheroes = this.state.superheroeRandom.map((item) => {
            return (item.name)
        })

        const randomNumber = Math.floor(Math.random()*mapSuperheroes.length)
        return (
            <div>
                <Navbar />
                {randomNumber}
                </div>
        )
    }
}

export default Game;

/* <button onClick={() => this.randomSuperheroe()}>RANDOM</button>*/