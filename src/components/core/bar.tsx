import React, { useEffect } from "react";

export function BarLine(props: BarProperties) {
    return (
        <line transform={`translate(${250}, ${0})`} y2="40" stroke="black"/>
    );
}

export function DoubleBarLine(props: BarProperties) {
    return (
        <g transform={`translate(${300}, ${0})`}>
            <line y2="40" stroke="black"/>
            <line x1="-5" x2="-5" y2="40" stroke="black"/>
        </g>
    );
}

export function BoldDoubleBarLine(props: BarProperties) {
    return (
        <g transform={`translate(${350}, ${0})`}>
            <line y2="40" stroke="black" strokeWidth="4"/>
            <line x1="-5" x2="-5" y2="40"stroke="black"/>
        </g>
    );
}

interface BarProperties {
    transform?: string;
}