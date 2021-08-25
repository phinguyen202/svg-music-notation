import Component from '@lib/component';
import { SvgSheetConfig } from '@model/config';
import { Measure } from '@model/musicXML';
import { ClefCom } from '../base/clef';

interface MeasureProps {
    source: Measure,
    config: SvgSheetConfig
}

export function MeasureGroup<T>(props: MeasureProps): Array<Component<any>> {
    const { source, config } = props;
    const { attributes, note, _number } = source;
    const { clef, key, divisions, time,  } = attributes;

    return [
        new ClefCom({ ...clef }),
        new ClefCom({ ...clef, x: 50 }),
    ];
}