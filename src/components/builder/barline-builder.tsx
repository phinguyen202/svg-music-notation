import React from 'react';
import BarLine from '@base/bar/barline';
import DoubleBarLine from '@base/bar/double-barline';
import BoldDoubleBarLine from '@base/bar/blod-double-barline';
import { TypeBuilderRender } from '@builder/builder.model';
import { HeightDimension, CoordinateModel } from '../../model/common.model';
import { SvgBarlineElement } from '@model/source.model';
import { RenderError } from '@exception/root';

interface Props extends SvgBarlineElement, CoordinateModel, HeightDimension { }

export function barlineBuilder(props: Props): TypeBuilderRender & Props {
    const { barline } = props;
    let barlineType: any;
    switch (barline) {
        case 'single':
            barlineType = BarLine;
            break;
        case 'double':
            barlineType = DoubleBarLine;
            break;
        case 'bold double':
            barlineType = BoldDoubleBarLine;
            break;
        default:
            if (!barline) {
                throw new RenderError('Barline type is undefined');
            } else {
                throw new RenderError(`Invalid barline: ${barline}`);
            }
    }
    return {
        ...props,
        ...barlineType,
        renderFunc: function () {
            const { id, x = 0, y = 0, height, JSX } = this;
            return <JSX key={id} x={x} y={y} height={height} />
        }
    };
}
