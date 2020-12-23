import ReactDOM from 'react-dom';
import { SvgMusicNotation, SvgSheetConfig } from './index';
import React from 'react';
import { SvgStaveSource } from '@model/source.model';

const svgConfig: SvgSheetConfig = {
    height: '100%',
    width: '100%',
    editable: true
}

const treblestaveSource: SvgStaveSource = {
    clef: 'treble',
    elements: [
        { id: "1", type: 'clef', clef: 'treble' },
        { id: "2", type: 'keySignature', keySigNumber: 7 },
        { id: "3", type: 'timeSignature', upper: 4, lower: 4 },
        { id: "4", type: 'note', duration: 'sixteenth', pitch: 'C4', slurPair: 1 },
        { id: "5", type: 'note', duration: 'sixteenth', pitch: 'C6', slurPair: 1 },
        { id: "6", type: 'note', duration: 'quarter', pitch: 'D4', slurPair: 2 },
        { id: "7", type: 'note', duration: 'quarter', pitch: 'E4', slurPair: 3 },
        { id: "8", type: 'note', duration: 'quarter', pitch: 'F4', slurPair: 2 },
        { id: "9", type: 'note', duration: 'quarter', pitch: 'G4', slurPair: 3 },
        { id: "10", type: 'note', duration: 'quarter', pitch: 'D5', slurPair: 4 },
        { id: "11", type: 'note', duration: 'quarter', pitch: 'C4', slurPair: 4 },
        { id: "12", type: 'note', duration: 'quarter', pitch: 'C4' },
        { id: "13", type: 'note', duration: 'quarter', pitch: 'D5' },
        { id: "14", type: 'note', duration: 'quarter', pitch: 'E5' },
        { id: "15", type: 'note', duration: 'quarter', pitch: 'F5' },
        { id: "16", type: 'note', duration: 'quarter', pitch: 'G5' },
        { id: "17", type: 'note', duration: 'quarter', pitch: 'A5' },
        { id: "18", type: 'note', duration: 'quarter', pitch: 'B5' },
        { id: "19", type: 'note', duration: 'quarter', pitch: 'C6' },
        { id: "20", type: 'note', duration: 'quarter', pitch: 'A4' },
        { id: "21", type: 'note', duration: 'quarter', pitch: 'B4' },
        { id: "22", type: 'note', duration: 'quarter', pitch: 'C4' },
        { id: "23", type: 'note', duration: 'quarter', pitch: 'D5' },
        { id: "24", type: 'note', duration: 'quarter', pitch: 'E5' },
        { id: "25", type: 'note', duration: 'quarter', pitch: 'F5' },
        { id: "26", type: 'note', duration: 'quarter', pitch: 'G5' },
        { id: "27", type: 'note', duration: 'quarter', pitch: 'A5' },
        { id: "28", type: 'note', duration: 'quarter', pitch: 'B5' },
        { id: "29", type: 'note', duration: 'quarter', pitch: 'C6' },
        { id: "30", type: 'rest', duration: 'whole' },
        { id: "31", type: 'rest', duration: 'half' },
        { id: "32", type: 'rest', duration: 'quarter' },
        { id: "33", type: 'rest', duration: 'eighth' },
        { id: "34", type: 'rest', duration: 'sixteenth' },
        { id: "35", type: 'barline', barline: 'single' },
        { id: "36", type: 'note', duration: 'quarter', pitch: 'C4' },
        { id: "37", type: 'note', duration: 'quarter', pitch: 'C4' },
        { id: "38", type: 'rest', duration: 'sixteenth' },
        { id: "39", type: 'barline', barline: 'single' },
        { id: "40", type: 'note', duration: 'quarter', pitch: 'C4' },
    ]
};

