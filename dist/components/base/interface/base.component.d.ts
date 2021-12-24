import { SpaceUnit, Position, OptionalPosition } from '@model/common.model';
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
export declare abstract class BaseComponent extends Component {
    width: number;
    space: SpaceUnit;
    protected position: Position;
    constructor(position?: Position);
    getWidth(): number;
    getSpace(): SpaceUnit;
    setPosition(newPosition: OptionalPosition): void;
}
