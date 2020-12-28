import React from 'react';
import { BuilderRender } from '@builder/builder.model';
import Slur, { SlurDirection } from '@base/slur/slur';
import { Identity, TwoPointModel } from '@model/common.model';

interface SlurBuilderProps extends Identity<String>, TwoPointModel {
    place: SlurDirection;
}

export function slurBuilder(props: SlurBuilderProps): BuilderRender & SlurBuilderProps {
    return {
        ...Slur,
        ...props,
        renderFunc: function () {
            const { id, x1, y1, x2, y2, place, JSX } = this;
            return <JSX key={id} x1={x1} y1={y1} x2={x2} y2={y2} place={place} />
        }
    }
}