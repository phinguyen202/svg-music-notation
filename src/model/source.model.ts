import { DurationType } from './business.model';

export interface SvgStaveSource {
    clef: 'treble' | 'bass' | 'alto' | 'tenor';
    elements: SvgElement[];
}

export interface SvgElement {
    duration: DurationType,
    pitch: 'C4' | 'D4'
}