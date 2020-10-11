import { SvgElementType } from '@model/source.model';

// for edit mode
const distanceRatio = 10;

export interface DistanceType {
    type: 'static' | 'dynamic';
    unit: number;
}

export const distanceMap: Map<SvgElementType, DistanceType> = new Map<SvgElementType, DistanceType>([
    ['clef', { type: 'static', unit: 10 }],
    ['keySignature', { type: 'static', unit: 10 }],
    ['timeSignature', { type: 'static', unit: 10 }],
    ['note', { type: 'dynamic', unit: 5 }],
    ['rest', { type: 'dynamic', unit: 5 }],
    ['barline', { type: 'dynamic', unit: 5 }],
]);

export const lastEleDisUnit: number = 5;