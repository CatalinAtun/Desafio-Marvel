import React from 'react';
import './Superheroes.css'

import { Link } from 'react-router-dom'

const Superheroes = props => (

    <section className="superheroesImg">
        {props.superheroes.map((item) => {
            return (
                <div className="charactersDiv">
                    <Link to={{
                        pathname: `/info/${item.id}`,
                        state: { info: item.id }
                    }}>
                        <div className="img">
                            <img className="imgAlone" src={item.thumbnail.path + '/portrait_fantastic.' + item.thumbnail.extension} alt="" key={item.id} />
                            <div className="superheroeName">{item.name}</div>
                        </div>
                    </Link>
                </div>
            )
        })}
    </section>
)

export default Superheroes;

/*componentDidMount() {
    fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=139853e75bfe04a8b492968608147a1a&hash=07d6647c6490ca8893a4ef6d7a666c9b&limit=100")
        .then(res => res.json())
        .then(json => {
            this.setState({
                superheroes: json.data.results
            })
            console.log(this.state.superheroes)
        });
}

return (


        <section className="superheroesImg">
            {img}
        </section>
    </div>
)
    }
)
*/
