import { CoordinateModel } from "@model/common.model";
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel {
    lineNumber: number;
    spaceDistance: number;
    width: number;
}

function JSX(props: Props): JSX.Element {
    const lines = (new Array(props.lineNumber)).map((data: any, index: number) => {
        const y = index * props.spaceDistance;
        return <line x2={props.width} y1={y} y2={y} key={index}></line>
    });
    return (
        <g transform={`translate(${props.x}, ${props.y})`} stroke="black" strokeWidth="0.5">
            {lines}
        </g>
    );
}

interface Staff {
    JSX: FunctionComponent<Props>
}

export default {
    JSX
} as Staff;