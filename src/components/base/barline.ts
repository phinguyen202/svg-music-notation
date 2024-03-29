import { eltSVG } from 'source-renderer';
import { BaseComponent } from '@base/interface/base.component';
import { HeightDimension, Position } from '@model/common.model';
import { GlobalConfig } from '@config/index';
import { SPACE_TYPE } from '@model/enum/space';

interface BarlineProps extends HeightDimension { }

export class Barline extends BaseComponent {
    constructor(private props: BarlineProps, position?: Position) {
        super(position);
        this.space = { type: SPACE_TYPE.None, length: 0 };
    }

    render() {
        const { x = 0, y = 0 } = this.position;
        return eltSVG('line',
            {
                x1: x,
                x2: x,
                y1: y,
                y2: this.props.height,
                'stroke-width': GlobalConfig.barline.strokeWidth,
            })
    }
}