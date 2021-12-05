import { Component } from 'source-renderer';
import { eltNS } from '@lib/dom';
import { CoordinateModel, WidthDimension } from '@model/common.model';

interface StaveProps extends CoordinateModel, WidthDimension {
    lineNumber: number;
}

export class Stave extends Component {
    constructor(props: StaveProps) {
        super(props);
    }

    render() {
        const { x = 0, y = 0, width, lineNumber } = this.props;

        const lines = (new Array(lineNumber)).fill(undefined).map((_, index: number) => {
            const yLine = index * 0.25;
            return eltNS('line',
                {
                    x2: width,
                    y1: `${yLine}em`,
                    y2: `${yLine}em`,
                    key: index
                })
        });

        return eltNS('g', {
            transform: `translate(${x} ${y})`,
            'stroke-width': '0.5'
        }, ...lines);
    }
}