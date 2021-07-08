import ReactDOM from 'react-dom';
import React from 'react';

import { SvgSheetConfig } from '@model/config';
import { SvgMusicNotation } from 'index';

import musicMei from './sample/doc_starts_with_music.mei';

const svgConfig: SvgSheetConfig = {
    height: '100%',
    width: '100%',
    mei: {}
}

ReactDOM.render(
    <SvgMusicNotation config={svgConfig} source={musicMei} />,
    document.getElementById('nolyric')
);