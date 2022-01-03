import { SvgMusicNotation } from 'index';
import { sourceSample } from './sample';
import { defaultConfig } from '@config/index';
import { MusicXML, Measure, Part } from '@model/musicXML';

import SMN from '../src/components'

const container = document.getElementById('test');
const svg = new SvgMusicNotation(
    container,
    sourceSample as MusicXML, 
    defaultConfig
);

// using Component dependency
const elements = new SMN.Part(sourceSample['score-partwise'].part as Part, defaultConfig).buildElements();
console.log(elements);
    