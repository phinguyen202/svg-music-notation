import { SvgMusicNotation } from 'index';
import { sourceSample } from './sample';
import { defaultConfig } from '@config/index';

const container = document.getElementById('test');
const config = {};
const svg = new SvgMusicNotation({ 
    container,
    additionalModules: [],
    source: sourceSample, 
    config: defaultConfig });