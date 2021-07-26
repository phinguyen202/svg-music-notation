/* This Store is based on the beedle
MIT License

Copyright (c) 2018 Andy Bell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

export default class Store {
    private actions: any;
    private mutations: any;
    private state: any;
    private callbacks: Function[];
    private status: String;
    constructor(params: any) {
        // Add some default objects to hold our actions, mutations and state
        this.actions = {};
        this.mutations = {};
        this.state = {};

        // A status enum to set during actions and mutations
        this.status = 'resting';

        // We store callbacks for when the state changes in here
        this.callbacks = [];

        // Look in the passed params object for actions and mutations
        // that might have been passed in
        if (params.hasOwnProperty('actions')) {
            this.actions = params.actions;
        }

        if (params.hasOwnProperty('mutations')) {
            this.mutations = params.mutations;
        }

        // Set our state to be a Proxy. We are setting the default state by
        // checking the params and defaulting to an empty object if no default
        // state is passed in
        this.state = new Proxy((params.initialState || {}), {
            set(state, key, value) {

                // Set the value as we would normally
                state[key] = value;

                // Fire off our callback processor because if there's listeners,
                // they're going to want to know that something has changed
                this.processCallbacks(this.state);

                // Reset the status ready for the next operation
                this.status = 'resting';

                return true;
            }
        });
    }

    /**
     * A dispatcher for actions that looks in the actions
     * collection and runs the action if it can find it
     *
     * @param {string} actionKey
     * @param {mixed} payload
     * @returns {boolean}
     * @memberof Store
     */
    dispatch(actionKey: string, payload: any) {
        // Run a quick check to see if the action actually exists
        // before we try to run it
        if (typeof this.actions[actionKey] !== 'function') {
            console.error(`Action "${actionKey}" doesn't exist.`);
            return false;
        }

        // Let anything that's watching the status know that we're dispatching an action
        this.status = 'action';

        // Actually call the action and pass it the Store context and whatever payload was passed
        return this.actions[actionKey](this, payload);
    }

    /**
     * Look for a mutation and modify the state object
     * if that mutation exists by calling it
     *
     * @param {string} mutationKey
     * @param {mixed} payload
     * @returns {boolean}
     * @memberof Store
     */
    commit(mutationKey: string, payload: any) {
        // Run a quick check to see if this mutation actually exists
        // before trying to run it
        if (typeof this.mutations[mutationKey] !== 'function') {
            console.error(`Mutation "${mutationKey}" doesn't exist`);
            return false;
        }

        // Let anything that's watching the status know that we're mutating state
        this.status = 'mutation';

        // Get a new version of the state by running the mutation and storing the result of it
        let newState = this.mutations[mutationKey](this.state, payload);

        // Update the old state with the new state returned from our mutation
        this.state = newState;

        return true;
    }

    /**
     * Fire off each callback that's run whenever the state changes
     * We pass in some data as the one and only parameter.
     * Returns a boolean depending if callbacks were found or not
     *
     * @param {object} data
     * @returns {boolean}
     */
    processCallbacks(data: any) {
        if (!this.callbacks.length) {
            return false;
        }

        // We've got callbacks, so loop each one and fire it off
        this.callbacks.forEach(callback => callback(data));

        return true;
    }

    /**
     * Allow an outside entity to subscribe to state changes with a valid callback.
     * Returns boolean based on wether or not the callback was added to the collection
     *
     * @param {function} callback
     * @returns {boolean}
     */
    subscribe(callback: Function) {

        if (typeof callback !== 'function') {
            console.error('You can only subscribe to Store changes with a valid function');
            return false;
        }

        // A valid function, so it belongs in our collection
        this.callbacks.push(callback);

        return true;
    }
}