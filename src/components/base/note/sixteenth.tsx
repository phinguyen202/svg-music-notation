import { CoordinateModel } from '@model/common.model';
import React, { FunctionComponent } from 'react';
import Stem from './stem';
import HeadNote from './head';

interface Props extends CoordinateModel {
    isStemUp?: boolean;
}

const width: number = 12.67;
const height: number = 40;

function JSX({ x = 0, y = 0, isStemUp = true }: Props): JSX.Element {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <HeadNote.JSX />
            <Stem.JSX up={isStemUp} />
            <path transform={isStemUp ? '' : 'scale(-1,1) rotate(180 5.7 5)'} d='m 13.208101,-29.999998 -1.172101,0.0071 c 0,4.14154 0.04287,11.100109 0.04287,14.527927 l 1.129232,0.246552 c 1.314636,0.936575 3.041083,1.995936 4.31368,2.956479 1.768183,1.334617 2.96056,2.547871 3.446571,4.667922 0.425896,1.857982 0.01965,4.830127 -1.257783,7.588018 L 20.209582,0 c 1.100768,-2.402743 1.804513,-3.980906 1.618978,-7.317324 -0.05946,-1.06877 -0.367393,-2.095868 -0.844435,-3.084418 1.222914,-4.564472 0.371727,-7.819117 -4.288082,-13.09846 -1.091698,-1.236831 -3.487941,-2.39846 -3.487941,-6.499496 z m 0.01663,6.821336 c 1.450777,0.930551 3.411953,2.349022 4.462281,3.609985 1.850419,2.221536 3.264865,3.808572 2.765551,8.19033 -1.0467,-1.728728 -2.563235,-3.335159 -4.121746,-4.83431 -1.132413,-1.089279 -2.936675,-3.510969 -3.106086,-6.966005 z' />
        </g>
    );
}

interface SixteenthNote {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as SixteenthNote;