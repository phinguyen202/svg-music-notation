import { Component, eltSVG } from 'source-renderer';
import { Clef, SignType } from '@model/musicXML';
import { Glyph, XCoordinate } from '@model/common.model';
import { bravuraMetadata, glyphNames } from '@glyph/index';

export class ClefCom extends Component {
    public partKey: string = 'clef';
    private glyph: Glyph;
    public x: XCoordinate;
    constructor(private clef: Clef) {
        super();
        this.glyph = clefMap.get(clef.sign);
    }

    render() {
        return eltSVG('text',
            { x: this.x, y: lineMap.get(+this.clef.line) },
            this.glyph.codepoint);
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