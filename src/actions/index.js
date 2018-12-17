import getWeather from '../Utils/getWeather';
import getWeatherCoords from '../Utils/getWeatherCoords';

export const fetchWeather = (location) => dispatch => {

    return getWeather(location)
        .then((res) => {
            if (res.status !== 200) {
                throw new Error(res)
            }
            const { currently, hourly, daily, timezone } = res.data.result
            dispatch({
                type: 'FETCH_WEATHER',
                currently,
                hourly,
                daily,
                timezone,
                location: res.data.location,
            })
        }).catch((e) => {
            dispatch({
                type: 'ERROR',
                message: `I couldn't find the weather for that location.`
            })
        })

}
export const fetchWeatherFromCoords = (lat, long) => dispatch => {
    return getWeatherCoords(lat, long)
        .then((res) => {
            if (res.status !== 200) {
                throw new Error(res)
            }
            const { currently, hourly, daily, timezone } = res.data
            return dispatch({
                type: 'FETCH_WEATHER_FROM_COORDS',
                currently,
                daily,
                hourly,
                timezone,
                location: `${res.data.latitude}, ${res.data.longitude}`
            })
        }).catch((err) => {
            return dispatch({
                type: 'ERROR'
            })
        })
}

export const loading = () => dispatch => {
    return dispatch({
        type: 'LOADING',
    })
}
export const locationError = () => dispatch => {
    return dispatch({
        type: 'LOCATION_ERROR',
        message: 'Please enable your location!'
    })
}

export const displayChange = (display) => (dispatch) => {
    return dispatch({
        type: display
    })
}