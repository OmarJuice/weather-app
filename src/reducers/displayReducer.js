import defaultState from './defaultState';

const { displayed } = defaultState

export default (state = displayed, action) => {
    switch (action.type) {
        case 'CURRENTLY':
            return action.type;
        case 'DAILY':
            return action.type;
        case 'HOURLY':
            return action.type;
        default:
            return state
    }
}