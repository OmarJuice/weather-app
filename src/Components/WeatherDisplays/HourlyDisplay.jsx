import React, { Component } from 'react';
import Skycons from 'react-skycons'
import moment from 'moment-timezone';
import { connect } from 'react-redux';
class HourlyDisplay extends Component {

    render() {

        let weatherRender = this.props.weather.data.map((hour, i) => {
            if (i > 23) {
                return null
            }
            let icon = hour.icon.toUpperCase().replace(/-/g, '_')
            let time = moment(hour.time * 1000).tz(this.props.timezone).format('ha');
            return (
                <div key={time} className="column is-one-quarter small-skycon hour has-text-light">
                    <div className="is-size-4 TWBold">{time}</div>

                    <Skycons
                        color='white'
                        icon={icon}
                        autoplay={true}
                    />
                    <div className="is-size-4 TW">{hour.temperature | 0}°F</div>
                    <div className="is-size-6 TW has-text-centered">Feels Like: {hour.apparentTemperature | 0}°F </div>
                </div>
            )
        })
        return (
            <div className="columns is-centered is-multiline is-mobile weather-display">
                {weatherRender}


            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        weather: state.weather.hourly,
        location: state.weather.location,
        timezone: state.weather.timezone
    }
}

export default connect(mapStateToProps, null)(HourlyDisplay);
