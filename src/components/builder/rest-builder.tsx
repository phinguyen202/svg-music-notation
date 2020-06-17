import React from "react";
import { CoordinateModel } from "@model/common.model";
import { DurationType } from "@model/business.model";
import WholeHalfRest from "@base/rest/whole-half";
import QuarterRest from "@base/rest/quarter";
import EighthRest from "@base/rest/eighth";
import SixteenthRest from "@base/rest/sixteenth";

interface Props extends CoordinateModel {
    duration: DurationType;
}

export function RestBuilder({ duration, x = 0, y = 0 }: Props): JSX.Element {
    switch (duration) {
        case 'whole':
            return <WholeHalfRest.JSX x={x} y={y}/>
        case 'half':
            return <WholeHalfRest.JSX x={x} y={y}/>
        case 'quarter':
            return <QuarterRest.JSX x={x} y={y}/>
        case 'eighth':
            return <EighthRest.JSX x={x} y={y}/>
        case 'sixteenth':
            return <SixteenthRest.JSX x={x} y={y}/>
        default:
            return undefined;
    }
}
