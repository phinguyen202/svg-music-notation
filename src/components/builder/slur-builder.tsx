import React from 'react';
import { BuilderRender } from '@builder/builder.model';
import Slur from '@base/slur/slur';

interface Props {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

export function slurBuilder(props: Props): BuilderRender & Props {
    return {
        ...Slur,
        ...props,
        renderFunc: function () {
            const { x1, y1, x2, y2, JSX } = this;
            return <JSX x1={x1} y1={y1} x2={x2} y2={y2} />
        }
    }
}