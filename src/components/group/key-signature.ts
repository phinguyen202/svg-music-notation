import Component from '@lib/component';
import { Key, FifthsType } from '@model/musicXML';
import { XCoordinate } from '@model/common.model';
import { AccidentalCom, AccidentalType } from '@components/base/accidental';
import { flatOrder, sharpOrder, noteMap } from '@config/treble';
import { NOTE_PITCH } from '@model/enum';

interface KeySignatureProps extends Key, XCoordinate { }

export function KeySignatureGroup<T>(props: KeySignatureProps): Array<Component<any, any>> {
    const { fifths } = props;
    let elements: Component<any, Glyph>[];

    if (fifths > 0) {
        const type: AccidentalType = 'sharp';
        elements = sharpOrder.slice(0, fifths).map((note: string) => {
            const y = noteMap.get(note as NOTE_PITCH).y;
            return new AccidentalCom({ type, y });
        });
    } else if (fifths < 0) {
        const type: AccidentalType = 'flat';
        elements = flatOrder.slice(0, Math.abs(fifths)).map((note: string) => {
            const y = noteMap.get(note as NOTE_PITCH).y;
            return new AccidentalCom({ type, y });
        });
    }

    return elements ? elements : [];
}