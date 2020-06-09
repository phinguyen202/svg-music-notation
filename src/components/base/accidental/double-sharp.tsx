import { CoordinateModel } from "@model/common.model";``
import React, { FunctionComponent } from "react";

interface Props extends CoordinateModel { }

const width: number = 10; 
const height: number = 10;

function JSX({ x = 0, y = 0}: Props): JSX.Element {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <path d="m 0,0 1.2204724,4.0944882 c 1.0337638,0 1.9860158,0.3385197 2.7607559,0.9053858 C 3.2064882,5.5669921 2.2541732,5.9055118 1.2204724,5.9055118 L 0,10 4.0944252,8.7794016 c 0,-1.0337638 0.3383307,-1.9858268 0.9055118,-2.7608189 0.5670551,0.7749921 0.9055118,1.7273071 0.9055118,2.7608189 L 9.999937,10 8.7794646,5.9055118 C 7.7455748,5.9055118 6.7935118,5.5672441 6.0186457,4.999874 6.7934488,4.4330079 7.7457638,4.0944882 8.7794646,4.0944882 L 9.999937,0 5.9054488,1.2203465 c 0,1.0337637 -0.3384567,1.9860787 -0.9055118,2.7610078 C 4.4328189,3.2064252 4.0944252,2.2541102 4.0944252,1.2203465 Z" />
        </g>
    );
}

interface DoubleSharp {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as DoubleSharp;