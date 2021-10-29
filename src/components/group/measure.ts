import { SvgSheetConfig } from '@model/config';
import { Measure, Note } from '@model/musicXML';
import { ClefCom, KeySignature, TimeSignatureCom, NoteCom } from '@base/index';
import BaseComponent from '@lib/base.component';

interface MeasureProps {
    source: Measure,
    config: SvgSheetConfig
}

export function MeasureGroup<T>(props: MeasureProps): Array<BaseComponent<any, any>> {
    const { source, config } = props;
    const { attributes, note, _number } = source;
    const { clef, key, divisions, time, } = attributes;

    const elements: BaseComponent<any, any>[] = [];
    clef && elements.push(new ClefCom({ ...clef }));
    key && key.fifths !== '0' && elements.push(new KeySignature({ ...key }));
    time && elements.push(new TimeSignatureCom(time));
    note && elements.push(...(
        (Array.isArray(note) ? note : [note])
            .reduce((acc: BaseComponent<any, any>[], n: Note) => {
                acc.push(new NoteCom({ ...n, divisions }));
                return acc;
            }, [])
    ));

    return elements;
}