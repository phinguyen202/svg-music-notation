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
        props.config.padding /= props.config.size;
        props.config.width /= props.config.size;
        props.config.height /= props.config.size;
    }

    render() {
        const { source, config } = this.props;
        const { width, height, size } = config;

        return eltNS('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            'font-family': 'Bravura, BravuraText',
            width,
            height,
            stroke: 'black',
            'font-size': '6em', // => 4 * 6 = 24 (multiple width of glyph)
            transform: `matrix(${size}, 0, 0, ${size}, ${width/2 * (size - 1)},  ${height/2 * (size - 1)})`
        }, ScorePartwiseGroup({ source: source['score-partwise'], config }));
    }
}