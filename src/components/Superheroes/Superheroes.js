import React, { Component } from 'react';
import './Superheroes.css'

class Superheroes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            superheroes: []
        }
    }

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
        const img = this.state.superheroes.map(item => {
            return <div className="img"> <img  className="imgAlone" src={item.thumbnail.path + '/portrait_fantastic.' + item.thumbnail.extension} alt="" key={item.id} />
                <div className="superheroeName">{item.name}</div>
            </div>
        });

        return (
            <div className="charactersDiv"> 
            <section className="filterOrderSection">
                <input className="searchInput" placeholder="SEARCH"></input>
                <select className="selectOrder"></select>
            </section>

            <section className="superheroesImg">
                {img}
            </section>
            </div>
        )
    }
}

export default Superheroes;