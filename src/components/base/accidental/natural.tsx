import { CoordinateModel } from "@model/common.model";``
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel { }

const width: number = 7.06; 
const height: number = 28;

function JSX({ x = 0, y = 0}: Props): JSX.Element {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <path d="M 1.3146058,9.006223 5.7456234,7.83243 V 1.311395 L 1.3146058,2.485181 Z M 5.7456234,10.914596 0,12.436728 V -8.8552072 L 1.3146058,-9 v 8.401853 L 7.060165,-2.1202723 V 18.855316 L 5.7456234,19 Z" />
        </g>
    );
}

interface Natural {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as Natural;