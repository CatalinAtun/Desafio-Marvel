import React, { Component } from 'react';

const API_KEY = '139853e75bfe04a8b492968608147a1a';

class Info extends Component {
    constructor() {
        super()
        this.state = {
            showInfo: false
        }
    }

    componentDidMount = () => {
        const id = this.props.location.state.info;
        fetch(`http://gateway.marvel.com/v1/public/characters/${id}?&ts=1&apikey=${API_KEY}&hash=07d6647c6490ca8893a4ef6d7a666c9b`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                showInfo: json.data.results[0]
            })
            console.log('fetch 2: ' + this.state.showInfo.thumbnail.path + '/detail.' + this.state.showInfo.thumbnail.extension)
        })
    }

    render() {
        console.log(this.state.showInfo.thumbnail)
        return (
            <div>
                {this.state.showInfo !== false ? 
                    <div>
                        <img src={this.state.showInfo.thumbnail.path + '/portrait_fantastic.' + this.state.showInfo.thumbnail.extension} alt="" key={this.state.showInfo.id}/>
                        <p>{this.state.showInfo.name}</p>
                    </div>
                    : <p>Loading...</p>}
                <p></p>
            </div>
        )
    }
}

export default Info;

//<img className="imgAlone" src={this.state.showInfo.results.thumbnail.path} />
//<img src={this.state.showInfo.thumbnail.path + '/portrait_fantastic.' + this.state.showInfo.extension} alt="" key={this.state.showInfo.id}/>