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
            <path d="M 7.8164802,9.3315293 C 4.4659422,10.74664 1.3024237,9.8194673 0.30146123,7.4499503 -0.69944487,5.0804923 0.84126673,2.1660273 4.191802,0.75069028 c 3.3504822,-1.415394 7.242065,-0.79547 8.242971,1.57404702 1.000906,2.369461 -1.267758,5.591399 -4.6182928,7.006792 z"/>
            <Stem.JSX up={props.isStemUp} />
            <path transform={props.isStemUp ? '' : `scale(-1,1) rotate(180 5.7 5)`} d="m 12.076271,-30 v 10.780751 l 0.931029,0.0021 c -0.04788,-0.0038 3.281295,1.170981 4.487907,2.403689 2.30337,2.353334 3.807649,5.922146 3.096942,9.886492 C 20.079849,-4.069345 19.166386,-2.27136 18.24941,0 l 0.658289,-0.06954 c 1.318139,-2.980759 3.50909,-7.198046 2.937903,-11.620154 -0.529419,-4.099068 -3.385629,-6.953998 -5.242445,-9.272145 -1.920664,-2.397778 -3.358806,-3.96373 -3.712738,-8.995332 z" />
        </g>
    );
}

interface EighthNote {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as EighthNote;