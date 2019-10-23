import * as types from '../types';

export const setCurrentCity = cityName => {
    return dispatch => {
        dispatch({
            type: types.SET_CURRENT_CITY,
            data: cityName,
        });
    };
};
