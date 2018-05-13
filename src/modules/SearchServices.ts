import GoogleApi from './GoogleApi'
import Iterator from "./Iterator";
import globTypes from "../fixtures/searchTypes";
import GeoLogic from "./GeoLogic";

import {ILocation} from "../types/ILocation";

export default class {

    google: any;
    iterator: any;

    constructor() {
        this.google = new GoogleApi('AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk');
        this.iterator = null;
    }

    public async findPlace(location: ILocation): Promise<any> {
        this.iterator = new Iterator().generate();

        const places = await this.getPlacesRecursion(location, true);

        console.log('findNearlyPlace', location, places);

        const distanceList = places
            .map((result: any) => result.geometry.location)
            .map((resultLocation: any) => new GeoLogic().getDistanceBetween(location, resultLocation));

        const placeIndex = distanceList.indexOf( Math.min(...distanceList) );

        const { place_id } = places[placeIndex];

        const { result: place } = await this.google.getPlaceDetail(place_id);

        return place;

        // const { result: place } = await google.getPlacePhoto(maxwidth, photoreference);
    }

    private async getPlacesRecursion(location: ILocation, radiusDirection: boolean): Promise<any> {
        const { lat, lng } = location;

        let next = this.iterator.next(radiusDirection);

        const radius = next.value;

        const { next_page_token, results: resultsResponce } = await this.google.getPlacesNearby(lat, lng, radius);

        while (!next.done) {
            const filteredResults = resultsResponce
                .filter((item: any) => {
                    return item.types
                        .map((type: string) => {
                            return globTypes.some((item: any) => item === type)
                        })
                        .some((item: any) => item === true);
                });

            if (resultsResponce.length === 0) return this.getPlacesRecursion(location, true);

            return (next_page_token) ? this.getPlacesRecursion(location, false) :
                (filteredResults.length) ? filteredResults : this.getPlacesRecursion(location, true);

        }
    }

    // private async getPlacesRecursion(location: ILocation, radiusDirection: boolean): Promise<any> {
    //     const { lat, lng } = location;
    //
    //     const { value: radius, done } = this.iterator.next(radiusDirection);
    //
    //     const { next_page_token, results: resultsResponce } = await this.google.getPlacesNearby(lat, lng, radius);
    //
    //     const filteredResults = resultsResponce
    //         .filter((item: any) => {
    //             return item.types
    //                 .map((type: string) => {
    //                     return globTypes.some((item: any) => item === type)
    //                 })
    //                 .some((item: any) => item === true);
    //         });
    //
    //     // const filteredResults = resultsResponce;
    //
    //     if (done) return;
    //
    //     if (resultsResponce.length === 0) return this.getPlacesRecursion(location, true);
    //
    //     return (next_page_token) ? this.getPlacesRecursion(location, false) :
    //         (filteredResults.length) ? filteredResults : this.getPlacesRecursion(location, true);
    // }

}