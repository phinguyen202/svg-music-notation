import { BarLineType } from '@model/business.model';
import BarLine from '@base/bar/barline';
import DoubleBarLine from '@base/bar/double-barline';
import BoldDoubleBarLine from '@base/bar/blod-double-barline';

interface Props {
    barline: BarLineType;
}

export function BarlineSwitcher({ barline }: Props) {
    switch (barline) {
        case 'barline':
            return BarLine;
        case 'double':
            return DoubleBarLine;
        case 'bold double':
            return BoldDoubleBarLine;
        default:
            return undefined;
    }
}
