import React from 'react';
import { DurationType } from '@model/business.model';
import WholeHalfRest from '@base/rest/whole-half';
import QuarterRest from '@base/rest/quarter';
import EighthRest from '@base/rest/eighth';
import SixteenthRest from '@base/rest/sixteenth';
import { YCoordinate } from '@model/common.model';
import { BuilderRender } from '@builder/builder.model';

interface Props extends YCoordinate {
    duration: DurationType;
}

export function restBuilder({ duration, y }: Props): BuilderRender {
    switch (duration) {
        case 'whole':
            return {
                height: WholeHalfRest.height,
                width: WholeHalfRest.width,
                renderFunc: (x: number) => <WholeHalfRest.JSX x={x} y={y} />
            };
        case 'half':
            return {
                height: WholeHalfRest.height,
                width: WholeHalfRest.width,
                renderFunc: (x: number) => <WholeHalfRest.JSX x={x} y={y} />
            };
        case 'quarter':
            return {
                height: QuarterRest.height,
                width: QuarterRest.width,
                renderFunc: (x: number) => <QuarterRest.JSX x={x} y={y} />
            };
        case 'eighth':
            return {
                height: EighthRest.height,
                width: EighthRest.width,
                renderFunc: (x: number) => <EighthRest.JSX x={x} y={y} />
            };
        case 'sixteenth':
            return {
                height: SixteenthRest.height,
                width: SixteenthRest.width,
                renderFunc: (x: number) => <SixteenthRest.JSX x={x} y={y} />
            };
        default:
            return undefined;
    }
}
