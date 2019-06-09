import React, { Component } from 'react';
import './Game.css'
import Navbar from '../Navbar/Navbar'
import carruselfight from '../../images/carruselfight.jpg'


const API_KEY = 'ee3ec3d304aa87d05d8a92e45b526f4d';
const HASH = "974c38ee92752852e61d83c41972e012"

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            superheroeRandom1: false,
            superheroeRandom2: false,
            hp1: Math.floor(Math.random() * (100 - 1) + 1),
            hp2: Math.floor(Math.random() * (100 - 1) + 1),
            numberOfRounds: ""
        }
    }



    componentDidMount = () => {
        
    }

    rounds = (e) => {
        this.setState({
            ...this.state,
            numberOfRounds: e.target.value
        })
    }

    game = () => {
        const randomNumber1 = Math.floor(Math.random() * 100)
        const randomNumber2 = Math.floor(Math.random() * 100)
        
        fetch(`https://cors-anywhere.herokuapp.com/http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}&limit=100`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    superheroeRandom1: json.data.results[randomNumber1],
                    superheroeRandom2: json.data.results[randomNumber2],
                })
            });

        let countHp1 = 0;
        let countHp2 = 0;

            for (let i = 0; i < this.state.numberOfRounds; i++){
                countHp1 = Math.floor(Math.random() * ([i] - 15) + 1)
                countHp1 = Math.floor(Math.random() * ([i] - 10) + 1)
                console.log(countHp1)
                console.log(countHp2)
            }

        console.log(this.state.numberOfRounds)
        this.setState({
            ...this.state,
            hp1: countHp1,
            hp2: countHp2
        }) 

        if( this.state.hp1 < this.state.hp2){
            alert("gana 2")
        } else if (this.state.hp1 > this.state.hp2){
            alert("gana 1")
        } else if (this.state.hp1 === this.state.hp2){
            alert("empate")
        }
    }

    render() {
        return (
            <div>
                <section>
                    <Navbar />
                    <img className="carruselFight" src={carruselfight} />
                    <div className="navUnderCarrusel"></div>
                </section>
                <input type="text" name="rounds" placeholder="Rounds" onChange={this.rounds} value={this.state.numberOfRounds}></input>
                <button onClick={this.game}>FIGHT</button>

                {this.state.superheroeRandom1 !== false && this.state.superheroeRandom2 !== false ?
                    <div className="superheroesFight">
                        <div className="fighterCard">
                            <img className="fighter" src={this.state.superheroeRandom1.thumbnail.path + "/portrait_uncanny." + this.state.superheroeRandom1.thumbnail.extension} alt="" />
                            <p>{this.state.superheroeRandom1.name}</p>
                            {this.state.hp1 !== 0 ? <p>Power = {this.state.hp1}</p> : <p>0</p>}
                        </div>
                        <div className="fighterCard">
                            <img className="fighter" src={this.state.superheroeRandom2.thumbnail.path + "/portrait_uncanny." + this.state.superheroeRandom2.thumbnail.extension} alt="" />
                            <p>{this.state.superheroeRandom2.name}</p>
                            {this.state.hp2 !== 0 ? <p>Power = {this.state.hp2}</p> : <p>0</p>}
                        </div>
                    </div> : <p>Loading...</p>}

                <footer className="footer-info"></footer>
            </div>
        )
    }
}

export default Game;

/* <button onClick={() => this.randomSuperheroe()}>RANDOM</button>*/