import axios from 'axios';


const getWeather = (searchLoc) => {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://microservices-api.herokuapp.com/api/weather/${searchLoc}`)
        .then((response) => {
            return Promise.resolve(response)
        }).catch((e) => {
            return Promise.reject(e)
        })
}


export default getWeather
