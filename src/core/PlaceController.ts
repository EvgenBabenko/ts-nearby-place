import {ILocation} from "../types/ILocation";
import PlaceView from "./PlaceView";
import PlaceModel from "./PlaceModel";
import SearchServices from "../modules/SearchServices";

export default class {

    view: PlaceView;
    model: PlaceModel;

    constructor(view: PlaceView, model: PlaceModel) {
        this.view = view;
        this.model = model;

        this.view.subscribe((location: ILocation) => this.findPlace(location))
    }

    private async findPlace(location: ILocation): Promise<any> {
        const place = await new SearchServices().findPlace(location);

        this.model.updatePlace(place);
    }

}