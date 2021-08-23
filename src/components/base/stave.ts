import Component, { Props } from '@lib/component';
import { eltNS } from '@lib/dom';
import { CoordinateModel } from '@model/common.model';

interface StaveProps extends Props, CoordinateModel {
    lineNumber: number;
    width: number;
}

export class Staff extends Component<StaveProps> {
    constructor(props: StaveProps) {
        super(props);
    }

    render() {
        const { y = 0, x = 0, width, lineNumber } = this.props;

        const lines = (new Array(lineNumber)).fill(0).map((data: any, index: number) => {
            const yLine = index * 0.25;
            return eltNS('line',
                {
                    x2: width,
                    y1: `${yLine}em`,
                    y2: `${yLine}em`,
                    key: index
                })
        });

        return eltNS("g", {
            transform: `translate(${x}, ${y})`,
            strokeWidth: '0.5'
        }, ...lines);
    }
}