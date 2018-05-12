import Url from './Url'
import RestApi from './RestApi'

export default class {

    key: string;
    baseUrl: string;

    constructor(key: string) {
        this.key = key;
        this.baseUrl = 'https://maps.googleapis.com/maps/api/place';
    }

    public async getPlacesNearby(lat: number, lng: number, radius: number): Promise<any> {
        const location = [lat, lng].join();

        const url = new Url(`${this.baseUrl}/nearbysearch/json`, {
            location,
            radius,
            key: this.key
        });

        return await new RestApi( url.getUrl() ).getJson();
    }

    public async getPlaceDetail(id: string): Promise<any> {
        const url = new Url(`${this.baseUrl}/details/json`, {
            placeid: id,
            key: this.key
        });

        return await new RestApi( url.getUrl() ).getJson();
    }

    public async getPlacePhoto(maxwidth: number, photoreference: string): Promise<any> {
        const url = new Url(`${this.baseUrl}/photo`, {
            maxwidth,
            photoreference,
            key: this.key
        });

        return await new RestApi( url.getUrl() ).getJson();
    }

}