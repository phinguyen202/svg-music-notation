import React from "react";
import { CoordinateModel } from "../../model/app.model";

interface AccProperties extends CoordinateModel {
}

function Flat(props: AccProperties) {
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <path d="M 1.2239019,9.3153099 V 3.1688778 c 0.1229568,-0.5885221 1.0333045,-1.66122 1.6653198,-1.70216 1.4219177,-0.09165 2.1316206,1.6838241 1.481556,3.4988999 C 3.8630043,6.3833187 2.3201742,8.2281378 1.2239019,9.3153099 Z M 5.7636648,6.4855337 C 6.3303175,5.9439457 7.5178289,4.4758117 7.3042756,2.6588148 7.0845888,0.7898188 5.4623186,-6.122e-5 4.4496335,-6.122e-5 c -0.9698102,0 -1.9646213,0.467195 -3.2257317,1.40372292 V -13.299644 L 0,-13.164836 V 11.700357 C 2.4403857,9.4630269 3.6616007,8.4958279 5.7636648,6.4866028 Z" />
        </g>
    );
}

function DoubleFlat(props: AccProperties) {
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <Flat x={0} y={0} />
            <Flat x={-9} y={0} />
        </g>
    );
}

function Natural(props: AccProperties) {
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <path d="M 1.3146058,9.006223 5.7456234,7.83243 V 1.311395 L 1.3146058,2.485181 Z M 5.7456234,10.914596 0,12.436728 V -8.8552072 L 1.3146058,-9 v 8.401853 L 7.060165,-2.1202723 V 18.855316 L 5.7456234,19 Z" />
        </g>
    );
}

function Sharp(props: AccProperties) {
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <path d="m 6.3588713,-9 -1.198899,0.1320592 v 7.4073571 l -2.2966586,0.609056 v -7.0989782 l -1.1988438,0.1320592 v 7.284733 L 0,-0.0927193 v 3.064529 L 1.6644699,2.5308153 V 9.075673 L 0,9.516667 v 3.063227 L 1.6644699,12.13885 V 19 l 1.1988438,-0.132115 v -7.048216 l 2.2966586,-0.608984 v 6.739562 l 1.198899,-0.132115 v -6.925361 l 1.674005,-0.443634 V 7.3859369 L 6.3588713,7.8295876 V 1.2847304 l 1.674005,-0.4436507 v -3.0632 l -1.674005,0.4436507 z M 5.1599723,1.6028253 V 8.146426 L 2.8633137,8.755411 V 2.2105541 Z" />
        </g>
    );
}

function DoubleSharp(props: AccProperties) {
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <path d="m 0,0 1.2204724,4.0944882 c 1.0337638,0 1.9860158,0.3385197 2.7607559,0.9053858 C 3.2064882,5.5669921 2.2541732,5.9055118 1.2204724,5.9055118 L 0,10 4.0944252,8.7794016 c 0,-1.0337638 0.3383307,-1.9858268 0.9055118,-2.7608189 0.5670551,0.7749921 0.9055118,1.7273071 0.9055118,2.7608189 L 9.999937,10 8.7794646,5.9055118 C 7.7455748,5.9055118 6.7935118,5.5672441 6.0186457,4.999874 6.7934488,4.4330079 7.7457638,4.0944882 8.7794646,4.0944882 L 9.999937,0 5.9054488,1.2203465 c 0,1.0337637 -0.3384567,1.9860787 -0.9055118,2.7610078 C 4.4328189,3.2064252 4.0944252,2.2541102 4.0944252,1.2203465 Z" />
        </g>
    );
}

interface AccProps extends CoordinateModel {
    name: string;
}
export function Accidental(props: AccProps): JSX.Element {
    let acc;
    switch (props.name) {
        case 'flat':
            acc = <Flat x={props.x} y={props.y} />
            break;
        case 'double flat':
            acc = <DoubleFlat x={props.x} y={props.y} />
            break;
        case 'natural':
            acc = <Natural x={props.x} y={props.y} />
            break;
        case 'sharp':
            acc = <Sharp x={props.x} y={props.y} />
            break;
        case 'double sharp':
            acc = <DoubleSharp x={props.x} y={props.y} />
            break;
        default:
            break;
    }
    return (
        <>
            {acc}
        </>);
}