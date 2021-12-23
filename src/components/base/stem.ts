import { eltSVG, Component } from 'source-renderer';
import { OptionalPosition, HeightDimension } from '@model/common.model';
import { STEM_DIRECTION } from '@model/enum';

const width = 0.12; // why this number ?
interface StemProps extends OptionalPosition, HeightDimension {
    direction: STEM_DIRECTION;
}

export class Stem extends Component {
    constructor(private props: StemProps) {
        super();
    }

    render() {
        const { x = 0, y = 0, direction = 'up', height } = this.props;

        if (direction === 'up') {
            return eltSVG('path',
                {
                    d: `M${x} ${y} v ${-height} h ${width} v ${height} Z`,
                })
        } else {
            return eltSVG('path',
                {
                    d: `M${x} ${y} v ${height} h ${width} v ${-height} Z`,
                })
        }
    }
}