import React from 'react';
import { DurationType } from '@model/business.model';
import WholeHalfRest from '@base/rest/whole-half';
import QuarterRest from '@base/rest/quarter';
import EighthRest from '@base/rest/eighth';
import SixteenthRest from '@base/rest/sixteenth';
import { YCoordinate, CoordinateModel } from '@model/common.model';
import { TypeBuilderRender } from '@builder/builder.model';
import { SvgRestElement } from '@model/source.model';
import { RenderError } from '@exception/root';

interface Props extends SvgRestElement, CoordinateModel { }

export function restBuilder(props: Props): TypeBuilderRender & Props {
    const { duration } = props;
    let restType;
    switch (duration) {
        case 'whole':
            restType = WholeHalfRest;
            break;
        case 'half':
            restType = WholeHalfRest;
            break;
        case 'quarter':
            restType = QuarterRest;
            break;
        case 'eighth':
            restType = EighthRest;
            break;
        case 'sixteenth':
            restType = SixteenthRest;
            break;
        default:
            if (!duration) {
                throw new RenderError('Rest duration is undefined');
            } else {
                throw new RenderError(`Invalid duration: ${duration}`);
            }
    }
    return {
        ...props,
        ...restType,
        renderFunc: function () {
            const { id, x, y, width, height, JSX } = this;
            return <JSX key={id} x={x} y={y} />
        }
    }
}
