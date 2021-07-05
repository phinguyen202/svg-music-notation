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
            // validation
            if (elements.length < 2) { return; }
            // build
            const [first, ...rest] = elements;
            const last = rest.pop();

            const primaryBeamDx: DxModel = dx({ x: first.x, y: first.y - first.height + beamHeight }, { x: last.x - stemWidth, y: last.y - last.height + beamHeight });
            let beam2ndDxTop, beam2ndDxBottom;
            let beam3rdDxTop, beam3rdDxBottom;
            // loop and build
            const numberOfNote = elements.length - 1;
            // eslint-disable-next-line prefer-const
            for (let [cur, index] of elements.entries()) {
                // convert to Head
                // cur = { ...cur, ...head };
                if (!index) { // first
                    const next = elements[index + 1];
                } else if (index === numberOfNote) { // last
                    const previous = elements[numberOfNote - 1];
                } else {
                    const next = elements[index + 1];
                    const previous = elements[numberOfNote - 1];
                }
            }

            let beamPath;
            if (isUp) {
                // finding dx that goes through under line of beam
                const { a, b }: DxModel = dx({ x: first.x, y: first.y - first.height + beamHeight }, { x: last.x - stemWidth, y: last.y - last.height + beamHeight });
                const restStemPath = rest.reduce((d: string, { x, y }: BeamElement) => {
                    d = d.concat(` L ${x - stemWidth},${a * (x - stemWidth) + b} L ${x - stemWidth},${y} L ${x},${y} L ${x},${a * x + b}`);
                    return d;
                }, '');
                beamPath = `M ${last.x - stemWidth},${last.y} h ${stemWidth} v ${-last.height} L ${first.x - stemWidth},${first.y - first.height} v ${first.height} h ${stemWidth} v ${-first.height + beamHeight} ${restStemPath} L ${last.x - stemWidth},${last.y - last.height + beamHeight} z`;
            } else {

            }

            // return <path key={id} d={beamPath} fill='none' stroke='black' strokeWidth={0.5} />
            return <path key={id} d={beamPath} fill='black' />
        }
    }
}