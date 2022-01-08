import { ClefCom, KeySignature, TimeSignatureCom, NoteCom } from "../base/index";
import { Barline } from "../base/barline";
export function MeasureGroup(measure, config) {
    const { attributes, note, _number } = measure;
    const { fontSize, widthUnit } = config;
    const elements = [];
    if (attributes) {
        const { clef, key, divisions, time, } = attributes;
        clef && elements.push(new ClefCom(clef));
        key && key.fifths !== '0' && elements.push(new KeySignature(key, widthUnit));
        time && elements.push(new TimeSignatureCom(time, fontSize));
    }
    if (note) {
        if (Array.isArray(note)) {
            note.forEach(n => elements.push(new NoteCom(Object.assign(Object.assign({}, n), { divisions: attributes ? attributes.divisions : '1' }), fontSize, widthUnit)));
        }
        else {
            elements.push(new NoteCom(Object.assign(Object.assign({}, note), { divisions: attributes ? attributes.divisions : '1' }), fontSize, widthUnit));
        }
    }
    elements.push(new Barline({ height: fontSize }, config.barline));
    return elements;
}
