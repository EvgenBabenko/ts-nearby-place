export interface IPubSub {
    subscribe: (eventName: string, fn: void) => void;
    publish: (eventName: string, ...arg: any[]) => void;
}