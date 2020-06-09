import { CoordinateModel } from "@model/common.model";``
import React, { FunctionComponent } from "react";
import Flat from '@base/accidental/flat'

interface Props extends CoordinateModel { }

const width: number = 15.66; 
const height: number = 25;

function JSX({ x = 0, y = 0}: Props): JSX.Element {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <Flat.JSX x={0} y={0} />
            <Flat.JSX x={8.33} y={0} />
        </g>
    );
}

interface DoubleFlat {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as DoubleFlat;