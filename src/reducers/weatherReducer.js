import defaultState from './defaultState';

let { weather } = defaultState

export default (state = weather, action) => {
    const { currently, hourly, daily, timezone, location } = action


    switch (action.type) {
        case 'FETCH_WEATHER':
            return { ...state, currently, hourly, daily, timezone, location };
        case 'FETCH_WEATHER_FROM_COORDS':
            return { ...state, currently, hourly, daily, timezone, location };
        default:
            return state
    }
}