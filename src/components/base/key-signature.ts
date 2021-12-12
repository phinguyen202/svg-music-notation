import { eltSVG, Component } from 'source-renderer';
import { BaseComponent } from '@base/interface/base.component';
import { Key } from '@model/musicXML';
import { Glyph, WidthDimension, OptionalPosition } from '@model/common.model';
import { AccidentalCom, AccidentalType } from '@components/base/accidental';
import { flatOrder, sharpOrder, noteMap } from '@config/treble';
import { NOTE_PITCH } from '@model/enum';
import { SPACE_TYPE } from '@model/enum/space';

interface KeySignatureProps extends Key, OptionalPosition { 
    widthUnit: number;
}

export class KeySignature extends BaseComponent {
    private elements: AccidentalCom[];
    constructor(private props: KeySignatureProps) {
        super();
        this.init();
    }
    
    private init() {
        this.space = { type: SPACE_TYPE.Absolute, length: 0.5 };
        
        const { fifths, widthUnit } = this.props;
        const fifthsNub = +fifths;
        let x: number = 0;
        if (fifthsNub > 0) {
            const type: AccidentalType = 'sharp';
            this.elements = sharpOrder.slice(0, fifthsNub).map((note: string) => {
                const y = noteMap.get(note as NOTE_PITCH).y;
                const acc = new AccidentalCom({ type, x, y });
                x += acc.state.width * widthUnit;
                return acc
            });
        } else if (fifthsNub < 0) {
            const type: AccidentalType = 'flat';
            this.elements = flatOrder.slice(0, Math.abs(fifthsNub)).map((note: string) => {
                const y = noteMap.get(note as NOTE_PITCH).y;
                const acc = new AccidentalCom({ type, x, y });
                x += acc.state.width * widthUnit;
                return acc
            });
        }
        let width: number;
        if (this.elements) {
            width = Math.abs(fifthsNub) * this.elements[0].state.width;
        }
    
        this.width = width;
    }

    render() {
        const { x = 0 } = this.position;

        return eltSVG('g',
            { transform: `translate(${x})` },
            ...this.elements);
    }
}