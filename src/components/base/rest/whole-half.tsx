import { CoordinateModel } from "@model/common.model";
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel { }

const width: number = 4;
const height: number = 12;

function JSX({ x = 0, y = 0 }: Props): JSX.Element {
    return (
        <path transform={`translate(${x}, ${y})`} d="M 0,0 V 4 H 12 L 12,0 z" fill="black" />
    );
}

interface WholeHalfRest {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as WholeHalfRest;