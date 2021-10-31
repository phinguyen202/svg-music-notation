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
        props.config.padding /= props.config.scale;
        props.config.width /= props.config.scale;
        props.config.height /= props.config.scale;
        props.config.widthUnit = props.config.fontSize / 4; // why 4?
    }

    render() {
        const { source, config } = this.props;
        const { width, height, scale, fontSize } = config;

        // a five-line stave height = fontSize
        return eltNS('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            'font-family': 'Bravura, BravuraText',
            width,
            height,
            stroke: 'black',
            'font-size': `${fontSize}px`,
            transform: `matrix(${scale}, 0, 0, ${scale}, ${width / 2 * (scale - 1)},  ${height / 2 * (scale - 1)})`
        }, ScorePartwiseGroup({ source: source['score-partwise'], config }));
    }
}