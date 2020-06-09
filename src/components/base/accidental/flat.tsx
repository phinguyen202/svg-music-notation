import { CoordinateModel } from "@model/common.model";``
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel { }

const width: number = 7.33; 
const height: number = 25;

function JSX({ x = 0, y = 0}: Props): JSX.Element {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <path d="M 1.2239019,9.3153099 V 3.1688778 c 0.1229568,-0.5885221 1.0333045,-1.66122 1.6653198,-1.70216 1.4219177,-0.09165 2.1316206,1.6838241 1.481556,3.4988999 C 3.8630043,6.3833187 2.3201742,8.2281378 1.2239019,9.3153099 Z M 5.7636648,6.4855337 C 6.3303175,5.9439457 7.5178289,4.4758117 7.3042756,2.6588148 7.0845888,0.7898188 5.4623186,-6.122e-5 4.4496335,-6.122e-5 c -0.9698102,0 -1.9646213,0.467195 -3.2257317,1.40372292 V -13.299644 L 0,-13.164836 V 11.700357 C 2.4403857,9.4630269 3.6616007,8.4958279 5.7636648,6.4866028 Z" />
        </g>
    );
}

interface Flat {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as Flat;