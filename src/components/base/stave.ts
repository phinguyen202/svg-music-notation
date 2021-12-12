import { eltSVG, Component } from 'source-renderer';
import { OptionalPosition, WidthDimension } from '@model/common.model';

interface StaveProps extends OptionalPosition, WidthDimension {
    lineNumber: number;
}

export class Stave extends Component {
    constructor(private props: StaveProps) {
        super();
    }

    render() {
        const { x = 0, y = 0, width, lineNumber } = this.props;

        const lines = (new Array(lineNumber)).fill(undefined).map((_, index: number) => {
            const yLine = index * 0.25;
            return eltSVG('line',
                {
                    x2: width,
                    y1: `${yLine}em`,
                    y2: `${yLine}em`,
                    key: index
                })
        });

        return eltSVG('g', {
            transform: `translate(${x} ${y})`,
            'stroke-width': '0.5'
        }, ...lines);
    }
}