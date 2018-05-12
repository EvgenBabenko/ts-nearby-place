export default class {

    url: string;

    constructor(url: string) {
        this.url = url;
    }

    public getJson(): any {
        return fetch(this.url)
            .then(responce => responce.json())
            .catch(error => console.error(error))
    }
}