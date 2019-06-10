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
