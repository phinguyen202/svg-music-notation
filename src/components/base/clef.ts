import { eltSVG } from 'source-renderer';
import { BaseComponent } from '@base/interface/base.component';
import { Clef, SignType } from '@model/musicXML';
import { Glyph, Position } from '@model/common.model';
import { bravuraMetadata, glyphNames } from '@glyph/index';
import { SPACE_TYPE } from '@model/enum/space';

export class ClefCom extends BaseComponent {
    private codepoint: string;
    constructor(private props: Clef, position?: Position) {
        super(position);
        this.init();
    }

    private init() {
        const glyph = clefMap.get(this.props.sign);
        if (glyph) {
            this.width = glyph.width;
            this.codepoint = glyph.codepoint;
        }
        this.space = { type: SPACE_TYPE.Absolute, length: 0.5 };
    }

    render() {
        const { x = 0 } = this.position;
        return eltSVG('text',
            { x, y: lineMap.get(+this.props.line) },
            this.codepoint);
    }
}

const lineMap: Map<number, string> = new Map<number, string>([
    [1, '1em'],
    [2, '0.75em'],
    [3, '0.5em'],
    [4, '0.25em'],
    [5, '0'],
]);

const clefMap: Map<SignType, Glyph> = new Map<SignType, Glyph>([
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