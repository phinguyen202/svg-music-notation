import { DimensionModel } from '@model/common.model';

export interface BuilderRender extends DimensionModel{
    renderFunc: Function,
}