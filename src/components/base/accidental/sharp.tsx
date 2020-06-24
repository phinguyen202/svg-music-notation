import { CoordinateModel } from "@model/common.model";``
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel { }

const width: number = 8.33; 
const height: number = 28;

function JSX({ x = 0, y = 0}: Props): JSX.Element {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <path d="m 6.3588713,-9 -1.198899,0.1320592 v 7.4073571 l -2.2966586,0.609056 v -7.0989782 l -1.1988438,0.1320592 v 7.284733 L 0,-0.0927193 v 3.064529 L 1.6644699,2.5308153 V 9.075673 L 0,9.516667 v 3.063227 L 1.6644699,12.13885 V 19 l 1.1988438,-0.132115 v -7.048216 l 2.2966586,-0.608984 v 6.739562 l 1.198899,-0.132115 v -6.925361 l 1.674005,-0.443634 V 7.3859369 L 6.3588713,7.8295876 V 1.2847304 l 1.674005,-0.4436507 v -3.0632 l -1.674005,0.4436507 z M 5.1599723,1.6028253 V 8.146426 L 2.8633137,8.755411 V 2.2105541 Z" />
        </g>
    );
}

interface Sharp {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as Sharp;