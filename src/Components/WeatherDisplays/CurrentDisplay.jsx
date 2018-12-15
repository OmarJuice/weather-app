import React, { Component } from 'react';
import Skycons from 'react-skycons'
import moment from 'moment-timezone'
const getCompassDirection = (deg) => {

    let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    return arr[(deg / 22.5 + .5) % 16 | 0]
}

class CurrentDisplay extends Component {

    componentDidMount() {
        // console.log(this.props.weather)
        // console.log(this.props.location);
    }

    render() {
        let time = moment.tz(this.props.weather.time * 1000, this.props.timezone).format('h:mm a')
        let windBearing = getCompassDirection(this.props.weather.windBearing)
        let icon = this.props.weather.icon.toUpperCase().replace(/-/g, '_')


        return (
            <div className="columns is-centered is-multiline is-mobile weather-display has-text-light">
                <div id="current-time" className="column is-full has-text-centered TWBold title is-4 has-text-light">{time}</div>
                <div id="location" className="column is-full">
                    <h1 className="title is-4 has-text-centered TWBold has-text-light">{this.props.location}</h1>
                </div>
                <div className="column is-half has-text-centered">

                    <h1 className="title is-1 is-size-3-mobile TWBold has-text-light">{this.props.weather.temperature | 0}°F</h1>
                    <p className="is-size-5 is-size-7-mobile TWBold">Feels Like: {this.props.weather.apparentTemperature | 0}°F</p>
                </div>
                <div className="column is-half has-text-centered large-skycon">
                    <Skycons
                        color='white'
                        icon={icon}
                        autoplay={true}
                    /></div>
                <div id="summary" className="column is-full has-text-centered TWBold">
                    <p className="is-size-4 is-size-6-mobile">{this.props.weather.summary}
                    </p>
                </div>
                <div className="column is-half has-text-centered TWBold">
                    <p className="is-size-4 is-size-6-mobile">Precipitation
                    <br className="buffer" />
                        <span className="icon"><i className="fas fa-umbrella"></i></span>
                        {this.props.weather.precipProbability}%
                    </p>
                </div>
                <div className="column is-half has-text-centered TWBold">
                    <p className="is-size-4 is-size-6-mobile">Humidity
                    <br className="buffer" />
                        <span className="icon"><i className="fas fa-tint"></i></span>
                        {this.props.weather.humidity}
                    </p>
                </div>
                <div className="column is-half has-text-centered TWBold">
                    <p className="is-size-4 is-size-6-mobile">
                        <span className="icon"><i className="fas fa-wind"></i></span>
                        {this.props.weather.windSpeed}mph
                        <br className="buffer" />
                        <span className="icon"><i className="fas fa-compass"></i></span>
                        {windBearing}
                    </p>
                </div>
                <div className="column is-half has-text-centered TWBold">
                    <p className="is-size-4 is-size-6-mobile">
                        UV Index
                        <br className="buffer" />
                        <span className="icon"><i className="far fa-sun"></i></span>
                        {this.props.weather.uvIndex}
                    </p>
                </div>
                <div className="column is-full has-text-centered">
                    <p className="is-size-6 TWBold">Powered by <a href="https://www.mapbox.com/">MapBox</a> and  <a href="https://darksky.net/dev">DarkSky</a></p>
                </div>

            </div >
        );
    }
}

export default CurrentDisplay;
