import { Component } from 'source-renderer';
import { Measure, Note } from '@model/musicXML';
import { ClefCom, KeySignature, TimeSignatureCom, NoteCom } from '@base/index';
import { Barline } from '@base/barline';
import { GlobalConfig } from '@config/index';

export function MeasureGroup(measure: Measure): Array<Component> {
    const { attributes, note, _number } = measure;
    const { fontSize, widthUnit } = GlobalConfig;

    const elements: Component[] = [];
    if (attributes) {
        const { clef, key, divisions, time, } = attributes;
        clef && elements.push(new ClefCom(clef));
        key && key.fifths !== '0' && elements.push(new KeySignature({ ...key, widthUnit }));
        time && elements.push(new TimeSignatureCom(time));
    }

    if (note) {
        if (Array.isArray(note)) {
            note.forEach(n => elements.push(new NoteCom({ ...n, divisions: attributes ? attributes.divisions : '1' })));
        } else {
            elements.push(new NoteCom({ ...note, divisions: attributes ? attributes.divisions : '1' }));
        }
    }

    elements.push(new Barline({ height: fontSize }));

    return elements;
}