export default class {

    baseUrl: string;
    query: object;

    constructor(baseUrl: string, query?: object) {
        this.baseUrl = baseUrl;
        this.query = query;
    }

    public getUrl(): string {
        if (this.query) {
            const queryString = this.joinToQueryString(this.query);

            return `${this.baseUrl}?${queryString}`
        } else {
            return this.baseUrl
        }

    }

    private joinToQueryString(params: any): string {
        let queryString = '';

        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                queryString += `${key}=${params[key]}&`
            }
        }

        return queryString.slice(0, -1);
    }

}