import BarLine from "@base/bar/barline";
import BoldDoubleBarLine from '@base/bar/blod-double-barline';
import DoubleBarLine from "@base/bar/double-barline";
import { HeightDemension, XCoordinate } from "@model/common.model";
import React from "react";

interface BarLineConfig extends HeightDemension{
}

const barLineConfigMap: Map<string, BarLineConfig> = new Map<string, BarLineConfig>([
    ['treble', {
        height: 40
    }]
]);

export interface BarInterfaceProps extends XCoordinate {
    type: string;
}

export function Bar(props: BarInterfaceProps) {
    const baseBarLine = barLineConfigMap.get('treble');
    let jsxBar;
    switch (props.type) {
        case 'barline':
            jsxBar = <BarLine.JSX x={props.x} y={0} height={baseBarLine.height}/>
            break;
        case 'double':
            jsxBar = <DoubleBarLine.JSX x={props.x} y={0} height={baseBarLine.height}/>
            break;
        case 'bold double':
            jsxBar = <BoldDoubleBarLine.JSX x={props.x} y={0} height={baseBarLine.height}/>
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
