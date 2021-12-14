import { eltSVG } from 'source-renderer';
import { BaseComponent } from '@base/interface/base.component';
import { Glyph, Position } from '@model/common.model';
import { bravuraMetadata, glyphNames } from '@glyph/index';

export type AccidentalType = 'sharp' | 'flat' | 'natural';
interface AccidentalProps extends Position {
    type: AccidentalType
}

const accidentalMap: Map<AccidentalType, Glyph> = new Map<AccidentalType, Glyph>([
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
    public state: Glyph;
    constructor(private props: AccidentalProps, position?: Position) {
        super(position);
        this.init();
    }

    private init() {
        this.state = accidentalMap.get(this.props.type);
    }

    render() {
        const { x, y } = this.position;

        return eltSVG('text',
            { x, y },
            this.state.codepoint);
    }
}