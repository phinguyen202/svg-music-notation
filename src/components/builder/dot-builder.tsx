import React from "react";
import { CoordinateModel } from "@model/common.model";
import SingleDot from "@base/dot/single";
import DoubleDot from "@base/dot/double";
import TripleDot from "@base/dot/triple";
import { DotType } from "@model/business.model";

interface Props extends CoordinateModel {
    type: DotType;
}

export function DotBuilder({x = 0, y = 0, type }: Props): JSX.Element {
    switch (type) {
        case 'single':
            return <SingleDot.JSX x={x} y={y}/>
        case 'double':
            return <DoubleDot.JSX x={x} y={y}/>
        case 'triple':
            return <TripleDot.JSX x={x} y={y}/>
        default:
            return undefined;
    }
}
