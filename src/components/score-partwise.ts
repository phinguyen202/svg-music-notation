import { eltNS } from '@lib/dom';
import Component, { Props } from '@lib/component';
import { SvgSheetConfig } from '@model/config';
import { ScorePartwise } from '@model/musicXML';
import { PartCom } from './part';

interface ScorePartwiseProps extends Props {
    source: ScorePartwise,
    config: SvgSheetConfig
}

export class ScorePartwiseComp extends Component<ScorePartwiseProps> {
    constructor(props: ScorePartwiseProps) {
        super(props);
    }

    render() {
        const { source, config } = this.props;
        const partList = source['part-list'];
        const { part } = source;
        return eltNS("g",
            {},
            new PartCom({ source: part, config }));
    }
}