import { CoordinateModel, HeightDemension } from "@model/common.model";``
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel, HeightDemension { }

const width = 6;

function JSX({ x = 0, y = 0, height = 0 }: Props): JSX.Element {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect width={1} height={height}/>
            <rect x="5" width={1} height={height}/>
        </g>
    );
}

interface DoubleBarLine {
    width: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    JSX
} as DoubleBarLine;