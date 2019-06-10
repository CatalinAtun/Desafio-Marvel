import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import carruselInformation from '../../images/carruselInformation.jpg'
import './Info.css'

import { Link } from 'react-router-dom'

//const API_KEY = '139853e75bfe04a8b492968608147a1a';

const API_KEY = 'ee3ec3d304aa87d05d8a92e45b526f4d';
const HASH = "974c38ee92752852e61d83c41972e012"

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false,
            comicId: [],
            serieId: [],
            eventId: [],
            comicPerCharacter: [],
            seriePerCharacter: [],
            eventPerCharacter: [],
            displayDescription: true,
            displayComic: false,
            displaySerie: false,
            displayEvent: false,
        }
    }

    showEvents = () => {
        this.setState({
            ...this.state,
            displayComic: false,
            displaySerie: false,
            displayDescription: false,
            displayEvent: true
        })
        this.state.eventId.map((item) => {
            return (fetch(`https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/events/${item}?ts=1&apikey=${API_KEY}&hash=${HASH}`)
                .then(res => res.json())
                .then(json => {
                    let concatEvents = this.state.eventPerCharacter;
                    concatEvents.push(json)
                    this.setState({
                        ...this.state,
                        eventPerCharacter: concatEvents
                    })
                }))
        })
    }

    showSeries = () => {
        this.setState({
            ...this.state,
            displayComic: false,
            displaySerie: true,
            displayDescription: false,
            displayEvent: false
        })
        this.state.serieId.map((item) => {
            //console.log(item)
            return (fetch(`https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/series/${item}?ts=1&apikey=${API_KEY}&hash=${HASH}`)
                .then(res => res.json())
                .then(json => {
                    let concatSeries = this.state.seriePerCharacter;
                    concatSeries.push(json)
                    this.setState({
                        ...this.state,
                        seriePerCharacter: concatSeries
                    })
                }))
        })
    }

    showDescription = () => {
        this.setState({
            ...this.state,
            displayComic: false,
            displaySerie: false,
            displayDescription: true,
            displayEvent: false
        })

    }

    // Al apretarlo aparecen los comics en pantalla
    showComics = () => {
        this.setState({
            ...this.state,
            displayComic: true,
            displaySerie: false,
            displayDescription: false,
            displayEvent: false
        })
        this.state.comicId.map((item) => {
            return (fetch(`https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/comics/${item}?ts=1&apikey=${API_KEY}&hash=${HASH}`)
                .then(res => res.json())
                .then(json => {
                    let concatComics = this.state.comicPerCharacter;
                    concatComics.push(json)
                    this.setState({
                        ...this.state,
                        comicPerCharacter: concatComics
                    })
                }))
        })
    }

    componentDidMount = () => {
        const id = this.props.location.state.info;
        fetch(`https://cors-anywhere.herokuapp.com/http://gateway.marvel.com/v1/public/characters/${id}?&ts=1&apikey=${API_KEY}&hash=${HASH}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    ...this.state,
                    showInfo: json.data.results[0]
                })
                //console.log(this.state.showInfo)

                let arrayComicsIds = []
                //console.log(this.state.comics)
                if (this.state.showInfo.comics.items !== false) {
                    this.state.showInfo.comics.items.map((item) => {
                        return arrayComicsIds.push(item.resourceURI.slice(43))
                    })
                }
                this.setState({
                    ...this.state,
                    comicId: arrayComicsIds
                })

                let arraySeriesIds = []
                if (this.state.showInfo.series.items !== false) {
                    this.state.showInfo.series.items.map((item) => {
                        return arraySeriesIds.push(item.resourceURI.slice(43))
                    })
                }
                this.setState({
                    ...this.state,
                    serieId: arraySeriesIds
                })

                let arrayEventsIds = []
                if (this.state.showInfo.events.items !== false) {
                    this.state.showInfo.events.items.map((item) => {
                        return arrayEventsIds.push(item.resourceURI.slice(43))
                    })
                }
                this.setState({
                    ...this.state,
                    eventId: arrayEventsIds
                })
            }
            )
    }

    render() {
        const portadaComics = this.state.comicPerCharacter.map((item) => {
            return (<div className="coverImage">
                <img className="cover" src={item.data.results[0].thumbnail.path + "/portrait_uncanny." + item.data.results[0].thumbnail.extension} alt="" />
                <p>{item.data.results[0].title}</p> 
            </div>)
        })
        const portadaSeries = this.state.seriePerCharacter.map((item) => {
            return (<div className="coverImage">
                <img className="cover" src={item.data.results[0].thumbnail.path + "/portrait_uncanny." + item.data.results[0].thumbnail.extension} alt="" />
                <p>{item.data.results[0].title}</p> 
            </div>)
        })
        const portadaEvents = this.state.eventPerCharacter.map((item) => {
            return (<div className="coverImage">
                <img className="cover" src={item.data.results[0].thumbnail.path + "/portrait_uncanny." + item.data.results[0].thumbnail.extension} alt="" />
                <p>{item.data.results[0].title}</p> 
            </div>)
        })

        return (
            <div className="infoPage">
                <section className="sectionPhoto">
                    <Navbar />
                    <img src={carruselInformation} alt="logo" className="carruselInformation" />
                    <h1 className="nameInPhoto">{this.state.showInfo.name}</h1>
                    <div className="secondNavUnderCarrusel"></div>
                </section>
                <button className="buttonBack">
                <Link to={{
                        pathname: `/`
                    }}> BACK </Link></button>
                <section className="imgSection">
                    <div className="imageDiv">
                        {this.state.showInfo !== false ? <div>
                            <img className="superheroeImage" src={this.state.showInfo.thumbnail.path + '/portrait_uncanny.' + this.state.showInfo.thumbnail.extension} alt="" key={this.state.showInfo.id} />
                            <p className="nameP">NAME: {this.state.showInfo.name}</p> 
                            <p className="comicsP">COMICS: {this.state.showInfo.comics.available}</p>
                            <p className="seriesP">SERIES: {this.state.showInfo.series.available}</p>
                            <p className="eventsP">EVENTS: {this.state.showInfo.events.available}</p> </div> : <p>Loading...</p>}
                            
                    </div>

                    <div className="interactiveButtonsAndPhotos">
                        <div className="interactiveButtons">
                            <button className="btn-description" onClick={this.showDescription}>DESCRIPTION</button>
                            <button className="btn-comics" onClick={this.showComics}>COMICS</button>
                            <button className="btn-series" onClick={this.showSeries}>SERIES</button>
                            <button className="btn-events" onClick={this.showEvents}>EVENTS</button>
                        </div>
                        
                        {this.state.displayDescription === true ? <div>{this.state.showInfo.description !== "" ? <p>{this.state.showInfo.description}</p> : <p>Ooops, this character doesn't have a description</p>}</div> : <p></p>}
                        {this.state.displayComic === true ? <div className="testComics">{portadaComics}</div> : <p></p>}
                        {this.state.displaySerie === true ? <div className="testComics">{portadaSeries}</div> : <p></p>}
                        {this.state.displayEvent === true ? <div className="testComics">{portadaEvents}</div> : <p></p>}
                    </div>
                </section>
                <footer className="footer-info"><p>Data provided by Marvel. © 2019 MARVEL</p></footer>
            </div >
        )
    }
}
export default Info;
