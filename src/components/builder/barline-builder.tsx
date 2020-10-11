import { BarLineType } from '@model/business.model';
import BarLine from '@base/bar/barline';
import DoubleBarLine from '@base/bar/double-barline';
import BoldDoubleBarLine from '@base/bar/blod-double-barline';
import { TypeBuilderRender } from '@builder/builder.model';
import { YCoordinate, HeightDimension, CoordinateModel } from '../../model/common.model';
import { SvgBarlineElement } from '@model/source.model';

interface Props extends SvgBarlineElement, CoordinateModel, HeightDimension { }

export function barlineBuilder(props: Props): TypeBuilderRender & Props {
    const { barline } = props;
    let barlineType: any;
    switch (barline) {
        case 'single':
            barlineType = BarLine;
            break;
        case 'double':
            barlineType = DoubleBarLine;
            break;
        case 'bold double':
            barlineType = BoldDoubleBarLine;
            break;
        default:
            if (!barline) {
                throw Error('Barline type is undefined');
            } else {
                throw Error(`Invalid barline: ${barline}`);
            }
    }
    return {
        ...props,
        ...barlineType,
        renderFunc: function () {
            const { x = 0, y = 0, height, JSX } = this;
            return JSX({ x, y, height });
        }
    };
}
