import React, { FunctionComponent } from 'react';

interface Props {
    up: boolean;
 }

const height: number = 32.91;

function JSX({ up = true}: Props): JSX.Element {
    return up ? <path stroke='black' strokeWidth='1' d='M 12.076271,2.9131353 V -30' /> : <path stroke='black' strokeWidth='1' d='M 0.6,7 V 39.9131353' />;
}

interface Stem {
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    height,
    JSX
} as Stem;