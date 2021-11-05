import Component from '@lib/component';
import { eltNS } from '@lib/dom';
import { CoordinateModel, HeightDimension } from '@model/common.model';

interface BarlineProps extends CoordinateModel, HeightDimension { }

export class Barline extends Component<BarlineProps, any> {
    public partKey: string = 'barline';
    constructor(props: BarlineProps) {
        super(props);
    }

    render() {
        const { x = 0, y = 0, height } = this.props;
        return eltNS('line',
            {
                x1: x,
                x2: x,
                y1: y,
                y2: '1em',
                'stroke-width': '0.5'
            })
    }
}