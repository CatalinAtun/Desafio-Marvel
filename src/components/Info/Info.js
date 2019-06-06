import React, { Component } from 'react';

const API_KEY = '139853e75bfe04a8b492968608147a1a';

class Info extends Component {
    constructor() {
        super()
        this.state = {
            showInfo: false,
            comics: false,
            comicId: [],
            comicPerCharacter: [],
            newComics: []
        }
    }


    componentDidMount = () => {
        const id = this.props.location.state.info;
        fetch(`http://gateway.marvel.com/v1/public/characters/${id}?&ts=1&apikey=${API_KEY}&hash=07d6647c6490ca8893a4ef6d7a666c9b`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    showInfo: json.data.results[0],
                    comics: json.data.results[0].comics.items
                })


                let arrayIds = []
                //console.log(this.state.comics)
                if (this.state.comics !== false) {
                    this.state.comics.map((item) => {
                        return arrayIds.push(item.resourceURI.slice(43))
                    })
                } else {
                    console.log('estoy cargando')
                }
                this.setState({
                    ...this.state,
                    comicId: arrayIds
                })

                //console.log(this.state.comicId)
                this.state.comicId.map((item) => {
                    return (fetch(`https://gateway.marvel.com/v1/public/comics/${item}?ts=1&apikey=139853e75bfe04a8b492968608147a1a&hash=07d6647c6490ca8893a4ef6d7a666c9b`)
                        .then(res => res.json())
                        .then(json => {
                            this.setState({
                                ...this.state,
                                comicPerCharacter: json.data.results
                            })
                            //console.log(this.state.comicPerCharacter)
                        }))
                })
            }
            )
    }

    render() {
        /* let newArray = [];
        for (let i = 0; i < this.state.comicPerCharacter; i++){
            newArray.push(this.state.comicPerCharacter[0].title)
        }
        console.log(newArray)
*/
        /*this.setState({
            ...this.setState,
            newComics: newArray
        })*/

        //console.log(this.state.newComics)
        
        /*const comicsNew = this.state.comicPerCharacter.map(item => {
            console.log(item.title)
        })*/
        
        //console.log(this.props)
        return (
            <div>
                {
                    this.state.showInfo !== false ?
                        <div>
                            <img src={this.state.showInfo.thumbnail.path + '/portrait_uncanny.' + this.state.showInfo.thumbnail.extension} alt="" key={this.state.showInfo.id} />
                            <p>{this.state.showInfo.name}</p>
                        </div>
                        : <p>Loading...</p>
                }
            </div >

        )
    }
}

export default Info;

//<img className="imgAlone" src={this.state.showInfo.results.thumbnail.path} />