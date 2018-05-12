import PubSub from "./paterns/PubSub";
import ModelServices from './services/ModelServices';

import {ILocation} from "./types/ILocation";

export default class extends PubSub {


    location: ILocation;
    place: string;

    constructor(location: ILocation, place: any = '') {
        super();

        this.location = location;
        this.place = place;
    }

    public getPlace(): any {
        return this.place;
    }

    public updatePlace(place: any): any {
        this.place = place;

        // emmit event
        this.publish('getData', place);
    }

    public async getPlaces(location: ILocation) {
        return await new ModelServices().findPlace(location);
    }

    /*public async get(location: ILocation): Promise<any> {
        const place = await new ModelServices().findPlace(location);

        this.publish('getData', place);
    }*/
}