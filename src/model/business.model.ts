import { Configuration } from './config';

export type ClefType = 'treble' | 'bass' | 'alto' | 'tenor';
export type BarLineType = 'barline' | 'double' | 'bold double';
export type AccidentalType = 'flat' | 'sharp' | 'natural' | 'double flat' | 'double sharp';
export type DurationType = 'whole' | 'half' | 'quarter' | 'eighth' | 'sixteenth';
export type DotType = 'single' | 'double' | 'triple';
export type PitchType = 'C4' | 'D4' | 'G4' | 'E4' | 'F4' | 'G4' | 'A4' | 'B4' | 'C5' | 'D5' | 'G5' | 'E5' | 'F5' | 'G5' | 'A5' | 'B5' | 'C6';

export interface MusicNotationModel {
  staves: StaveModel[];
  width: string;
  height: string;
  config: Configuration;
}

export interface StaveModel {
  measures: MeasureModel[];
  clef?: ClefType;
  keySigNumber?: number;
}

export interface MeasureModel {
  timeSignature?: TimeSignatureModel;
  notes: Array<NoteModel | RestModel>;
  barline?: BarLineType;
}

export interface TimeSignatureModel {
  upper: number;
  lower: number;
}


export interface NoteModel extends NoteRestModel {
  note: string; // pitch
  accidental?: AccidentalType;
  dot?: DotType;
  tie?: boolean;
  lyrics?: string
}

export interface NoteRestModel {
  duration: DurationType;
}

export interface RestModel extends NoteRestModel {}
