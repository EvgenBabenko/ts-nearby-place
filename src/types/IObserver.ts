export interface IObserver {
    subscribe: (fn: any) => any;
    notify: () => any;
}