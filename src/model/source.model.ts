import { DurationType, ClefType, DotType, AccidentalType, PitchType } from './business.model';

export interface SvgStaveSource {
    clef: ClefType;
    elements: SvgElement[];
}

export type SvgElementType = 'clef' | 'keySignature' | 'timeSignature' | 'note' | 'rest' | 'barline';
export type SvgElement = SvgNoteElement | SvgRestElement;

export interface SvgElementRoot {
    type: SvgElementType;
}

export interface SvgNoteElement extends SvgElementRoot{
    duration: DurationType,
    pitch: PitchType,
    dot?: DotType,
    accidental?: AccidentalType
}

export interface SvgRestElement extends SvgElementRoot{
    pitch: PitchType,
}