export default class PubSub {

    events: any;

    constructor() {
        this.events = {};
    }

    subscribe(eventName: string, fn: void): void {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    }

    publish(eventName: string, ...arg: any[]): void {
        if (this.events[eventName]) {
            this.events[eventName].forEach((fn: any) => fn(...arg));
        }
    }

}