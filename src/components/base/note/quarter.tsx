import { CoordinateModel } from "@model/common.model";
import React, { FunctionComponent } from "react";
import Stem from "./stem";

interface Props extends CoordinateModel {
    isStemUp: boolean;
}

const width: number = 12.67;
const height: number = 40;

function JSX(props: Props): JSX.Element {
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <path d="M 7.8164802,9.3315293 C 4.4659422,10.74664 1.3024237,9.8194673 0.30146123,7.4499503 -0.69944487,5.0804923 0.84126673,2.1660273 4.191802,0.75069028 c 3.3504822,-1.415394 7.242065,-0.79547 8.242971,1.57404702 1.000906,2.369461 -1.267758,5.591399 -4.6182928,7.006792 z" />
            <Stem.JSX up={props.isStemUp} />
        </g>
    );
}

interface QuarterNote {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as QuarterNote;