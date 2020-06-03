import { CoordinateModel } from "@model/common.model";
import React, { FunctionComponent } from "react";
import Stem from "./stem";

interface Props extends CoordinateModel {
    isStemUp: boolean;
 }

const width: number = 12.62;
const height: number = 39.89;

function JSX(props: Props): JSX.Element {
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <path d="M 7.6994759,-0.01613342 C 6.5595355,-0.00177122 5.343616,0.24673268 4.1918261,0.73382688 0.84116652,2.1494567 -0.69945302,5.0635671 0.30148652,7.4331346 1.3028566,9.8027059 4.465956,10.730085 7.8166058,9.3147348 11.167125,7.899105 13.436125,4.6771558 12.435045,2.3075846 11.777945,0.75282658 9.8763457,-0.04870542 7.6994759,-0.01570262 Z M 9.3053757,1.7487663 c 0.8942293,0 1.5374793,0.24 1.8257493,0.6713878 0.70567,1.0585021 -0.855669,2.9913904 -3.4857893,4.3163115 C 5.0147759,8.0606761 2.3106564,8.2766534 1.6054063,7.217864 0.89973672,6.1593543 2.4610763,4.2264773 5.0911957,2.9015563 6.5446858,2.1701648 8.0965958,1.7444765 9.3053757,1.7487663 Z" />
            <Stem.JSX up={props.isStemUp} />
        </g>
    );
}

interface HalfNote {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as HalfNote;