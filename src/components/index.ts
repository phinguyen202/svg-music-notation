import '@css/font.css';
import { eltSVG, Component } from 'source-renderer';
import { SvgSheetConfig } from '@model/config';
import { MusicXML } from '@model/musicXML';
import { ScorePartwiseGroup } from '@group/score-partwise';

interface SheetProps {
    source: MusicXML,
    config: SvgSheetConfig
}
export class Sheet extends Component<SheetProps, any> {
    constructor(source: SheetProps) {
        super(source, undefined);
        // calculate matrix and padding based on size
        source.config.padding /= source.config.scale;
        source.config.width /= source.config.scale;
        source.config.height /= source.config.scale;
        source.config.widthUnit = source.config.fontSize / 4; // why 4?

        // do "global" app init config
        // - scale number
        // - type of base component, ex: whole note: type: Relative, length: 4
    }

    render() {
        const { source, config } = this.props;
        const { width, height, scale, fontSize } = config;

        // a five-line stave height = fontSize
        return eltSVG('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            'font-family': 'Bravura, BravuraText',
            width,
            height,
            stroke: 'black',
            'font-size': `${fontSize}px`,
            transform: `matrix(${scale}, 0, 0, ${scale}, ${width / 2 * (scale - 1)},  ${height / 2 * (scale - 1)})`
        }, ...ScorePartwiseGroup({ source: source['score-partwise'], config }));
    }
}