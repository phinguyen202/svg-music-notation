import { DimensionModel, CoordinateModel } from '@model/common.model';
import { SvgElementType, SvgElement, SvgElementRoot } from '@model/source.model';

export interface BuilderRender extends DimensionModel, CoordinateModel {
    renderFunc: Function,
}

export interface TypeBuilderRender extends BuilderRender, SvgElementRoot {
    renderFunc: Function,
}