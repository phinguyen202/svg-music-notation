import '@css/font.css';
import Component from '@lib/component';
import { eltNS } from '@lib/dom';
import { SvgSheetConfig } from '@model/config';
import { MusicXML } from '@model/musicXML';
import { ScorePartwiseGroup } from '@group/score-partwise';

interface SheetProps {
    source: MusicXML,
    config: SvgSheetConfig
}
export class Sheet extends Component<SheetProps, any> {
    constructor(props: SheetProps) {
        super(props);
        // calculate matrix and padding based on size
        // padding default = 50
        props.config.padding /= props.config.scale;
        props.config.width /= props.config.scale;
        props.config.height /= props.config.scale;
    }

    render() {
        const { source, config } = this.props;
        const { width, height, scale, fontSizeInPx } = config;

        // a five-line stave height = fontSizeInPx * scale
        // example 96 * 0.5 = 48 (unit of coordinate)

        return eltNS('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            'font-family': 'Bravura, BravuraText',
            width,
            height,
            stroke: 'black',
            'font-size': `${fontSizeInPx}px`,
            transform: `matrix(${scale}, 0, 0, ${scale}, ${width / 2 * (scale - 1)},  ${height / 2 * (scale - 1)})`
        }, ScorePartwiseGroup({ source: source['score-partwise'], config }));
    }
}