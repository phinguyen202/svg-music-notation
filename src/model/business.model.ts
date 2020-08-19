import { Configuration } from './config';

export interface MusicNotationModel {
  staves: StaveModel[];
  width: string;
  height: string;
  config: Configuration;
}

export type ClefType = 'treble' | 'bass' | 'grand';
export interface StaveModel {
  measures: MeasureModel[];
  clef?: ClefType;
  keySigNumber?: number;
}

export type BarLineType = 'barline' | 'double' | 'bold double';
export interface MeasureModel {
  timeSignature?: TimeSignatureModel;
  notes: Array<NoteModel | RestModel>;
  barline?: BarLineType;
}

export interface TimeSignatureModel {
  upper: number;
  lower: number;
}

export type AccidentalType = 'flat' | 'sharp' | 'natural' | 'double flat' | 'double sharp';
export type DotType = 'single' | 'double' | 'triple';

export interface NoteModel extends NoteRestModel {
  note: string; // pitch
  accidental?: AccidentalType;
  dot?: DotType;
  tie?: boolean;
  lyrics?: string
}
export type DurationType = 'whole' | 'half' | 'quarter' | 'eighth' | 'sixteenth';

export interface NoteRestModel {
  duration: DurationType;
}

export interface RestModel extends NoteRestModel {}
