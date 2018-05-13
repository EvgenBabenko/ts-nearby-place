import DomUtils from '../utils/DomUtils';
import {ILocation} from "../types/ILocation";
import Observer from './Observer';
import PlaceModel from './PlaceModel';

export default class extends Observer {

    model: PlaceModel;

    constructor(model: PlaceModel) {
        super();

        this.model = model;

        const form = document.getElementById('form');

        form.addEventListener('submit', this.handleSubmitData.bind(this));

        this.model.subscribe(() => this.render());
        
    }

    private handleSubmitData(event: any): void {
        event.preventDefault();

        const location: ILocation = new DomUtils().reduceFormByAttr('name', event.target);

        this.notify(location)
    }

    private render(): void {
        const { formatted_address, formatted_phone_number, name, vicinity, opening_hours, geometry: { location: { lat, lng } } } = this.model.getPlace();

        const weekday_text = (opening_hours) ? opening_hours.weekday_text : null;
        
        const textParameters: any = {
            lat,
            lng,
            formatted_address,
            formatted_phone_number,
            name,
            vicinity,
            weekday_text,
        };

        const textNode = document.getElementById("text");

        new DomUtils().clearNode(textNode);

        for (const key in textParameters) {
            if (textParameters.hasOwnProperty(key)) {
                const gg = new DomUtils().createElement('div', {}, `${key}: ${textParameters[key]}`);

                textNode.appendChild(gg)
            }
        }
    }

}