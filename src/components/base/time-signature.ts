import { Component, eltSVG } from 'source-renderer';
import { CoordinateModel, Glyph } from '@model/common.model';
import { bravuraMetadata } from '@glyph/index';
import { Time } from '@model/musicXML';
import { noteMap } from '@config/treble';
import { NOTE_PITCH } from '@model/enum';

interface TimeSignatureProps extends Time, CoordinateModel { }

export class TimeSignatureCom extends Component {
    public partKey: string = 'time-signature';
    private glyph: Glyph;
    private x: string | number = 0;
    private y: string = '1em';
    constructor(time: Time) {
        super();
        const timeKey: string = `timeSig${time.beats}over${time['beat-type']}`;
        this.glyph = {
            codepoint: bravuraMetadata.optionalGlyphs[timeKey].codepoint,
            width: bravuraMetadata.glyphAdvanceWidths[timeKey]
        };
    }

    render() {
        return eltSVG('text',
            { x: this.x, y: this.y },
            this.glyph.codepoint);
    }
}