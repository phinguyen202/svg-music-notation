import React from "react";
import { CoordinateModel } from "@model/common.model";
import { BarLineType } from "@model/business.model";
import BarLine from '@base/bar/barline';
import DoubleBarLine from '@base/bar/double-barline';
import BoldDoubleBarLine from '@base/bar/blod-double-barline';

interface Props extends CoordinateModel {
    type: BarLineType;
    height: number;
}

export function BarLineBuilder({x = 0, y = 0, type, height }: Props): JSX.Element {
    switch (type) {
        case 'barline':
            return <BarLine.JSX x={x} y={y} height={height}/>
        case 'double':
            return <DoubleBarLine.JSX x={x} y={y} height={height}/>
        case 'bold double':
            return <BoldDoubleBarLine.JSX x={x} y={y} height={height}/>
        default:
            return undefined;
    }
}
