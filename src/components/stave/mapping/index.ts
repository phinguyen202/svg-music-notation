export { default as RestMap } from './rest.map';
import TrebleNoteMap from './treble.note.map';
import TrebleKeySignatureMap from './treble.key-signature.map';
import { ClefType, PitchType } from '@model/business.model';
import { NoteConfig } from '../stave.model';

export function findNoteMap(clef: ClefType): Map<PitchType, NoteConfig> {
    if (clef === 'treble') {
        return TrebleNoteMap;
    }
}

export function findKeySignatureMap(clef: ClefType): Map<string, number[]> {
    if (clef === 'treble') {
        return TrebleKeySignatureMap;
    }
}