import React from "react";
import { WidthDemension } from "../../model/app.model";

export function Staff(props: WidthDemension) {
    const lines = [1, 2, 3, 4, 5].map((lineNumber: number, index: number) => {
        const y = lineNumber * 10;
        return <line x1="0" x2={props.width} y1={y} y2={y} key={index}></line>
    });
    return (
        <g stroke="black" strokeWidth="0.5">
            {lines}
        </g>
    )
}