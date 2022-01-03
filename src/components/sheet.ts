import '../css/font.css';
import { eltSVG, Component } from 'source-renderer';
import { SvgSheetConfig } from '@model/config';
import { MusicXML } from '@model/musicXML';
import { ScorePartwiseGroup } from '@group/score-partwise';

export class Sheet extends Component {
    constructor(protected source: MusicXML, private config: SvgSheetConfig) {
        super();
    }

    render() {
        const { width, height, fontSize } = this.config;

        // a five-line stave height = 1 em fontSize
        return eltSVG('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            'font-family': 'Bravura',
            width,
            height,
            stroke: 'black',
            'font-size': `${fontSize}px`,
        }, ...ScorePartwiseGroup(this.source['score-partwise'], this.config));
    }
}