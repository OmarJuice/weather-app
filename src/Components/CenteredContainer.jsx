import React, { Component } from 'react';
import getWeatherFromCoords from '../Utils/getWeatherCoords';
import getWeather from '../Utils/getWeather';
import Tabs from './Tabs';
import weatherBackgrounds from '../Utils/WeatherBackgrounds';
import Box from './Box';
class CenteredContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weather: {
                currently: {},
                daily: {},
                hourly: {}
            },
            loading: true,
            loadingAnimation: false,
            location: 'New York',
            timezone: 'America/New_York',
            error: null,
            display: 'now',
            disableLocation: false
        }
        this.input = ''
    }
    handleChange(e) {
        e.preventDefault()
        this.input = e.target.value
    }
    handleSubmit(e) {
        e.preventDefault()
        let loc = this.input
        if (loc.length < 1) {
            return
        }
        this.setState({
            loading: true,
            loadingAnimation: true
        })
        getWeather(loc)
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(res)
                }
                const { currently, hourly, daily } = res.data.result
                this.setState({
                    weather: { currently, daily, hourly },
                    location: res.data.location,
                    timezone: res.data.result.timezone,
                    loading: false,
                    loadingAnimation: false,
                    error: null
                }, () => {
                    document.getElementById('input').value = ''
                })
            }).catch((e) => {
                this.setState({
                    error: true,
                    loading: false,
                }, () => {
                    // console.log('ERROR: ', this.state.error);
                })
            })
    }

    getDisplay(display) {
        if (this.state.loading && this.state.loadingAnimation) {
            return
        }
        return (e) => {
            e.preventDefault();
            return this.setState({ display })
        }
    }
    handleLocation(e) {
        e.preventDefault()
        this.setState({
            loading: true,
            loadingAnimation: true,
            disableLocation: true
        })
        window.navigator.geolocation.getCurrentPosition((pos) => {

            getWeatherFromCoords(pos.coords.latitude, pos.coords.longitude)
                .then((res) => {
                    if (res.status !== 200) {
                        throw new Error(res)
                    }
                    const { currently, hourly, daily } = res.data
                    this.setState({
                        weather: { currently, daily, hourly },
                        location: `${res.data.latitude}, ${res.data.longitude}`,
                        timezone: res.data.timezone,
                        loading: false,
                        loadingAnimation: false,
                        error: null,
                        disableLocation: false
                    }, () => {
                        document.getElementById('input').value = ''
                    })
                }).catch((e) => {
                    this.setState({
                        error: true,
                        loading: false,
                        disableLocation: false
                    })
                })
        }, (err) => {
            this.setState({
                disableLocation: true,
                loading: false,
                error: true
            })
            console.log(err);
        })
    }

    render() {
        let containerClass;

        if (this.state.weather.currently.icon) {
            console.log(this.state.weather.currently.icon.toUpperCase())
            containerClass = `columns is-centered ${weatherBackgrounds[this.state.weather.currently.icon.toUpperCase().replace(/-/g, '_')]}`
        } else {
            containerClass = "columns is-centered"
        }
        return (

            <div id="container" className={containerClass}>
                <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
                    <Tabs getDisplay={this.getDisplay.bind(this)} display={this.state.display} />
                    <Box
                        error={this.state.error}
                        loading={this.state.loading}
                        loadingAnimation={this.state.loadingAnimation}
                        display={this.state.display}
                        weather={this.state.weather}
                        location={this.state.location}
                        timezone={this.state.timezone}>
                        <form id="search-form" action="" onSubmit={this.handleSubmit.bind(this)} >
                            <input id="input" className="input is-primary TW" type="text" onChange={this.handleChange.bind(this)} autoComplete="off" autoFocus />
                            <div className="has-text-centered">

                                <input type="submit" className="button is-success TWBold" value="Search" />
                                <button className="button is-info" onClick={this.handleLocation.bind(this)} disabled={this.state.disableLocation}>
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

export default CenteredContainer;
