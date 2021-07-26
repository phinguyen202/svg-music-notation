// this code based on https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/

export default class PubSub {
    events: any;
    constructor() {
        this.events = {};
    }

    subscribe(event: any, callback: any) {
        if (!this.events.hasOwnProperty(event)) {
            this.events[event] = [];
        }

        return this.events[event].push(callback);
    }

    publish(event: any, data = {}) {
        if (!this.events.hasOwnProperty(event)) {
            return [];
        }
        return this.events[event].map((callback: Function) => callback(data));
    }
}