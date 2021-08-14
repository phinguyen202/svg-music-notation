export interface MusicXML {
    "score-partwise": ScorePartwise;
}

export interface ScorePartwise {
    "part-list": PartList; // lists the different musical parts in the score
    part: Part;
    _version: string;
}

export interface Part {
    measure: Measure;
    _id: string;
}

export interface Measure {
    attributes: Attributes;
    note: Note;
    _number: string;
}

export interface Attributes {
    divisions: string;
    key: Key;
    time: Time;
    clef: Clef;
}

export interface Clef {
    sign: string;
    line: string;
}

export interface Key {
    fifths: string;
}

export interface Time {
    beats: string;
    "beat-type": string;
}

export interface Note {
    pitch: Pitch;
    duration: string;
    type: string;
}

export interface Pitch {
    step: string;
    octave: string;
}

export interface PartList {
    "score-part": ScorePart;
}

export interface ScorePart {
    "part-name": string;
    _id: string;
}
