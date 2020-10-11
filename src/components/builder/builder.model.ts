import { DimensionModel, CoordinateModel } from '@model/common.model';

export interface BuilderRender extends DimensionModel, CoordinateModel{
    renderFunc: Function,
}