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
        { type: 'clef', clef: 'treble' },
        { type: 'keySignature', keySigNumber: 7 },
        { type: 'timeSignature', upper: 4, lower: 4 },
        { type: 'note', duration: 'sixteenth', pitch: 'C4', slurPair: 1 },
        { type: 'note', duration: 'sixteenth', pitch: 'C6', slurPair: 1 },
        { type: 'note', duration: 'quarter', pitch: 'D4', slurPair: 2 },
        { type: 'note', duration: 'quarter', pitch: 'E4', slurPair: 3 },
        { type: 'note', duration: 'quarter', pitch: 'F4' },
        { type: 'note', duration: 'quarter', pitch: 'G4', slurPair: 3 },
        { type: 'note', duration: 'quarter', pitch: 'D5', slurPair: 4 },
        { type: 'note', duration: 'quarter', pitch: 'C4', slurPair: 4 },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'note', duration: 'quarter', pitch: 'D5' },
        { type: 'note', duration: 'quarter', pitch: 'E5' },
        { type: 'note', duration: 'quarter', pitch: 'F5' },
        { type: 'note', duration: 'quarter', pitch: 'G5' },
        { type: 'note', duration: 'quarter', pitch: 'A5' },
        { type: 'note', duration: 'quarter', pitch: 'B5' },
        { type: 'note', duration: 'quarter', pitch: 'C6' },
        { type: 'note', duration: 'quarter', pitch: 'A4' },
        { type: 'note', duration: 'quarter', pitch: 'B4' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'note', duration: 'quarter', pitch: 'D5' },
        { type: 'note', duration: 'quarter', pitch: 'E5' },
        { type: 'note', duration: 'quarter', pitch: 'F5' },
        { type: 'note', duration: 'quarter', pitch: 'G5' },
        { type: 'note', duration: 'quarter', pitch: 'A5' },
        { type: 'note', duration: 'quarter', pitch: 'B5' },
        { type: 'note', duration: 'quarter', pitch: 'C6' },
        { type: 'rest', duration: 'sixteenth' },
        { type: 'note', duration: 'whole', pitch: 'C5' },
        { type: 'note', duration: 'quarter', pitch: 'D4' },
        { type: 'rest', duration: 'sixteenth' },
        { type: 'barline', barline: 'single' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'rest', duration: 'sixteenth' },
        { type: 'barline', barline: 'single' },
        { type: 'note', duration: 'quarter', pitch: 'C4', slurPair: 2 },
    ]
};

const treblestaveSource0: SvgStaveSource = {
    clef: 'treble',
    elements: [
        { type: 'clef', clef: 'treble' },
        { type: 'keySignature', keySigNumber: 7 },
        { type: 'timeSignature', upper: 4, lower: 4 },
        { type: 'note', duration: 'sixteenth', pitch: 'C6', slurPair: 1 },
        { type: 'note', duration: 'sixteenth', pitch: 'C4', slurPair: 1 },
        { type: 'note', duration: 'eighth', pitch: 'C4' },
        { type: 'note', duration: 'eighth', pitch: 'D4' },
        { type: 'note', duration: 'eighth', pitch: 'E4' },
        { type: 'note', duration: 'eighth', pitch: 'F4' },
        { type: 'note', duration: 'eighth', pitch: 'G4' },
        { type: 'note', duration: 'eighth', pitch: 'A4' },
        { type: 'note', duration: 'eighth', pitch: 'B4' },
        { type: 'note', duration: 'eighth', pitch: 'C5' },
        { type: 'note', duration: 'eighth', pitch: 'D5' },
        { type: 'note', duration: 'eighth', pitch: 'E5' },
        { type: 'note', duration: 'eighth', pitch: 'F5' },
        { type: 'note', duration: 'eighth', pitch: 'G5' },
        { type: 'note', duration: 'eighth', pitch: 'A5' },
        { type: 'note', duration: 'eighth', pitch: 'B5' },
        { type: 'note', duration: 'eighth', pitch: 'C6' },
        { type: 'rest', duration: 'sixteenth' },
        { type: 'note', duration: 'whole', pitch: 'C5' },
        { type: 'note', duration: 'quarter', pitch: 'D4' },
        { type: 'rest', duration: 'eighth' },
        { type: 'barline', barline: 'single' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'rest', duration: 'sixteenth' },
        { type: 'barline', barline: 'single' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'note', duration: 'eighth', pitch: 'C4' },
        { type: 'note', duration: 'eighth', pitch: 'D4' },
        { type: 'note', duration: 'eighth', pitch: 'E4' },
        { type: 'note', duration: 'eighth', pitch: 'F4' },
        { type: 'note', duration: 'eighth', pitch: 'G4' },
        { type: 'note', duration: 'eighth', pitch: 'A4' },
        { type: 'note', duration: 'eighth', pitch: 'B4' },
        { type: 'note', duration: 'eighth', pitch: 'C5' },
        { type: 'note', duration: 'eighth', pitch: 'D5' },
        { type: 'note', duration: 'eighth', pitch: 'E5' },
        { type: 'note', duration: 'eighth', pitch: 'F5' },
        { type: 'note', duration: 'eighth', pitch: 'G5' },
        { type: 'note', duration: 'eighth', pitch: 'A5' },
        { type: 'note', duration: 'eighth', pitch: 'B5' },
        { type: 'note', duration: 'eighth', pitch: 'C6' },
        { type: 'rest', duration: 'sixteenth' },
        { type: 'note', duration: 'whole', pitch: 'C5' },
        { type: 'note', duration: 'quarter', pitch: 'D4' },
        { type: 'rest', duration: 'eighth' },
        { type: 'barline', barline: 'single' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'rest', duration: 'sixteenth' },
        { type: 'barline', barline: 'single' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
    ]
};

const svgSource: SvgStaveSource[] = [treblestaveSource, treblestaveSource0];

ReactDOM.render(
    <SvgMusicNotation config={svgConfig} source={svgSource} />,
    document.getElementById('nolyric')
);