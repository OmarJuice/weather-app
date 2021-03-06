import React, { Component } from 'react';
import Skycons from 'react-skycons'
import moment from 'moment-timezone';
import { connect } from 'react-redux';

class DailyDisplay extends Component {

    render() {

        let weatherRender = this.props.weather.data.map((day) => {
            let icon = day.icon.toUpperCase().replace(/-/g, '_')

            let time = moment(day.time * 1000).tz(this.props.timezone).format('ddd');

            return (

                <div key={time} className="is-size-4 TWBold column is-full small-skycon has-text-centered day-display">
                    {time}
                    <Skycons
                        color='white'
                        icon={icon}
                        autoplay={true}
                    />
                    <p className="temp"><span className="icon"><i className="fas fa-thermometer-full"></i></span>
                        {day.temperatureHigh | 0}°</p>
                    <p className="temp"><span className="icon"><i className="fas fa-thermometer-empty"></i></span>
                        {day.temperatureLow | 0}°</p>
                </div>

            )
        }).slice(0, 7)

        return (
            <div className="columns is-centered is-multiline is-mobile weather-display has-text-white">
                <div id="weekly-summary" className="column is-full has-text-centered" ><p className="TWBold">{this.props.weather.summary}</p></div>
                {weatherRender}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        weather: state.weather.daily,
        location: state.weather.location,
        timezone: state.weather.timezone
    }
}

export default connect(mapStateToProps, null)(DailyDisplay);