const treblestaveSource0: SvgStaveSource = {
    clef: 'treble',
    elements: [
        { id: "1", type: 'clef', clef: 'treble' },
        { id: "2", type: 'keySignature', keySigNumber: 7 },
        { id: "3", type: 'timeSignature', upper: 4, lower: 4 },
        { id: "4", type: 'note', duration: 'sixteenth', pitch: 'C6', slurPair: 1 },
        { id: "5", type: 'note', duration: 'sixteenth', pitch: 'C4', slurPair: 1 },
        { id: "6", type: 'note', duration: 'eighth', pitch: 'C4' },
        { id: "7", type: 'note', duration: 'eighth', pitch: 'D4' },
        { id: "8", type: 'note', duration: 'eighth', pitch: 'E4' },
        { id: "9", type: 'note', duration: 'eighth', pitch: 'F4' },
        { id: "10", type: 'note', duration: 'eighth', pitch: 'G4' },
        { id: "11", type: 'note', duration: 'eighth', pitch: 'A4' },
        { id: "12", type: 'note', duration: 'eighth', pitch: 'B4' },
        { id: "13", type: 'note', duration: 'eighth', pitch: 'C5' },
        { id: "14", type: 'note', duration: 'eighth', pitch: 'D5' },
        { id: "15", type: 'note', duration: 'eighth', pitch: 'E5' },
        { id: "16", type: 'note', duration: 'eighth', pitch: 'F5' },
        { id: "17", type: 'note', duration: 'eighth', pitch: 'G5' },
        { id: "18", type: 'note', duration: 'eighth', pitch: 'A5' },
        { id: "19", type: 'note', duration: 'eighth', pitch: 'B5' },
        { id: "20", type: 'note', duration: 'eighth', pitch: 'C6' },
        { id: "21", type: 'rest', duration: 'sixteenth' },
        { id: "22", type: 'note', duration: 'whole', pitch: 'C5' },
        { id: "23", type: 'note', duration: 'quarter', pitch: 'D4' },
        { id: "24", type: 'rest', duration: 'eighth' },
        { id: "25", type: 'barline', barline: 'single' },
        { id: "26", type: 'note', duration: 'quarter', pitch: 'C4' },
        { id: "27", type: 'note', duration: 'quarter', pitch: 'C4' },
        { id: "28", type: 'rest', duration: 'sixteenth' },
        { id: "29", type: 'barline', barline: 'single' },
        { id: "30", type: 'note', duration: 'quarter', pitch: 'C4' },
        { id: "31", type: 'note', duration: 'eighth', pitch: 'C4' },
        { id: "32", type: 'note', duration: 'eighth', pitch: 'D4' },
        { id: "33", type: 'note', duration: 'eighth', pitch: 'E4' },
        { id: "34", type: 'note', duration: 'eighth', pitch: 'F4' },
        { id: "35", type: 'note', duration: 'eighth', pitch: 'G4' },
        { id: "36", type: 'note', duration: 'eighth', pitch: 'A4' },
        { id: "37", type: 'note', duration: 'eighth', pitch: 'B4' },
        { id: "38", type: 'note', duration: 'eighth', pitch: 'C5' },
        { id: "39", type: 'note', duration: 'eighth', pitch: 'D5' },
        { id: "40", type: 'note', duration: 'eighth', pitch: 'E5' },
        { id: "41", type: 'note', duration: 'eighth', pitch: 'F5' },
        { id: "42", type: 'note', duration: 'eighth', pitch: 'G5' },
        { id: "43", type: 'note', duration: 'eighth', pitch: 'A5' },
        { id: "44", type: 'note', duration: 'eighth', pitch: 'B5' },
        { id: "45", type: 'note', duration: 'eighth', pitch: 'C6' },
        { id: "46", type: 'rest', duration: 'sixteenth' },
        { id: "47", type: 'note', duration: 'whole', pitch: 'C5' },
        { id: "48", type: 'note', duration: 'quarter', pitch: 'D4' },
        { id: "49", type: 'rest', duration: 'eighth' },
        { id: "50", type: 'barline', barline: 'single' },
        { id: "51", type: 'note', duration: 'quarter', pitch: 'C4' },
        { id: "52", type: 'note', duration: 'quarter', pitch: 'C4' },
        { id: "53", type: 'rest', duration: 'sixteenth' },
        { id: "54", type: 'barline', barline: 'single' },
        { id: "55", type: 'note', duration: 'quarter', pitch: 'C4' },
    ]
};

const svgSource: SvgStaveSource[] = [treblestaveSource, treblestaveSource0];

ReactDOM.render(
    <SvgMusicNotation config={svgConfig} source={svgSource} />,
    document.getElementById('nolyric')
);