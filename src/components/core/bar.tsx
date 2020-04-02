import React, { useEffect } from "react";
import { XCoordinate, HeightDemension } from "../../model/app.model";

// bar line JSX Elements
interface BarProperties extends XCoordinate, HeightDemension{
}

function BarLine(props: BarProperties) {
    return (
        <line transform={`translate(${props.x}, ${0})`} y2={props.height} stroke="black"/>
    );
}

function DoubleBarLine(props: BarProperties) {
    return (
        <g transform={`translate(${props.x}, ${0})`}>
            <line y2={props.height} stroke="black"/>
            <line x1="-5" x2="-5" y2={props.height} stroke="black"/>
        </g>
    );
}

function BoldDoubleBarLine(props: BarProperties) {
    return (
        <g transform={`translate(${props.x}, ${0})`}>
            <line y2={props.height} stroke="black" strokeWidth="4"/>
            <line x1="-5" x2="-5" y2={props.height} stroke="black"/>
        </g>
    );
}

// mapping and Bar interface
interface BarLineConfig extends HeightDemension{
}

const barLineConfigMap: Map<string, BarLineConfig> = new Map<string, BarLineConfig>([
    ['treble', {
        height: 40
    }]
]);

interface BarLineProps {
    type: string;
}

export function Bar(props: BarLineProps & XCoordinate) {
    const baseBarLine = barLineConfigMap.get('treble');
    let jsxBar;
    switch (props.type) {
        case 'barline':
            jsxBar = <BarLine x={props.x} height={baseBarLine.height}/>
            break;
        case 'double':
            jsxBar = <DoubleBarLine x={props.x} height={baseBarLine.height}/>
            break;
        case 'bold double':
            jsxBar = <BoldDoubleBarLine x={props.x} height={baseBarLine.height}/>
            break;
        default:
            break;
    }
    return (
        <>
            {jsxBar}
        </>
    )
}
