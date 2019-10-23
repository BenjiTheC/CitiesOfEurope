import * as types from '../types';

const INITIAL_STATE = { barcelona: [], florence: [], prague: [], paris: [] };

const cityPicturesReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_BY_CITY_BARCELONA: {
            return { ...state, barcelona: action.data };
        }
        case types.FECTH_BY_CITY_FLORENCE: {
            return { ...state, florence: action.data };
        }
        case types.FECTH_BY_CITY_PRAGUE: {
            return { ...state, prague: action.data };
        }
        case types.FECTH_BY_CITY_PARIS: {
            return { ...state, paris: action.data };
        }
        default:
            return state;
    }
};

export default cityPicturesReducers;
