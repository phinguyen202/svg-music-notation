import { CoordinateModel, HeightDemension } from "@model/common.model";``
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel, HeightDemension { }

const width: number = 1;

function JSX(props: Props): JSX.Element {
    return (
        <rect transform={`translate(${props.x}, ${props.y})`} width={1} height={props.height}/>
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