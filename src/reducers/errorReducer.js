import defaultState from './defaultState';

let { error } = defaultState
export default (state = error, action) => {
    switch (action.type) {
        case 'ERROR':
            return { ...state, exists: true, message: action.message };
        case 'LOCATION_ERROR':
            return { ...state, exists: true, message: action.message, disableLocation: true }
        case 'FETCH_WEATHER':
            return { ...state, exists: false };
        case 'FETCH_WEATHER_FROM_COORDS':
            return { ...state, exists: false };
        case 'LOADING':
            return { ...state, exists: false }
        default:
            return state
    }
}

