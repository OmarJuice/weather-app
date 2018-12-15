import axios from 'axios';
const getWeatherFromCoords = (lat, long) => {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://microservices-api.herokuapp.com/api/weathercoords/?latitude=${lat}&longitude=${long}`)
        .then((response) => {
            return Promise.resolve(response)
        }).catch((e) => {
            return Promise.reject(e)
        })
}
export default getWeatherFromCoords