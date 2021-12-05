import { Component } from 'source-renderer';
import { eltNS } from '@lib/dom';
import { CoordinateModel, WidthDimension } from '@model/common.model';

interface LedgerProps extends CoordinateModel, WidthDimension { }

export class Ledger extends Component<LedgerProps, any> {
    constructor(props: LedgerProps) {
        super(props);
    }

    render() {
        const { x = 0, y = 0, width } = this.props;
        return eltNS('line',
            {
                x1: x - width / 2,
                x2: x + width * 3 / 2,
                y1: `${y}em`,
                y2: `${y}em`,
                'stroke-width': '0.5'
            })
    }
}