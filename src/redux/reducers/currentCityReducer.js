import * as types from '../types';

const INITIAL_STATE = 'barcelona'; //null;

const currentCityReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_CURRENT_CITY:
            return action.data;
        default:
            return state;
    }
};

export default currentCityReducer;
