import { eltNS } from '@lib/dom';
import Component from '@lib/component';
import { SvgSheetConfig } from '@model/config';
import { Part } from '@model/musicXML';
import { Stave } from '@base/stave';
import { MeasureGroup } from '@group/measure';

interface PartProps {
    source: Part,
    config: SvgSheetConfig
}

export class PartCom extends Component<PartProps> {
    constructor(props: PartProps) {
        super(props);
    }

    render() {
        const { source, config } = this.props;
        const { _id, measure } = source;

        return eltNS("g", {
            id: _id,
            transform: `translate(${50}, ${50})`
        },
            new Stave({ lineNumber: 5, width: config.width }),
            MeasureGroup({ source: measure, config: config }),
        );
    }
}