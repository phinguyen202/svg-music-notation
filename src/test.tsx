import ReactDOM from 'react-dom';
import { SvgMusicNotation, SvgMusicNotationProp, SvgSheetConfig } from './index';
import React from 'react';
import { SvgStaveSource } from '@model/source.model';

const svgConfig: SvgSheetConfig = {
    height: '100%',
    width: '100%',
    editable: true
}

const treblestaveSource: SvgStaveSource = {
    clef: 'treble',
    elements: [{ duration: 'quarter', pitch: 'C4' }, { duration: 'quarter', pitch: 'C4' }]
};

const svgSource: SvgStaveSource[] = [treblestaveSource, treblestaveSource];

ReactDOM.render(
    <SvgMusicNotation config={svgConfig} source={svgSource} />,
    document.getElementById('nolyric')
);