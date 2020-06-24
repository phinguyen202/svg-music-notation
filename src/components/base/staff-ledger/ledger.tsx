import React, { FunctionComponent } from "react";
import { CoordinateModel } from "@model/common.model";

interface Props extends CoordinateModel {
    width: number;
}

function JSX({ width, y = 0, x = 0 }: Props): JSX.Element {
    return (
        <line transform={`translate(${x}, ${y})`} stroke="black" strokeWidth="0.5" x2={width} y1={0.25} y2={0.25} />
    );
}

interface Ledger {
    JSX: FunctionComponent<Props>
}

export default {
    JSX
} as Ledger;