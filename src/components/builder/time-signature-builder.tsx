import React from 'react';
import { TimeSignatureLowerType, TimeSignatureUpperType } from '@model/business.model';
import { CoordinateModel } from '@model/common.model';
import { TypeBuilderRender } from '@builder/builder.model';
import TimeSignature from '@base/time-signature/time-signature';
import { SvgTimeSignatureElement } from '@model/source.model';

interface Props extends SvgTimeSignatureElement, CoordinateModel { }

export function timeSignatureBuilder(props: Props): TypeBuilderRender & Props {
    return {
        ...TimeSignature,
        ...props,
        renderFunc: function () {
            const { x, y, upper, lower } = this;
            return <TimeSignature.JSX x={x} y={y} upper={upper} lower={lower} />
        }
    };
}
