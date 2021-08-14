import '@css/font.css';
import Component, { Props } from '@lib/component';
import { elt } from '@lib/dom';
import { SvgSheetConfig } from '@model/config';
import { MusicXML } from '@model/musicXML';
import { ScorePartwiseComp } from './score-partwise';

interface SheetProps extends Props {
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

        return elt('svg', {
            xmlns: "http://www.w3.org/2000/svg",
            fontFamily: "Bravura, BravuraText",
            width,
            height,
            fontSize
        }, new ScorePartwiseComp({ source: source['score-partwise'], config }));
    }
}