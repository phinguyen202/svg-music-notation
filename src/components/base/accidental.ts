import { eltSVG, Component } from 'source-renderer';
import { CoordinateModel, Glyph } from '@model/common.model';
import { bravuraMetadata, glyphNames } from '@glyph/index';

export type AccidentalType = 'sharp' | 'flat' | 'natural';
interface AccidentalProps extends CoordinateModel {
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

export class AccidentalCom extends Component<AccidentalProps, Glyph> {
    constructor(props: AccidentalProps) {
        super(props);
        this.state = accidentalMap.get(props.type);
    }

    render() {
        const { x, y } = this.props;

        return eltSVG('text',
            { x, y },
            this.state.codepoint);
    }
}