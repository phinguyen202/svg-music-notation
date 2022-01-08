import { eltSVG } from 'source-renderer';
import { BaseComponent } from "./interface/base.component";
import { SPACE_TYPE } from "../../model/enum/space";
export class Barline extends BaseComponent {
    constructor(props, barline, position) {
        super(position);
        this.props = props;
        this.barline = barline;
        this.space = { type: SPACE_TYPE.None, length: 0 };
    }
    render() {
        const { x = 0, y = 0 } = this.position;
        return eltSVG('line', {
            x1: x,
            x2: x,
            y1: y,
            y2: this.props.height,
            'stroke-width': this.barline.strokeWidth,
        });
    }
}
