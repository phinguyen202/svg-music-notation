import { SvgMusicNotation } from 'index';
import { sourceSample } from './sample';
import { defaultConfig } from '@config/index';
// import { Measure, Part } from '@model/musicXML';

import SMN from '../src/components'

const container = document.getElementById('test');
const config = {};
const svg = new SvgMusicNotation({ 
    container,
    additionalModules: [],
    source: sourceSample, 
    config: {
        ...defaultConfig,
        ...config
    }
});

// const elements = new SMN.Part(sourceSample['score-partwise'].part as Part).buildElements();

// console.log(elements);
    