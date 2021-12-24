import { Component } from 'source-renderer';
/**
 * @description base component is a element that will be place at a location, based on:
 * - The current staff
 * - Itself config
 * - other components around
 * @author phinguyen202
 * @export
 * @abstract
 * @class BaseComponent
 * @extends {Component}
 */
export class BaseComponent extends Component {
    constructor(position) {
        super();
        this.position = position;
    }
    getWidth() {
        return this.width;
    }
    getSpace() {
        return this.space;
    }
    setPosition(newPosition) {
        this.position = Object.assign(Object.assign({}, this.position), newPosition);
    }
}
