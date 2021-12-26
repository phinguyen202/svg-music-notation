import '../css/font.css';
import { eltSVG, Component } from 'source-renderer';
import { SvgSheetConfig } from '@model/config';
import { MusicXML } from '@model/musicXML';
import { ScorePartwiseGroup } from '@group/score-partwise';
import { defaultConfig, GlobalConfig, setGlobalConfig } from '@config/index';

export class Sheet extends Component {
    constructor(protected source: MusicXML, protected config: SvgSheetConfig) {
        super();
        this.setConfig(this.config);
    }
    
    public setConfig(config: SvgSheetConfig) {
        const analyzedConfig = this.analyzeConfig(config);
        setGlobalConfig(analyzedConfig);
    }

    private analyzeConfig(config: SvgSheetConfig) {
        const analyzedConfig = { ...defaultConfig, ...config };
        return {
            ...analyzedConfig,
            padding: analyzedConfig.padding / analyzedConfig.scale,
            width: analyzedConfig.width / analyzedConfig.scale,
            height: analyzedConfig.height / analyzedConfig.scale,
            widthUnit: analyzedConfig.fontSize / 4 // why 4?
        }
    }

    render() {
        const { width, height, scale, fontSize } = GlobalConfig;

        // a five-line stave height = 1 em fontSize
        return eltSVG('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            'font-family': 'Bravura, BravuraText',
            width,
            height,
            stroke: 'black',
            'font-size': `${fontSize}px`,
            transform: `matrix(${scale}, 0, 0, ${scale}, ${width / 2 * (scale - 1)},  ${height / 2 * (scale - 1)})`
        }, ...ScorePartwiseGroup(this.source['score-partwise']));
    }
}