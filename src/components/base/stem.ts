import Component from '@lib/component';
import { eltNS } from '@lib/dom';
import { CoordinateModel, HeightDimension } from '@model/common.model';

const width = 0.12; // why this number ?
interface StemProps extends CoordinateModel, HeightDimension {
    type: 'up' | 'down';
}

export class Stem extends Component<StemProps, any> {
    constructor(props: StemProps) {
        super(props);
    }

    render() {
        const { x = 0, y = 0, type = 'up', height } = this.props;

        if (type === 'up') {
            return eltNS('path',
                {
                    // d: `M${x} ${y} V ${-height} H ${width} V ${height} Z`,
                    d: `M${x} ${y} v ${-72} h ${width} v ${72} Z`, // 96*3/4
                })
        }
    }
}