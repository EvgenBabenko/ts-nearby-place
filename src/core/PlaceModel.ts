import {ILocation} from "../types/ILocation";
import Observer from "./Observer";

export default class extends Observer {

    location: ILocation;
    place: any;

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

        this.notify();
    }

}