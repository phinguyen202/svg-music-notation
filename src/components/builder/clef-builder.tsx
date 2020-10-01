import React from 'react';
import { ClefType } from '@model/business.model';
import { YCoordinate } from '@model/common.model';
import { BuilderRender } from '@builder/builder.model';
import TrebleClef from '@base/clef/treble';
import BassClef from '@base/clef/bass';

interface Props extends YCoordinate {
    type: ClefType;
}

export function clefBuilder({ type, y }: Props): BuilderRender {
    switch (type) {
        case 'treble':
            return {
                height: TrebleClef.height,
                width: TrebleClef.width,
                renderFunc: (x: number) => <TrebleClef.JSX x={x} y={y} />
            };
        case 'bass':
            return {
                height: BassClef.height,
                width: BassClef.width,
                renderFunc: (x: number) => <TrebleClef.JSX x={x} y={y} />
            };
        case 'alto':
            return {
                height: TrebleClef.height,
                width: TrebleClef.width,
                renderFunc: (x: number) => <TrebleClef.JSX x={x} y={y} />
            };
        case 'tenor':
            return {
                height: TrebleClef.height,
                width: TrebleClef.width,
                renderFunc: (x: number) => <TrebleClef.JSX x={x} y={y} />
            };
        default:
            return undefined;
    }
}
