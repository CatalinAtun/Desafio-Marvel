import React, { Component } from 'react';
import marvel from '../../images/marvel.png';
import './Navbar.css'

import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <section>
                <header className="principalHeader"><img src={marvel} alt="logo" className="logo" key="" /></header>
                <div className="navButtons">
                    <button>CHARACTERS</button>
                    <button><Link to={{
                        pathname: `/game/`
                    }}> LET'S PLAY </Link></button>
                    </div>
            </section>
        )
    }
}

export default Navbar;