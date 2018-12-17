import defaultState from './defaultState'

const { loading } = defaultState

export default (state = loading, action) => {

    let cancelLoad = { ...state, load: false, animation: true }
    switch (action.type) {
        case 'LOADING':
            return { ...state, load: true, animation: true };
        case 'FETCH_WEATHER':
            return cancelLoad;
        case 'FETCH_WEATHER_FROM_COORDS':
            return cancelLoad;
        case 'ERROR':
            return cancelLoad;
        case 'LOCATION_ERROR':
            return cancelLoad;
        default:
            return state
    }
}