import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather, fetchWeatherFromCoords, loading, locationError } from '../actions';
import Tabs from './Tabs';
import weatherBackgrounds from '../Utils/WeatherBackgrounds';
import Box from './Box';

class App extends Component {

    constructor(props) {
        super(props)
        this.input = ''
    }

    componentDidUpdate() {
        console.log('update');
    }

    handleChange = (e) => {
        e.preventDefault()
        this.input = e.target.value
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let loc = this.input
        this.input = ''
        document.getElementById('input').value = ''
        if (loc.length < 1) {
            return
        }
        this.props.loading()
        this.props.fetchWeather(loc)
    }


    handleLocation = (e) => {
        e.preventDefault()
        this.props.loading()
        window.navigator.geolocation.getCurrentPosition((pos) => {
            this.props.fetchWeatherFromCoords(pos.coords.latitude, pos.coords.longitude)
        }, (err) => {
            this.props.locationError()
        })
    }

    render() {
        //Change background rendering to be prop based
        let containerClass;

        if (this.props.icon) {
            containerClass = `columns is-centered ${weatherBackgrounds[this.props.icon.toUpperCase().replace(/-/g, '_')]}`
        } else {
            containerClass = "columns is-centered"
        }
        return (

            <div id="container" className={containerClass}>
                <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
                    <Tabs />
                    <Box>
                        <form id="search-form" action="" onSubmit={this.handleSubmit} >
                            <input id="input" className="input is-primary TW" type="text" onChange={this.handleChange} autoComplete="off" autoFocus />
                            <div className="has-text-centered">

                                <input type="submit" className="button is-success TWBold" value="Search" />
                                <button className="button is-info" onClick={this.handleLocation} disabled={this.props.disableLocation}>
                                    <span className="icon"><i className="fas fa-location-arrow"></i></span>
                                </button>
                            </div>
                        </form>
                    </Box>
                </div>
            </div >


        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        disableLocation: state.error.disableLocation,
        icon: state.weather.currently.icon
    }
}

export default connect(mapStateToProps, { fetchWeather, fetchWeatherFromCoords, loading, locationError })(App);
