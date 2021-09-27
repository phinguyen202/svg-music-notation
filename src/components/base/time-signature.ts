import { eltNS } from '@lib/dom';
import { CoordinateModel, Glyph } from '@model/common.model';
import { bravuraMetadata } from '@glyph/index';
import { Time } from '@model/musicXML';
import { noteMap } from '@config/treble';
import { NOTE_PITCH } from '@model/enum';
import BaseComponent from '@lib/base.component';

interface TimeSignatureProps extends Time, CoordinateModel { }

export class TimeSignatureCom extends BaseComponent<TimeSignatureProps, Glyph> {
    public partKey: string = 'time-signature';
    constructor(props: TimeSignatureProps) {
        super(props);
        const timeKey: string = `timeSig${props.beats}over${props['beat-type']}`;
        this.state = {
            codepoint: bravuraMetadata.optionalGlyphs[timeKey].codepoint,
            width: bravuraMetadata.glyphAdvanceWidths[timeKey]
        };
    }

    render() {
        const { x , y = noteMap.get(NOTE_PITCH.E4).y } = this.props;

        return eltNS('text',
            { x, y },
            this.state.codepoint);
    }
}