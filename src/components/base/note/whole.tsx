import { CoordinateModel } from "@model/common.model";
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel { }

const width: number = 14.14;
const height: number = 10;

function JSX(props: Props): JSX.Element {
    return (
        <path transform={`translate(${props.x}, ${props.y})`} d="M 7.0702175,0 C 3.1653113,0 -1.6899323e-4,2.238723 0,5.000169 1.1300677e-4,7.761458 3.1654804,10 7.0702175,10 10.974955,10 14.140379,7.761458 14.140492,5.000169 14.140605,2.238723 10.975124,0 7.0702175,0 Z M 10.176494,4.165916 C 10.831005,6.609168 10.018598,8.058161 8.3032128,8.51792 6.5878281,8.97751 4.6189028,8.273654 3.9642228,5.830408 3.3095426,3.387156 4.2884398,1.747522 6.0039371,1.287966 c 0.2072693,-0.05571 0.4027982,-0.05315 0.4027982,-0.05315 1.5604966,0 3.2059145,0.826823 3.7697587,2.931097 z" />
    );
}

interface WholeNote {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as WholeNote;