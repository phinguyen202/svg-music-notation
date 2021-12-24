import { ClefCom, KeySignature, TimeSignatureCom, NoteCom } from "../base/index";
import { Barline } from "../base/barline";
import { GlobalConfig } from "../../config/index";
export function MeasureGroup(measure) {
    const { attributes, note, _number } = measure;
    const { fontSize, widthUnit } = GlobalConfig;
    const elements = [];
    if (attributes) {
        const { clef, key, divisions, time, } = attributes;
        clef && elements.push(new ClefCom(clef));
        key && key.fifths !== '0' && elements.push(new KeySignature(Object.assign(Object.assign({}, key), { widthUnit })));
        time && elements.push(new TimeSignatureCom(time));
    }
    if (note) {
        if (Array.isArray(note)) {
            note.forEach(n => elements.push(new NoteCom(Object.assign(Object.assign({}, n), { divisions: attributes ? attributes.divisions : '1' }))));
        }
        else {
            elements.push(new NoteCom(Object.assign(Object.assign({}, note), { divisions: attributes ? attributes.divisions : '1' })));
        }
    }
    elements.push(new Barline({ height: fontSize }));
    return elements;
}
