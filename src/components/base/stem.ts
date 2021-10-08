import Component from '@lib/component';
import { eltNS } from '@lib/dom';
import { CoordinateModel, HeightDimension } from '@model/common.model';

interface StemProps extends CoordinateModel, HeightDimension {
    type: 'up' | 'down';
}

export class Stave extends Component<StemProps, any> {
    constructor(props: StemProps) {
        super(props);
    }

    render() {
        const { x = 0, y = 0, type = 'up', height } = this.props;

        return eltNS('line',
            {
                y2: height,
            })
    }
}