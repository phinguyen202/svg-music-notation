import { SvgMusicNotation } from 'index';
import { sourceSample } from './sample';

const container = document.getElementById('test');
const config = {};
const svg = new SvgMusicNotation({ 
    container,
    additionalModules: [],
    source: sourceSample, 
    config });