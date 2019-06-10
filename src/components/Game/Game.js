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
            numberOfRounds: ""
        }
    }

    // Llamada a API. Devuelve dos superhéroes aleatorios los cuales son guardados en dos estados
    componentDidMount = () => {
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
    }

    // Guarda el valor ingresado en un estado. parseInt se asegura de que solo se escriban números en el input. Si se escribe una letra arrojará NaN y se deberá refrescar la página para quitarlo
    rounds = (e) => {
        this.setState({
            ...this.state,
            numberOfRounds: parseInt(e.target.value)
        })
    }

    // Itera el número de veces que se ingresa en el input. Por cara iteración se evalúa si un número aleatorio es par o impar. Si es par cara gana 1 y si es impar sello gana 1. Al finalizar las iteraciones gana la variable con valor más alto
    game = () => {
        let cara = 0;
        let sello = 0;
        for (let i = 0; i < this.state.numberOfRounds; i++) {
            let random = Math.floor(Math.random() * 100)
            //console.log(random)
            if (random % 2 === 0) {
                cara++
                //console.log('cara ' + cara)
            } else {
                sello++
                //console.log('sello ' + sello)
            }
        }

        //console.log(this.state.numberOfRounds + '1 '+cara + '2 '+sello)

        if (cara < sello) {
            alert("Gana 2")
        } if (cara > sello) {
            alert("Gana 1")
        } if (cara === sello) {
            alert("Empate")
        }
    }

    render() {
        return (
            <div>
                <section>
                    <Navbar />
                    <img alt="" className="carruselFight" src={carruselfight} />
                    <div className="navUnderCarrusel"></div>
                </section>
                <div className="roundsDiv">
                    <h1 className="h1Instruccions">INSTRUCCIONS</h1>
                    <p>1. Type a number on ‘’Rounds’’ box <br></br>
                    2. Click on FIGHT!<br></br>
                    3. The system will choose random numbers <br></br>
                    (the number you introduce are the quantity of random numbers)<br></br>
                    4. If the random name is pair, Player 1 win 1 point, if the random name<br></br>
                    is odd, Player 2 win 1 point<br></br>
                    5. The player with more points win!</p> 
                    <input type="text" name="rounds" placeholder="Rounds" onChange={this.rounds} value={this.state.numberOfRounds}></input>
                    <button onClick={this.game}>FIGHT!</button>
                </div>
                {this.state.superheroeRandom1 !== false && this.state.superheroeRandom2 !== false ?
                    <div className="superheroesFight">
                        <div className="fighterCard">
                            <img alt="" className="fighter" src={this.state.superheroeRandom1.thumbnail.path + "/portrait_uncanny." + this.state.superheroeRandom1.thumbnail.extension} alt="" />
                            <p className="pPlayer1">{this.state.superheroeRandom1.name}</p>
                        </div>
                        <div className="fighterCard">
                            <img alt="" className="fighter" src={this.state.superheroeRandom2.thumbnail.path + "/portrait_uncanny." + this.state.superheroeRandom2.thumbnail.extension} alt="" />
                            <p className="pPlayer2">{this.state.superheroeRandom2.name}</p>
                        </div>
                    </div> : <p>Loading...</p>}

                    <footer className="footer-info"><p>Data provided by Marvel. © 2019 MARVEL</p></footer>
            </div>
        )
    }
}

export default Game;