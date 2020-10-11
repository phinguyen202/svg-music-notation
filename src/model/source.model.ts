import { BarLineType, KeySignatureType, TimeSignatureLowerType, TimeSignatureUpperType } from '@model/business.model';
import { DurationType, ClefType, DotType, AccidentalType, PitchType } from './business.model';

export interface SvgStaveSource {
    clef: ClefType;
    elements: SvgElement[];
}

export type SvgElementType = 'clef' | 'keySignature' | 'timeSignature' | 'note' | 'rest' | 'barline';
export type SvgElement = SvgNoteElement | SvgRestElement | SvgClefElement | SvgBarlineElement | SvgKeySignatureElement | SvgTimeSignatureElement;

export interface SvgElementRoot {
    type: SvgElementType;
}

export interface SvgNoteElement extends SvgElementRoot{
    duration: DurationType;
    pitch: PitchType;
    dot?: DotType;
    accidental?: AccidentalType;
    beamGroup?: number;
    slurPair?: number;
}

export interface SvgRestElement extends SvgElementRoot{
    duration: DurationType;
}

export interface SvgClefElement extends SvgElementRoot{
    clef: ClefType;
}

export interface SvgBarlineElement extends SvgElementRoot{
    barline: BarLineType;
}

export interface SvgKeySignatureElement extends SvgElementRoot{
    keySigNumber: KeySignatureType;
}

export interface SvgTimeSignatureElement extends SvgElementRoot{
    upper: TimeSignatureLowerType;
    lower: TimeSignatureUpperType;
}