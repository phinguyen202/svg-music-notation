import { PitchType } from '@model/business.model';
import { NoteConfig } from '../stave.model';

export const TrebleMidOrder = 7;
export default new Map<PitchType, NoteConfig>([
    ['C4', {
        y: 55,
        isStemUp: true,
        order: 1,
        ledgers: [5]
    }],
    ['D4', {
        y: 50,
        isStemUp: true,
        order: 2
    }],
    ['E4', {
        y: 45,
        isStemUp: true,
        order: 3
    }],
    ['F4', {
        y: 40,
        isStemUp: true,
        order: 4
    }],
    ['G4', {
        y: 35,
        isStemUp: true,
        order: 5
    }],
    ['A4', {
        y: 30,
        isStemUp: true,
        order: 6
    }],
    ['B4', {
        y: 25,
        isStemUp: false,
        order: 7
    }],
    ['C5', {
        y: 20,
        isStemUp: false,
        order: 8
    }],
    ['D5', {
        y: 15,
        isStemUp: false,
        order: 9
    }],
    ['E5', {
        y: 10,
        isStemUp: false,
        order: 10
    }],
    ['F5', {
        y: 5,
        isStemUp: false,
        order: 11
    }],
    ['G5', {
        y: 0,
        isStemUp: false,
        order: 12
    }],
    ['A5', {
        y: -5,
        isStemUp: false,
        order: 13,
        ledgers: [5]
    }],
    ['B5', {
        y: -10,
        isStemUp: false,
        order: 14,
        ledgers: [10]
    }],
    ['C6', {
        y: -15,
        isStemUp: false,
        order: 15,
        ledgers: [5, 15]
    }],
]);
