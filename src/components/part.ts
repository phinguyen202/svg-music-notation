import { eltNS } from '@lib/dom';
import Component, { Props } from '@lib/component';
import { SvgSheetConfig } from '@model/config';
import { Part } from '@model/musicXML';
import { Staff } from '@base/stave';

interface PartProps extends Props {
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
            id: _id
        }, new Staff({ lineNumber: 5, width: config.width }));
    }
}