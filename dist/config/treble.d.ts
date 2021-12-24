import { NOTE_PITCH } from '@model/enum';
export interface NoteConfig {
    y: number;
    isStemUp: boolean;
    order: number;
    ledgers?: Array<number>;
}
export declare const noteMap: Map<NOTE_PITCH, NoteConfig>;
export declare const sharpOrder: NOTE_PITCH[];
export declare const flatOrder: NOTE_PITCH[];
