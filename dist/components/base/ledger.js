import { eltSVG } from 'source-renderer';
import { BaseComponent } from "./interface/base.component";
export class Ledger extends BaseComponent {
    constructor(props, position) {
        super(position);
        this.props = props;
    }
    render() {
        const { x = 0, y = 0 } = this.position;
        const { width } = this.props;
        return eltSVG('line', {
            x1: x - width / 2,
            x2: x + width * 3 / 2,
            y1: `${y}em`,
            y2: `${y}em`,
            'stroke-width': '0.5'
        });
    }
}
