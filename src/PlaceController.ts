import {ILocation} from "./types/ILocation";
import {IPlaceModel} from "./types/IPlaceModel";
import {IPlaceView} from "./types/IPlaceView";

export default class {

    view: IPlaceView;
    model: IPlaceModel;

    constructor(view: IPlaceView, model: IPlaceModel) {
        this.view = view;
        this.model = model;

        this.view.subscribe('submitLocation', this.findPlace.bind(this));
    }

    private async findPlace(location: ILocation): Promise<any> {
        const place = await this.model.getPlaces(location);

        this.model.updatePlace(place);

        // await this.model.get(location);
    }

}