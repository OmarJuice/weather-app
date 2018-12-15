import React, { Component } from 'react';
import Skycons from 'react-skycons'


class LoadingDisplay extends Component {

    getSkycons = () => {
        const skyconsArray = ['CLEAR_DAY', 'CLEAR_NIGHT', 'PARTLY_CLOUDY_DAY', 'PARTLY_CLOUDY_NIGHT', 'CLOUDY', 'RAIN', 'SLEET', 'SNOW', 'WIND', 'FOG']
        return skyconsArray.map((skycon, i) => {
            let startDirection = i % 2 === 0 ? 'left' : 'right'
            let animated = this.props.animation ? 'moving-skycon' : 'centered-skycon'
            let skyconClass = `column is-full small-skycon ${animated} ${startDirection}`
            return (
                <div key={skycon} className={skyconClass}>
                    <Skycons
                        color='white'
                        icon={skycon}
                        autoplay={true}
                    />
                </div>
            )
        })
    }

    render() {
        let allSkycons = this.getSkycons()
        return (
            <div className="columns is-centered is-multiline weather-display">
                {allSkycons}
            </div>
        );
    }
}

export default LoadingDisplay;
