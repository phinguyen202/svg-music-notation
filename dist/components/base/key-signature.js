import { eltSVG } from 'source-renderer';
import { BaseComponent } from "./interface/base.component";
import { AccidentalCom } from "./accidental";
import { flatOrder, sharpOrder, noteMap } from "../../config/treble";
import { SPACE_TYPE } from "../../model/enum/space";
export class KeySignature extends BaseComponent {
    constructor(props, widthUnit, position) {
        super(position);
        this.props = props;
        this.widthUnit = widthUnit;
        this.init();
    }
    init() {
        this.space = { type: SPACE_TYPE.Absolute, length: 0.5 };
        const { fifths } = this.props;
        const fifthsNub = +fifths;
        let x = 0;
        if (fifthsNub > 0) {
            const type = 'sharp';
            this.elements = sharpOrder.slice(0, fifthsNub).map((note) => {
                const y = noteMap.get(note).y;
                const acc = new AccidentalCom({ type }, { x, y });
                x += acc.state.width * this.widthUnit;
                return acc;
            });
        }
        else if (fifthsNub < 0) {
            const type = 'flat';
            this.elements = flatOrder.slice(0, Math.abs(fifthsNub)).map((note) => {
                const y = noteMap.get(note).y;
                const acc = new AccidentalCom({ type }, { x, y });
                x += acc.state.width * this.widthUnit;
                return acc;
            });
        }
        let width;
        if (this.elements) {
            width = Math.abs(fifthsNub) * this.elements[0].state.width;
        }
        this.width = width;
    }
    render() {
        const { x = 0 } = this.position;
        return eltSVG('g', { transform: `translate(${x})` }, ...this.elements);
    }
}
