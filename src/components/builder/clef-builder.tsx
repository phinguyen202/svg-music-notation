import React from 'react';
import { ClefType } from '@model/business.model';
import { CoordinateModel } from '@model/common.model';
import { TypeBuilderRender } from '@builder/builder.model';
import TrebleClef from '@base/clef/treble';
import BassClef from '@base/clef/bass';
import { SvgClefElement } from '@model/source.model';

interface Props extends SvgClefElement, CoordinateModel {}

export function clefBuilder(props: Props): TypeBuilderRender & Props{
    const { clef } = props;
    let clefType;
    switch (clef) {
        case 'treble':
            clefType = TrebleClef;
            break;
        case 'bass':
            clefType = BassClef;
            break;
        case 'alto':
            clefType = TrebleClef;
            break;
        case 'tenor':
            clefType = TrebleClef;
            break;
        default:
            if (!clef) {
                throw Error('Clef type is undefined');
            } else {
                throw Error(`Invalid clef: ${clef}`);
            }
    }
    return {
        ...props,
        ...clefType,
        renderFunc: function () {
            const { x = 0, y = 0, JSX } = this;
            return <JSX x={x} y={y} />
        }
    };
}
