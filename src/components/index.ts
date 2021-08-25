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
export class Sheet extends Component<SheetProps> {
    constructor(props: SheetProps) {
        super(props);
    }

    render() {
        const { source, config } = this.props;
        const { width, height, fontSize } = config;

        return eltNS('svg', {
            xmlns: "http://www.w3.org/2000/svg",
            'font-family': 'Bravura, BravuraText',
            width,
            height,
            stroke: 'black',
            'font-size': fontSize
        }, ScorePartwiseGroup({ source: source['score-partwise'], config }));
    }
}