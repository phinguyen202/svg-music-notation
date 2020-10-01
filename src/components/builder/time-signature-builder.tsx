import React from 'react';
import { TimeSignatureLowerType, TimeSignatureUpperType } from '@model/business.model';
import { YCoordinate } from '@model/common.model';
import { BuilderRender } from '@builder/builder.model';
import TimeSignature from '@base/time-signature/time-signature';

interface Props extends YCoordinate {
    upper: TimeSignatureLowerType;
    lower: TimeSignatureUpperType;
}

export function timeSignatureBuilder({ upper, lower, y }: Props): BuilderRender {
    return {
        height: TimeSignature.height,
        width: TimeSignature.width,
        renderFunc: (x: number) => <TimeSignature.JSX x={x} y={y} upper={upper} lower={lower} />
    };
}
