import { eltSVG } from 'source-renderer';
import { BaseComponent } from "./interface/base.component";
import { bravuraMetadata, glyphNames } from "../../glyph/index";
const accidentalMap = new Map([
    ['sharp', {
            codepoint: glyphNames.accidentalSharp.codepoint,
            width: bravuraMetadata.glyphAdvanceWidths.accidentalSharp
        }],
    ['flat', {
            codepoint: glyphNames.accidentalFlat.codepoint,
            width: bravuraMetadata.glyphAdvanceWidths.accidentalFlat
        }],
    ['natural', {
            codepoint: glyphNames.accidentalNatural.codepoint,
            width: bravuraMetadata.glyphAdvanceWidths.accidentalNatural
        }]
]);
export class AccidentalCom extends BaseComponent {
    constructor(props, position) {
        super(position);
        this.props = props;
        this.init();
    }
    init() {
        this.state = accidentalMap.get(this.props.type);
    }
    render() {
        const { x, y } = this.position;
        return eltSVG('text', { x, y }, this.state.codepoint);
    }
}
