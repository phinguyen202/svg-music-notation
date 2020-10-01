import { BarLineType } from '@model/business.model';
import BarLine from '@base/bar/barline';
import DoubleBarLine from '@base/bar/double-barline';
import BoldDoubleBarLine from '@base/bar/blod-double-barline';
import { BuilderRender } from '@builder/builder.model';
import { YCoordinate, HeightDimension } from '../../model/common.model';

interface Props extends YCoordinate, HeightDimension {
    type: BarLineType,
}
export function barlineBuilder({ type, y, height }: Props): BuilderRender {
    switch (type) {
        case 'single':
            return {
                width: BarLine.width,
                height,
                renderFunc: (x: number) => BarLine.JSX({ x, y, height })
            };
        case 'double':
            return {
                width: DoubleBarLine.width,
                height,
                renderFunc: (x: number) => DoubleBarLine.JSX({ x, y, height })
            };
        case 'bold double':
            return {
                width: BoldDoubleBarLine.width,
                height,
                renderFunc: (x: number) => BoldDoubleBarLine.JSX({ x, y, height })
            };
        default:
            return undefined;
    }
}
