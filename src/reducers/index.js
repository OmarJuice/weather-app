import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import displayReducer from './displayReducer';
import loadingReducer from './loadingReducer';
import weatherReducer from './weatherReducer';
export default combineReducers({
    weather: weatherReducer,
    loading: loadingReducer,
    error: errorReducer,
    displayed: displayReducer,
})