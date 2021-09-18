import { eltNS } from '@lib/dom';
import Component from '@lib/component';
import { Clef, SignType } from '@model/musicXML';
import { XCoordinate } from '@model/common.model';
import { bravuraMetadata, glyphNames } from '@glyph/index';

interface ClefProps extends Clef, XCoordinate { }

export class ClefCom extends Component<ClefProps, Glyph> {
    constructor(props: ClefProps) {
        super(props);
        this.state = clefMap.get(props.sign);
    }

    render() {
        const { x = 0, line } = this.props;

        return eltNS('text',
            { x, y: lineMap.get(+line) },
            this.state.codepoint);
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