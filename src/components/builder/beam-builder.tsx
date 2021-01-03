import React from 'react';
import { BuilderRender } from '@builder/builder.model';
import { Identity, TwoPointModel, CoordinateModel, HeightDimension } from '@model/common.model';
import { dx, DxModel, intersectingPointOf2Dxs } from '@utils/coordinatesPlane';

export interface BeamElement extends CoordinateModel, HeightDimension { }

interface BeamBuilderProps extends Identity<String> {
    isUp: boolean;
    elements: BeamElement[];
}

const stemWidth: number = 1;
const beamHeight: number = 4;
export function beamBuilder(props: BeamBuilderProps): BuilderRender & BeamBuilderProps {
    return {
        height: 0,
        width: 0,
        ...props,
        renderFunc: function () {
            const { id, isUp, elements } = this;
            if (elements.length < 2) { return; }

            const [first, ...rest] = elements;
            const last = rest.pop();

            let beamPath;
            if (isUp) {
                // finding dx that goes through under line of beam
                const { a, b }: DxModel = dx({ x: first.x, y: first.y - first.height + beamHeight }, { x: last.x - stemWidth, y: last.y - last.height + beamHeight });
                const restStemPath = rest.reduce((d: string, { x, y }: BeamElement) => {
                    d = d.concat(` L ${x - stemWidth},${a*(x - stemWidth) +b} L ${x - stemWidth},${y} L ${x},${y} L ${x},${a*x +b}`);
                    return d;
                }, '');
                beamPath = `M ${last.x - stemWidth},${last.y} h ${stemWidth} v ${-last.height} L ${first.x - stemWidth},${first.y - first.height} v ${first.height} h ${stemWidth} v ${-first.height + beamHeight} ${restStemPath} L ${last.x - stemWidth},${last.y - last.height + beamHeight} z`;
            }

            // return <path key={id} d={beamPath} fill='none' stroke='black' strokeWidth={0.5} />
            return <path key={id} d={beamPath} fill='black' />
        }
    }
}