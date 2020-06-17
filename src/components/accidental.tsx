import React from "react";
import { CoordinateModel } from "../model/common.model";
import { AccidentalType } from "../model/business.model";
import Flat from '@base/accidental/flat';
import DoubleFlat from '@base/accidental/double-flat';
import Natural from '@base/accidental/natural';
import Sharp from '@base/accidental/sharp';
import DoubleSharp from '@base/accidental/double-sharp';

export interface AccInterfaceProps extends CoordinateModel {
    name: AccidentalType;
}
export function Accidental(props: AccInterfaceProps): JSX.Element {
    let acc;
    switch (props.name) {
        case 'flat':
            acc = <Flat.JSX x={props.x} y={props.y} />
            break;
        case 'double flat':
            acc = <DoubleFlat.JSX x={props.x} y={props.y} />
            break;
        case 'natural':
            acc = <Natural.JSX x={props.x} y={props.y} />
            break;
        case 'sharp':
            acc = <Sharp.JSX x={props.x} y={props.y} />
            break;
        case 'double sharp':
            acc = <DoubleSharp.JSX x={props.x} y={props.y} />
            break;
        default:
            break;
    }
    return (
        <>
            {acc}
        </>);
}