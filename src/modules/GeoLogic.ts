import {ILocation} from "../types/ILocation";

export default class {

    public getDistanceBetween(point1: ILocation, point2: ILocation): number {
        const { lat: lat_1, lng: lng_1 } = point1;
        const { lat: lat_2, lng: lng_2 } = point2;

        const EARTH_DIAMETER_IN_METERS = 6371 * 2 * 1000;
        const p = Math.PI / 180;
        const c = Math.cos;
        const a = 0.5 - c((lat_2 - lat_1) * p)/2 + c(lat_1 * p) * c(lat_2 * p) * (1 - c((lng_2 - lng_1) * p))/2;

        console.log(EARTH_DIAMETER_IN_METERS * Math.asin(Math.sqrt(a)));
        return EARTH_DIAMETER_IN_METERS * Math.asin(Math.sqrt(a));
    }

};