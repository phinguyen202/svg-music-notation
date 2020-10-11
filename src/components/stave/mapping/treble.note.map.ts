import { PitchType } from '@model/business.model';
import { NoteConfig } from '../stave.model';

export default new Map<PitchType, NoteConfig>([
    ['C4', {
        y: 55,
        isStemUp: true,
        ledgers: [5]
    }],
    ['D4', {
        y: 50,
        isStemUp: true
    }],
    ['E4', {
        y: 45,
        isStemUp: true
    }],
    ['F4', {
        y: 40,
        isStemUp: true
    }],
    ['G4', {
        y: 35,
        isStemUp: true
    }],
    ['A4', {
        y: 30,
        isStemUp: true
    }],
    ['B4', {
        y: 25,
        isStemUp: false
    }],
    ['C5', {
        y: 20,
        isStemUp: false
    }],
    ['D5', {
        y: 15,
        isStemUp: false
    }],
    ['E5', {
        y: 10,
        isStemUp: false
    }],
    ['F5', {
        y: 5,
        isStemUp: false
    }],
    ['G5', {
        y: 0,
        isStemUp: false
    }],
    ['A5', {
        y: -5,
        isStemUp: false,
        ledgers: [5]
    }],
    ['B5', {
        y: -10,
        isStemUp: false,
        ledgers: [10]
    }],
    ['C6', {
        y: -15,
        isStemUp: false,
        ledgers: [5, 15]
    }],
]);
