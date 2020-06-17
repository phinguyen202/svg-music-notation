import React, { FunctionComponent } from "react";
import { CoordinateModel } from "@model/common.model";

interface Props extends CoordinateModel {
    lineNumber: number;
    spaceDistance: number;
    width: number;
}

function JSX({ lineNumber, spaceDistance, width, y = 0, x = 0 }: Props): JSX.Element {
    const lines = (new Array(lineNumber)).fill(0).map((data: any, index: number) => {
        console.log("ahihi",data, index);
        
        const yLine = ++index * spaceDistance;
        return <line x2={width} y1={yLine} y2={yLine} key={index} />
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