import { CoordinateModel } from '@model/common.model';
import { Component } from 'source-renderer';

export abstract class BaseComponent extends Component {
    public constructor(private coordinate: CoordinateModel) {
        super();
    }
}