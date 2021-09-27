import { eltNS } from '@lib/dom';
import { Glyph, XCoordinate } from '@model/common.model';
import { bravuraMetadata, glyphNames } from '@glyph/index';
import { Note } from '@model/musicXML';
import { NoteConfig, noteMap } from '@config/treble';
import { NOTE_DURATION, NOTE_DURATION_NUMBER, NOTE_PITCH } from '@model/enum';
import BaseComponent from '@lib/base.component';

const noteDurationMap: Map<NOTE_DURATION, Glyph> = new Map<NOTE_DURATION, Glyph>([
    [NOTE_DURATION.whole, {
        codepoint: glyphNames.noteWhole.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteWhole
    }],
    [NOTE_DURATION.half, {
        codepoint: glyphNames.noteHalfUp.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteHalfUp
    }],
    [NOTE_DURATION.quarter, {
        codepoint: glyphNames.noteQuarterUp.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteQuarterUp
    }],
    [NOTE_DURATION.eighth, {
        codepoint: glyphNames.noteheadBlack.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteheadBlack
    }],
    [NOTE_DURATION.sixteenth, {
        codepoint: glyphNames.noteheadBlack.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteheadBlack
    }],
]);

const noteTypeMap: Map<NOTE_DURATION_NUMBER, NOTE_DURATION> = new Map<NOTE_DURATION_NUMBER, NOTE_DURATION>([
    [NOTE_DURATION_NUMBER.sixteenth, NOTE_DURATION.sixteenth],
    [NOTE_DURATION_NUMBER.eighth, NOTE_DURATION.eighth],
    [NOTE_DURATION_NUMBER.quarter, NOTE_DURATION.quarter],
    [NOTE_DURATION_NUMBER.half, NOTE_DURATION.half],
    [NOTE_DURATION_NUMBER.whole, NOTE_DURATION.whole],
]);

const flagNotes = [NOTE_DURATION.sixteenth, NOTE_DURATION.eighth];

interface NoteProps extends Note, XCoordinate {
    divisions: string;
}

interface NoteState extends Glyph, NoteConfig {
    duration: NOTE_DURATION;
    durationNumber: NOTE_DURATION_NUMBER;
}

export class NoteCom extends BaseComponent<NoteProps, NoteState> {
    constructor(props: NoteProps) {
        super(props);
        const { pitch, duration, type, divisions } = props;

        const durationNumber = +duration / +divisions;
        const noteType = type ? type : noteTypeMap.get(durationNumber);
        const { step, octave } = pitch;
        this.state = {
            ...noteMap.get(`${step}${octave}` as NOTE_PITCH),
            duration: noteType as NOTE_DURATION,
            durationNumber,
            ...noteDurationMap.get(noteType as NOTE_DURATION)
        };
        this.partKey = `note.${noteType}`;
    }

    render() {
        const { x } = this.props;
        const { y, duration } = this.state;

        if (flagNotes.some(d => d == duration)) {
            return eltNS('g',
                { transform: `translate(${x}`, y },
                eltNS('text', { x, y }, `${this.state.codepoint}${glyphNames.stem.codepoint}`),
                eltNS('text', { x: x + this.state.width * 24 }, `${glyphNames.flag8thUp.codepoint}`))
        } else {
            return eltNS('text',
                { x, y },
                `${this.state.codepoint}`);
        }
    }
}