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
        { type: 'clef', kind: 'treble' },
        { type: 'keySignature', keySigNumber: 7 },
        { type: 'timeSignature', upper: 4, lower: 4 },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'rest', duration: 'sixteenth'},
        { type: 'note', duration: 'whole', pitch: 'C5' },
        { type: 'note', duration: 'quarter', pitch: 'D4' },
        { type: 'rest', duration: 'sixteenth'},
        { type: 'barline', kind: 'single' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'note', duration: 'quarter', pitch: 'C4' },
        { type: 'rest', duration: 'sixteenth'},
        { type: 'barline', kind: 'single' },
    ]
};

const svgSource: SvgStaveSource[] = [treblestaveSource, treblestaveSource];

ReactDOM.render(
    <SvgMusicNotation config={svgConfig} source={svgSource} />,
    document.getElementById('nolyric')
);