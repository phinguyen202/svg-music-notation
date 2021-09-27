export interface MusicXML {
    "score-partwise": ScorePartwise;
}

export interface ScorePartwise {
    "part-list": PartList; // lists the different musical parts in the score
    part: Part;
    _version: string;
}

export interface Part {
    measure: Measure | Measure[];
    _id: string;
}

export interface Measure {
    attributes: Attributes;
    note: Note | Note[];
    _number: string;
}

export interface Attributes {
    divisions: string;
    key: Key;
    time: Time;
    clef: Clef;
}

export type SignType = 'G' | 'F' | 'C' | 'percussion' | 'TAB';
export interface Clef {
    sign: SignType;
    line: string;
}

export type FifthsType = '-7' | '-6' | '-5' | '-4' | '-3' | '-2' | '-1' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type TimeSignatureLowerType = 2 | 3 | 4 | 6;
export type TimeSignatureUpperType = 2 | 4 | 8;
export interface Key {
    fifths: FifthsType;
}

export interface Time {
    beats: string;
    'beat-type': string;
}

export interface Note {
    pitch: Pitch;
    duration: string;
    type?: string;
}

export type Step = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type Octave = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export interface Pitch {
    step: Step;
    octave: Octave;
}

export interface PartList {
    "score-part": ScorePart;
}

export interface ScorePart {
    "part-name": string;
    _id: string;
}
