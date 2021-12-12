import { OptionalPosition, SpaceUnit, Position } from '@model/common.model';
import { Component } from 'source-renderer';

export abstract class BaseComponent extends Component {
    protected width: number;
    protected space: SpaceUnit;
    protected position: Position;
    public constructor() {
        super();
    }

    public getWidth(): number {
        return this.width;
    }

    public getSpace(): SpaceUnit {
        return this.space;
    }

    public setPosition(newPosition: Position): void {
        this.position = {
            ...this.position,
            ...newPosition,
        }
    }
}