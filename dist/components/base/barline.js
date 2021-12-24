import { eltSVG } from 'source-renderer';
import { BaseComponent } from "./interface/base.component";
import { GlobalConfig } from "../../config/index";
import { SPACE_TYPE } from "../../model/enum/space";
export class Barline extends BaseComponent {
    constructor(props, position) {
        super(position);
        this.props = props;
        this.space = { type: SPACE_TYPE.None, length: 0 };
    }
    render() {
        const { x = 0, y = 0 } = this.position;
        return eltSVG('line', {
            x1: x,
            x2: x,
            y1: y,
            y2: this.props.height,
            'stroke-width': GlobalConfig.barline.strokeWidth,
        });
    }
}
