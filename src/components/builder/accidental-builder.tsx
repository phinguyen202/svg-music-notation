import React from 'react';
import { CoordinateModel } from '@model/common.model';
import { AccidentalType } from '@model/business.model';
import Sharp from '@base/accidental/sharp';
import DoubleSharp from '@base/accidental/double-sharp';
import Natural from '@base/accidental/natural';
import Flat from '@base/accidental/flat';
import DoubleFlat from '@base/accidental/double-flat';

interface Props extends CoordinateModel {
    type: AccidentalType;
}

interface UpstreamProps extends Props {
    distanceSpace: number;
}

export function AccidentalBuilder({x = 0, y = 0, type }: Props): JSX.Element {
    switch (type) {
        case 'sharp':
            return <Sharp.JSX x={x} y={y}/>
        case 'double sharp':
            return <DoubleSharp.JSX x={x} y={y}/>
        case 'natural':
            return <Natural.JSX x={x} y={y}/>
        case 'flat':
            return <Flat.JSX x={x} y={y}/>
        case 'double flat':
            return <DoubleFlat.JSX x={x} y={y}/>
        default:
            return undefined;
    }
}

export function AccidentalUpstreamBuilder({x = 0, y = 0, type, distanceSpace = 0 }: UpstreamProps): JSX.Element {
    switch (type) {
        case 'sharp':
            return <Sharp.JSX x={x - (Sharp.width + distanceSpace)} y={y}/>
        case 'double sharp':
            return <DoubleSharp.JSX x={x - (DoubleSharp.width + distanceSpace)} y={y}/>
        case 'natural':
            return <Natural.JSX x={x - (Natural.width + distanceSpace)} y={y}/>
        case 'flat':
            return <Flat.JSX x={x - (Flat.width + distanceSpace)} y={y}/>
        case 'double flat':
            return <DoubleFlat.JSX x={x - (DoubleFlat.width + distanceSpace)} y={y}/>
        default:
            return undefined;
    }
}
