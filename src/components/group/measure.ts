import { TimeSignatureCom } from '@components/base/time-signature';
import Component from '@lib/component';
import { SvgSheetConfig } from '@model/config';
import { Measure, Note } from '@model/musicXML';
import { ClefCom } from '@base/clef';
import { KeySignatureGroup } from './key-signature';
import { NoteCom } from '@base/note';

interface MeasureProps {
    source: Measure,
    config: SvgSheetConfig
}

export function MeasureGroup<T>(props: MeasureProps): Array<Component<any, any>> {
    const { source, config } = props;
    const { attributes, note, _number } = source;
    const { clef, key, divisions, time, } = attributes;

    const elements: Component<any, Glyph>[] = [];
    clef && elements.push(new ClefCom({ ...clef }));
    key && elements.push(...KeySignatureGroup({ ...key }));
    time && elements.push(new TimeSignatureCom(time));
    note && elements.push(...(
        (Array.isArray(note) ? note : [note])
            .reduce((acc: Component<any, Glyph>[], n: Note) => {
                acc.push(new NoteCom({...n, divisions}));
                return acc;
            }, [])
    ));

    return elements;
}