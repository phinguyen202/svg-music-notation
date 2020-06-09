import { CoordinateModel } from "@model/common.model";
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel {
    lineNumber: number;
    spaceDistance: number;
    width: number;
}

function JSX({ lineNumber, spaceDistance, width, y = 0, x = 0 }: Props): JSX.Element {
    const lines = (new Array(lineNumber)).map((data: any, index: number) => {
        const y = index * spaceDistance;
        return <line x2={width} y1={y} y2={y} key={index}></line>
    });
    return (
        <g transform={`translate(${x}, ${y})`} stroke="black" strokeWidth="0.5">
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