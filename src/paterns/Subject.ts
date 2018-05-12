import ObserverList from "./ObserverList";

export default class {

    observers: any;

    constructor() {
        this.observers = new ObserverList();
    }

    addObserver(observer: any) {
        this.observers.add(observer);
    }

    removeObserver(observer: any) {
        this.observers.removeAt( this.observers.indexOf(observer, 0) );
    }

    notify(context: any) {
        const observerCount = this.observers.count();

        for (let i = 0; i < observerCount; i++){
            this.observers.get(i).update(context);
        }
    }
}