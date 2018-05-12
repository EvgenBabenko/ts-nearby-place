import HelpersView from '../utils/DomUtils';

export default class {

    constructor() {

    }

    public renderPlaceInfo(data: any, node: any): void  {
        let { formatted_address, formatted_phone_number, name, vicinity, opening_hours, geometry: { location: { lat, lng } } } = data;

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

        for (const key in textParameters) {
            if (textParameters.hasOwnProperty(key)) {
                const div = new HelpersView().createElement('div', {}, `${key}: ${textParameters[key]}`);

                node.appendChild(div);
            }
        }

    }
}
