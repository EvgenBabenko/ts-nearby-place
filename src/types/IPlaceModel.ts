import {ILocation} from "./ILocation";
import {IPubSub} from "./IPubSub";

export interface IPlaceModel extends IPubSub{
    getPlace: () => any;

    updatePlace: (place: any) => any

    getPlaces: (locatioon: ILocation) => any;
}