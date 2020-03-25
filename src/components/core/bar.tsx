import React, { useEffect } from "react";
import { XCoordinate, HeightDemension } from "../../model/app.model";

function BarLine(props: BarProperties) {
    return (
        <line transform={`translate(${props.x}, ${0})`} y2={props.height} stroke="black"/>
    );
}

function DoubleBarLine(props: BarProperties) {
    return (
        <g transform={`translate(${300}, ${0})`}>
            <line y2={props.height} stroke="black"/>
            <line x1="-5" x2="-5" y2={props.height} stroke="black"/>
        </g>
    );
}

function BoldDoubleBarLine(props: BarProperties) {
    return (
        <g transform={`translate(${350}, ${0})`}>
            <line y2={props.height} stroke="black" strokeWidth="4"/>
            <line x1="-5" x2="-5" y2={props.height} stroke="black"/>
        </g>
    );
}

interface BarLineMapProps extends HeightDemension{
}

const restMap: Map<string, BarLineMapProps> = new Map<string, BarLineMapProps>([
    ['treble', {
        height: 40
    }]
]);

export function Bar(props: BarLineProps & XCoordinate) {
    const baseBarLine = restMap.get('treble');
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

interface BarLineProps {
    type: string;
}

interface BarProperties extends XCoordinate, HeightDemension{
}