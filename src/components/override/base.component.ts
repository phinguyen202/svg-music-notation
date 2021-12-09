import { CoordinateModel, SpaceUnit, YRelativePosition } from '@model/common.model';
import { Component } from 'source-renderer';

export abstract class BaseComponent extends Component {
    private space: SpaceUnit;
    private position: YRelativePosition;
    public constructor() {
        super();
    }

    public move(newPosition: CoordinateModel): void {
        this.position = {
            ...this.position,
            ...newPosition,
        }
    }
}