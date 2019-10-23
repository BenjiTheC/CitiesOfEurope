import { combineReducers } from 'redux';
import cityPicturesReducers from './cityPicturesReducers';
import currentCityReducer from './currentCityReducer';

export default combineReducers({
    cityPictures: cityPicturesReducers,
    currentCity: currentCityReducer,
});
