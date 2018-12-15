import React, { Component } from 'react';
import dotenv from 'dotenv';
import CurrentDisplay from './WeatherDisplays/CurrentDisplay';
import HourlyDisplay from './WeatherDisplays/HourlyDisplay';
import DailyDisplay from './WeatherDisplays/DailyDisplay';
import ErrorDisplay from './WeatherDisplays/ErrorDisplay';
import LoadingDisplay from './WeatherDisplays/LoadingDisplay';
dotenv.config()
class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currently: this.props.weather.currently,
            hourly: this.props.weather.hourly,
            daily: this.props.weather.daily
        }
        this.getDisplay = this.getDisplay.bind(this)
    }

    getDisplay() {

        if (this.props.loading) {
            return <LoadingDisplay animation={this.props.loadingAnimation} />
        }
        if (this.props.error) {
            return <ErrorDisplay />
        }

        if (this.props.display === 'now') {
            return <CurrentDisplay weather={this.props.weather.currently} location={this.props.location} timezone={this.props.timezone} />
        } else if (this.props.display === 'day') {
            return <HourlyDisplay weather={this.props.weather.hourly} location={this.props.location} timezone={this.props.timezone} />
        } else if (this.props.display === 'week') {
            return <DailyDisplay weather={this.props.weather.daily} location={this.props.location} timezone={this.props.timezone} />
        }

    }



    render() {
        let panelToBeDisplayed = this.getDisplay()
        return (
            <div className="box blurred-box">
                {this.props.children}
                {panelToBeDisplayed}
            </div>
        );
    }
}

export default Box;
