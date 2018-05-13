export default class Observer {

    callbacks: any[];

    constructor() {
        this.callbacks = [];
    }

    subscribe(callback: any) {
        this.callbacks.push(callback);

        return () => this.callbacks = this.callbacks.filter(cb => cb !== callback);
    }

    notify(args?: any) {
        this.callbacks.forEach(callbacks => callbacks(args));
    }
}