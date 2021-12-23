import { NOTE_PITCH } from '@model/enum';

export interface NoteConfig {
    y: number;
    isStemUp: boolean;
    order: number;
    ledgers?: Array<number>;
}

export const noteMap: Map<NOTE_PITCH, NoteConfig> = new Map<NOTE_PITCH, NoteConfig>([
    [NOTE_PITCH.C4, {
        y: 1.25,
        isStemUp: true,
        order: 1,
        ledgers: [0]
    }],
    [NOTE_PITCH.D4, {
        y: 1.125,
        isStemUp: true,
        order: 2
    }],
    [NOTE_PITCH.E4, {
        y: 1,
        isStemUp: true,
        order: 3
    }],
    [NOTE_PITCH.F4, {
        y: 0.875,
        isStemUp: true,
        order: 4
    }],
    [NOTE_PITCH.G4, {
        y: 0.75,
        isStemUp: true,
        order: 5
    }],
    [NOTE_PITCH.A4, {
        y: 0.625,
        isStemUp: true,
        order: 6
    }],
    [NOTE_PITCH.B4, {
        y: 0.5,
        isStemUp: false,
        order: 7
    }],
    [NOTE_PITCH.C5, {
        y: 0.375,
        isStemUp: false,
        order: 8
    }],
    [NOTE_PITCH.D5, {
        y: 0.25,
        isStemUp: false,
        order: 9
    }],
    [NOTE_PITCH.E5, {
        y: 0.125,
        isStemUp: false,
        order: 10
    }],
    [NOTE_PITCH.F5, {
        y: 0,
        isStemUp: false,
        order: 11
    }],
    [NOTE_PITCH.G5, {
        y: -0.125,
        isStemUp: false,
        order: 12
    }],
    [NOTE_PITCH.A5, {
        y: -0.25,
        isStemUp: false,
        order: 13,
        ledgers: [0]
    }],
    [NOTE_PITCH.B5, {
        y: -0.375,
        isStemUp: false,
        order: 14,
        ledgers: [0.125]
    }],
    [NOTE_PITCH.C6, {
        y: -0.5,
        isStemUp: false,
        order: 15,
        ledgers: [0, 0.25]
    }]
])

export const sharpOrder = [
    NOTE_PITCH.F5,
    NOTE_PITCH.C5,
    NOTE_PITCH.G5,
    NOTE_PITCH.D5,
    NOTE_PITCH.A4,
    NOTE_PITCH.E5,
    NOTE_PITCH.B4
];

export const flatOrder = [
    NOTE_PITCH.B4,
    NOTE_PITCH.E5,
    NOTE_PITCH.A4,
    NOTE_PITCH.D5,
    NOTE_PITCH.G4,
    NOTE_PITCH.C5,
    NOTE_PITCH.F4
];