import { CoordinateModel, HeightDemension } from "@model/common.model";``
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel, HeightDemension { }

const width = 6;

function JSX(props: Props): JSX.Element {
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <rect width={1} height={props.height}/>
            <rect x="3" width={3} height={props.height}/>
        </g>
    );
}

interface BoldDoubleBarLine {
    width: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    JSX
} as BoldDoubleBarLine;