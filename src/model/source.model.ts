import { BarLineType, KeySignatureType, TimeSignatureLowerType, TimeSignatureUpperType } from '@model/business.model';
import { DurationType, ClefType, DotType, AccidentalType, PitchType } from './business.model';
import { Identity, CoordinateModel, TwoPointModel } from './common.model';
import { SlurDirection } from '@base/slur/slur';

export interface SvgStaveSource extends Identity<string>{
    elements: SvgElement[];
    slurs?: SlurElement[];
}

export type SvgElementType = 'clef' | 'keySignature' | 'timeSignature' | 'note' | 'rest' | 'barline';
export type SvgElement = SvgNoteElement | SvgRestElement | SvgClefElement | SvgBarlineElement | SvgKeySignatureElement | SvgTimeSignatureElement;

export interface SvgElementRoot extends Identity<string> {
    type: SvgElementType;
}

export interface SvgNoteElement extends SvgElementRoot {
    duration: DurationType;
    pitch: PitchType;
    dot?: DotType;
    accidental?: AccidentalType;
    beamGroup?: string;
    slurTo?: string;
}

export interface SvgRestElement extends SvgElementRoot {
    duration: DurationType;
}

export interface SvgClefElement extends SvgElementRoot {
    clef: ClefType;
}

export interface SvgBarlineElement extends SvgElementRoot {
    barline: BarLineType;
}

export interface SvgKeySignatureElement extends SvgElementRoot {
    keySigNumber: KeySignatureType;
}

export interface SvgTimeSignatureElement extends SvgElementRoot {
    upper: TimeSignatureLowerType;
    lower: TimeSignatureUpperType;
}

export interface SlurElement extends Identity<String>, TwoPointModel {
    from: string;
    to: string;
    place: SlurDirection;
}