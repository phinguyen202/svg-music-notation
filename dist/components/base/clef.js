import { eltSVG } from 'source-renderer';
import { BaseComponent } from "./interface/base.component";
import { bravuraMetadata, glyphNames } from "../../glyph/index";
import { SPACE_TYPE } from "../../model/enum/space";
export class ClefCom extends BaseComponent {
    constructor(props, position) {
        super(position);
        this.props = props;
        this.init();
    }
    init() {
        const glyph = clefMap.get(this.props.sign);
        if (glyph) {
            this.width = glyph.width;
            this.codepoint = glyph.codepoint;
        }
        this.space = { type: SPACE_TYPE.Absolute, length: 0.5 };
    }
    render() {
        const { x = 0 } = this.position;
        return eltSVG('text', { x, y: lineMap.get(+this.props.line) }, this.codepoint);
    }
}
const lineMap = new Map([
    [1, '1em'],
    [2, '0.75em'],
    [3, '0.5em'],
    [4, '0.25em'],
    [5, '0'],
]);
const clefMap = new Map([
    ['G', {
            codepoint: glyphNames.gClef.codepoint,
            width: bravuraMetadata.glyphAdvanceWidths.gClef
        }],
    ['F', {
            codepoint: glyphNames.fClef.codepoint,
            width: bravuraMetadata.glyphAdvanceWidths.fClef
        }],
    ['C', {
            codepoint: glyphNames.cClef.codepoint,
            width: bravuraMetadata.glyphAdvanceWidths.cClef
        }],
    ['TAB', {
            codepoint: glyphNames['6stringTabClef'].codepoint,
            width: bravuraMetadata.glyphAdvanceWidths['6stringTabClef']
        }],
    ['percussion', {
            codepoint: glyphNames.semipitchedPercussionClef1.codepoint,
            width: bravuraMetadata.glyphAdvanceWidths.semipitchedPercussionClef1
        }],
]);
