import PubSub from './paterns/PubSub'
import HelpersView from './utils/DomUtils';
import ViewServices from './services/ViewServices';

import {ILocation} from "./types/ILocation";
import {IPlaceModel} from "./types/IPlaceModel";

export default class extends PubSub {

    model: IPlaceModel;

    constructor(model: IPlaceModel) {
        super();

        this.model = model;

        const form = document.getElementById('form');

        form.addEventListener('submit', this.handleSubmitData.bind(this));

        model.subscribe('getData', this.render.bind(this));
    }

    private handleSubmitData(event: any): void {
        event.preventDefault();

        const location: ILocation = new HelpersView().reduceFormByAttr('name', event.target);

        this.publish('submitLocation', location);
    }

    private render(): void {
        const text = document.getElementById("text");

        new HelpersView().clearNode(text);

        const data = this.model.getPlace();

        new ViewServices().renderPlaceInfo(data, text)
    }

}
