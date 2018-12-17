import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentDisplay from './WeatherDisplays/CurrentDisplay';
import HourlyDisplay from './WeatherDisplays/HourlyDisplay';
import DailyDisplay from './WeatherDisplays/DailyDisplay';
import ErrorDisplay from './WeatherDisplays/ErrorDisplay';
import LoadingDisplay from './WeatherDisplays/LoadingDisplay';
class Box extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     currently: this.props.weather.currently,
        //     hourly: this.props.weather.hourly,
        //     daily: this.props.weather.daily
        // }
        this.getDisplay = this.getDisplay.bind(this)
    }

    getDisplay() {

        if (this.props.loading) {
            return <LoadingDisplay />
        }
        if (this.props.error) {
            return <ErrorDisplay />
        }

        if (this.props.display === 'CURRENTLY') {
            return <CurrentDisplay />
        } else if (this.props.display === 'HOURLY') {
            return <HourlyDisplay />
        } else if (this.props.display === 'DAILY') {
            return <DailyDisplay />
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
const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.loading.load,
        display: state.displayed,
        error: state.error.exists
    }
}


export default connect(mapStateToProps, null)(Box);
