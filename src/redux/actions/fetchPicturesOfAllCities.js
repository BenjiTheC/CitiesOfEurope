import { ServiceAPI } from '../../services';
import * as types from '../types';

const MAP_CITYNAMES_TO_TYPES = {
    barcelona: types.FETCH_BY_CITY_BARCELONA,
    florence: types.FECTH_BY_CITY_FLORENCE,
    prague: types.FECTH_BY_CITY_PRAGUE,
    paris: types.FECTH_BY_CITY_PARIS,
};

export const fetchPicturesOfAllCities = () => {
    return async dispatch => {
        for (const cityName of ['barcelona', 'florence', 'prague']) {
            let picturesOfCity;

            try {
                picturesOfCity = await ServiceAPI.getPhotoByCityName(cityName);
            } catch (error) {
                console.log(error);
            }
            dispatch({
                type: MAP_CITYNAMES_TO_TYPES[cityName],
                data: picturesOfCity,
            });
        }

        return Promise.resolve();
    };
};
