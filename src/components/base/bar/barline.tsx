import { CoordinateModel, HeightDemension } from "@model/common.model";``
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel, HeightDemension { }

const width: number = 1;

function JSX({ x = 0, y = 0, height = 0 }: Props): JSX.Element {
    return (
        <rect transform={`translate(${x}, ${y})`} width={1} height={height}/>
    );
}

interface BarLine {
    width: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    JSX
} as BarLine;