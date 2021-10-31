import Component from '@lib/component';
import { eltNS } from '@lib/dom';
import { CoordinateModel, HeightDimension } from '@model/common.model';
import { STEM_DIRECTION } from '@model/enum';

const width = 0.12; // why this number ?
interface StemProps extends CoordinateModel, HeightDimension {
    direction: STEM_DIRECTION;
}

export class Stem extends Component<StemProps, any> {
    constructor(props: StemProps) {
        super(props);
    }

    render() {
        const { x = 0, y = 0, direction = 'up', height } = this.props;

        if (direction === 'up') {
            return eltNS('path',
                {
                    d: `M${x} ${y} v ${-height} h ${width} v ${height} Z`,
                })
        } else {
            return eltNS('path',
                {
                    d: `M${x} ${y} v ${height} h ${width} v ${-height} Z`,
                })
        }
    }
}