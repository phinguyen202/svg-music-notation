import Component from '@lib/component';
import { Key } from '@model/musicXML';
import { Glyph, WidthDimension, XCoordinate } from '@model/common.model';
import { AccidentalCom, AccidentalType } from '@components/base/accidental';
import { flatOrder, sharpOrder, noteMap } from '@config/treble';
import { NOTE_PITCH } from '@model/enum';
import { eltNS } from '@lib/dom';

interface KeySignatureProps extends Key, XCoordinate { }

export class KeySignature extends Component<KeySignatureProps, WidthDimension> {
    public partKey: string = 'key-signature';
    private elements: Component<any, Glyph>[];
    constructor(props: KeySignatureProps) {
        super(props);
        const { fifths } = this.props;
        const fifthsNub = +fifths;
        let x: number = 0;
        if (fifthsNub > 0) {
            const type: AccidentalType = 'sharp';
            this.elements = sharpOrder.slice(0, fifthsNub).map((note: string) => {
                const y = noteMap.get(note as NOTE_PITCH).y;
                const acc = new AccidentalCom({ type, x, y });
                x += acc.state.width * 36;
                return acc
            });
        } else if (fifthsNub < 0) {
            const type: AccidentalType = 'flat';
            this.elements = flatOrder.slice(0, Math.abs(fifthsNub)).map((note: string) => {
                const y = noteMap.get(note as NOTE_PITCH).y;
                const acc = new AccidentalCom({ type, x, y });
                x += acc.state.width * 36;
                return acc
            });
        }
        let width: number;
        if (this.elements) {
            width = Math.abs(fifthsNub) * this.elements[0].state.width;
        }

        this.state = {
            width,
        }
    }

    render() {
        const { x } = this.props;

        return eltNS('g',
            { transform: `translate(${x})` },
            ...this.elements);
    }
}