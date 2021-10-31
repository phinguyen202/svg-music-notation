import { eltNS } from '@lib/dom';
import { Glyph, XCoordinate } from '@model/common.model';
import { bravuraMetadata, glyphNames } from '@glyph/index';
import { Note } from '@model/musicXML';
import { NoteConfig, noteMap } from '@config/treble';
import { NOTE_DURATION, NOTE_DURATION_NUMBER, NOTE_PITCH, STEM_DIRECTION } from '@model/enum';
import BaseComponent from '@lib/base.component';
import { Stem } from '@base/stem';
import { Ledger } from '@base/ledger';

interface NoteMeta {
    stemHeight?: number;
    flagUp?: string;
    flagDown?: string;
}

const noteDurationMap: Map<NOTE_DURATION, Glyph> = new Map<NOTE_DURATION, Glyph & NoteMeta>([
    [NOTE_DURATION.whole, {
        codepoint: glyphNames.noteWhole.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteWhole
    }],
    [NOTE_DURATION.half, {
        codepoint: glyphNames.noteheadHalf.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteheadHalf,
        stemHeight: 0.75
    }],
    [NOTE_DURATION.quarter, {
        codepoint: glyphNames.noteheadBlack.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteheadBlack,
        stemHeight: 0.75
    }],
    [NOTE_DURATION.eighth, {
        codepoint: glyphNames.noteheadBlack.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteheadBlack,
        stemHeight: 0.8,
        flagUp: glyphNames.flag8thUp.codepoint,
        flagDown: glyphNames.flag8thDown.codepoint
    }],
    [NOTE_DURATION.sixteenth, {
        codepoint: glyphNames.noteheadBlack.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteheadBlack,
        stemHeight: 0.8,
        flagUp: glyphNames.flag16thUp.codepoint,
        flagDown: glyphNames.flag16thDown.codepoint
    }],
]);

const noteTypeMap: Map<NOTE_DURATION_NUMBER, NOTE_DURATION> = new Map<NOTE_DURATION_NUMBER, NOTE_DURATION>([
    [NOTE_DURATION_NUMBER.sixteenth, NOTE_DURATION.sixteenth],
    [NOTE_DURATION_NUMBER.eighth, NOTE_DURATION.eighth],
    [NOTE_DURATION_NUMBER.quarter, NOTE_DURATION.quarter],
    [NOTE_DURATION_NUMBER.half, NOTE_DURATION.half],
    [NOTE_DURATION_NUMBER.whole, NOTE_DURATION.whole],
]);

interface NoteProps extends Note, XCoordinate {
    divisions: string;
    widthUnit: number;
    fontSize: number;
}

interface NoteState extends Glyph, NoteMeta, NoteConfig {
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
        const { x, fontSize, widthUnit } = this.props;
        const { width, codepoint, isStemUp, ledgers, stemHeight, flagUp, flagDown } = this.state;
        const { y } = this.state;
        const calWidth = width * widthUnit;
        const calY = y * fontSize;
        const calStemHeight = stemHeight * fontSize;

        const elements: Array<any> = [eltNS('text', undefined, `${codepoint}`)];
        if (stemHeight) {
            if (isStemUp) {
                elements.push(new Stem({ direction: STEM_DIRECTION.UP, x: calWidth, height: calStemHeight }));
                flagUp && elements.push(eltNS('text', { x: calWidth, y: -calStemHeight }, flagUp));
            } else {
                stemHeight && elements.push(new Stem({ direction: STEM_DIRECTION.DOWN, height: calStemHeight }));
                flagDown && elements.push(eltNS('text', { y: calStemHeight }, flagDown));
            }
        }
        if (ledgers) {
            elements.push(...ledgers.map((y: number) => new Ledger({ y, width: calWidth })));
        }
        return eltNS('g',
            { transform: `translate(${x} ${calY})` },
            ...elements,
        )
    }
}