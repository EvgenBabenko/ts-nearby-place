export default class {

    callbacks: any[];

    constructor() {
        this.callbacks = [];
    }

    subscribe(callback: any) {
        this.callbacks.push(callback);

        return () => this.callbacks = this.callbacks.filter(cb => cb !== callback);
    }

    notify() {
        this.callbacks.forEach(callbacks => callbacks());
    }
}