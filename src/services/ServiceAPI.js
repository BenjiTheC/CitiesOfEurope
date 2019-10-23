import URI from 'urijs';

const BASE_URL = 'http://ec2-3-17-142-17.us-east-2.compute.amazonaws.com:3000';
const PATH_CITY = '/city';
const BARCELONA = '/barcelona';
const FLORENCE = '/florence';
const PRAGUE = '/prague';

const HEADERS = {
    Accept: 'application/json',
};

export default class ServiceAPI {
    /**
     * getPhotosByCityName
     * @param String: cityName
     * @return Array: photos of given city name
     */
    static async getPhotoByCityName(cityName) {
        const url = new URI(`${BASE_URL}${PATH_CITY}/${cityName}`);

        let response;
        let responseJson;
        try {
            response = await fetch(url.toString(), {
                method: 'GET',
                headers: HEADERS,
            });

            if (response.ok) {
                responseJson = await response.json();
            } else {
                throw `Error: ServiceAPI.getPhotoByCithName(${cityName}): ${response.status}`;
            }
        } catch (error) {
            console.error(error);
            return [];
        }
        return responseJson;
    }

    /**
     * getPhotoOfBarcelona
     * @return Array: photos of Bacelona
     */
    static async getPhotoOfBarcelona() {
        const url = new URI(`${BASE_URL}${PATH_CITY}${BARCELONA}`);

        let response;
        let responseJson;
        try {
            response = await fetch(url.toString(), {
                method: 'GET',
                headers: HEADERS,
            });

            if (response.ok) {
                responseJson = await response.json();
            } else {
                throw `Error: ServiceAPI.getPhotoOfBarcelona: ${response.status}`;
            }
        } catch (error) {
            console.error(error);
            return [];
        }

        return responseJson;
    }

    /**
     * getPhotoOfFlorence
     * @return Array: photos of Florence
     */
    static async getPhotoOfFlorence() {
        const url = new URI(`${BASE_URL}${PATH_CITY}${FLORENCE}`);

        let response;
        let responseJson;
        try {
            response = await fetch(url.toString(), {
                method: 'GET',
                headers: HEADERS,
            });

            if (response.ok) {
                responseJson = await response.json();
            } else {
                throw `Error: ServiceAPI.getPhotoOfFlorence: ${response.status}`;
            }
        } catch (error) {
            console.error(error);
            return [];
        }

        return responseJson;
    }

    /**
     * getPhotoOfPrague
     * @return Array: photos of Prague
     */
    static async getPhotoOfPrague() {
        const url = new URI(`${BASE_URL}${PATH_CITY}${PRAGUE}`);

        let response;
        let responseJson;
        try {
            response = await fetch(url.toString(), {
                method: 'GET',
                headers: HEADERS,
            });

            if (response.ok) {
                responseJson = await response.json();
            } else {
                throw `Error: ServiceAPI.getPhotoOfPrague: ${response.status}`;
            }
        } catch (error) {
            console.error(error);
            return [];
        }

        return responseJson;
    }
}
