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
export abstract class BaseComponent extends Component {
    public width: number;
    public space: SpaceUnit;
    protected position: Position;
    public constructor(position?: Position) {
        super();
        this.position = position;
    }

    public getWidth(): number {
        return this.width;
    }

    public getSpace(): SpaceUnit {
        return this.space;
    }

    public setPosition(newPosition: OptionalPosition): void {
        this.position = {
            ...this.position,
            ...newPosition,
        }
    }
}