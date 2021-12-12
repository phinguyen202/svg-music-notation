import { eltSVG, Component } from 'source-renderer';
import { OptionalPosition, WidthDimension } from '@model/common.model';

interface LedgerProps extends OptionalPosition, WidthDimension { }

export class Ledger extends Component {
    constructor(private props: LedgerProps) {
        super();
    }

    render() {
        const { x = 0, y = 0, width } = this.props;
        return eltSVG('line',
            {
                x1: x - width / 2,
                x2: x + width * 3 / 2,
                y1: `${y}em`,
                y2: `${y}em`,
                'stroke-width': '0.5'
            })
    }
}