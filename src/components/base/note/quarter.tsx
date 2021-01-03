import { CoordinateModel } from '@model/common.model';
import React, { FunctionComponent } from 'react';
import Stem from './stem';
import HeadNote from './head';

interface Props extends CoordinateModel {
    isStemUp?: boolean;
}

const width: number = 12.67;
const height: number = 40;

function JSX({ x = 0, y = 0, isStemUp = true}: Props): JSX.Element {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <HeadNote.JSX />
            <Stem.JSX up={isStemUp} />
        </g>
    );
}

interface QuarterNote {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as QuarterNote;