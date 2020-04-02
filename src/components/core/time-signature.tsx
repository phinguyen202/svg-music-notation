import React from "react";
import { TimeSignatureProps } from "../../model/business.model";

const textStyle = {
    font: 'bold 28px cambria'
}
export function TimeSignature(props: TimeSignatureProps) {
    return (
        <g transform="translate(5)">
            <text transform={`translate(${0}, ${20})`} style={textStyle}>{props.upper}</text>
            <text transform={`translate(${0}, ${40})`} style={textStyle}>{props.lower}</text>
        </g>
    );
}