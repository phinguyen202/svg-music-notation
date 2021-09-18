import { NOTE_PITCH } from "@model/enum";

export interface NoteConfig {
    y: string;
    isStemUp: boolean;
    order: number;
    ledgers?: Array<number>;
}

export const noteMap: Map<NOTE_PITCH, NoteConfig> = new Map<NOTE_PITCH, NoteConfig>([
    [NOTE_PITCH.C4, {
        y: '1.25em',
        isStemUp: true,
        order: 1,
        ledgers: [5]
    }],
    [NOTE_PITCH.D4, {
        y: '1.125em',
        isStemUp: true,
        order: 2
    }],
    [NOTE_PITCH.E4, {
        y: '1em',
        isStemUp: true,
        order: 3
    }],
    [NOTE_PITCH.F4, {
        y: '0.875em',
        isStemUp: true,
        order: 4
    }],
    [NOTE_PITCH.G4, {
        y: '0.75em',
        isStemUp: true,
        order: 5
    }],
    [NOTE_PITCH.A4, {
        y: '0.625em',
        isStemUp: true,
        order: 6
    }],
    [NOTE_PITCH.B4, {
        y: '0.5em',
        isStemUp: false,
        order: 7
    }],
    [NOTE_PITCH.C5, {
        y: '0.375em',
        isStemUp: false,
        order: 8
    }],
    [NOTE_PITCH.D5, {
        y: '0.25em',
        isStemUp: false,
        order: 9
    }],
    [NOTE_PITCH.E5, {
        y: '0.125em',
        isStemUp: false,
        order: 10
    }],
    [NOTE_PITCH.F5, {
        y: '0',
        isStemUp: false,
        order: 11
    }],
    [NOTE_PITCH.G5, {
        y: '-0.125em',
        isStemUp: false,
        order: 12
    }],
    [NOTE_PITCH.A5, {
        y: '-0.25em',
        isStemUp: false,
        order: 13,
        ledgers: [5]
    }],
    [NOTE_PITCH.B5, {
        y: '-0.375em',
        isStemUp: false,
        order: 14,
        ledgers: [10]
    }],
    [NOTE_PITCH.C6, {
        y: '-0.5em',
        isStemUp: false,
        order: 15,
        ledgers: [5, 15]
    }]
])

export const sharpOrder = ['F5', 'C5', 'G5', 'D5', 'A4', 'E5', 'B4'];
export const flatOrder = ['B4', 'E5', 'A4', 'D5', 'G4', 'C5', 'F4'];