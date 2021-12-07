import { eltSVG, Component } from 'source-renderer';
import { CoordinateModel, Glyph, SpaceUnit, XCoordinate } from '@model/common.model';
import { bravuraMetadata, glyphNames } from '@glyph/index';
import { Note } from '@model/musicXML';
import { NoteConfig, noteMap } from '@config/treble';
import { NOTE_DURATION, NOTE_DURATION_NUMBER, NOTE_PITCH, STEM_DIRECTION } from '@model/enum';
import { Stem } from '@base/stem';
import { Ledger } from '@base/ledger';
import { SPACE_TYPE } from '@model/enum/space';
import { GlobalConfig } from '@config/index';

interface NoteMeta {
    stemHeight?: number;
    flagUp?: string;
    flagDown?: string;
}

interface DurationMetric extends Glyph, NoteMeta {
    space: SpaceUnit
}

const durationMetricMap: Map<NOTE_DURATION, DurationMetric> = new Map<NOTE_DURATION, DurationMetric>([
    [NOTE_DURATION.whole, {
        codepoint: glyphNames.noteWhole.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteWhole,
        space: { type: SPACE_TYPE.Relative, length: 4 }
    }],
    [NOTE_DURATION.half, {
        codepoint: glyphNames.noteheadHalf.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteheadHalf,
        stemHeight: 0.75,
        space: { type: SPACE_TYPE.Relative, length: 2 }

    }],
    [NOTE_DURATION.quarter, {
        codepoint: glyphNames.noteheadBlack.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteheadBlack,
        stemHeight: 0.75,
        space: { type: SPACE_TYPE.Relative, length: 1 }
    }],
    [NOTE_DURATION.eighth, {
        codepoint: glyphNames.noteheadBlack.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteheadBlack,
        stemHeight: 0.8,
        flagUp: glyphNames.flag8thUp.codepoint,
        flagDown: glyphNames.flag8thDown.codepoint,
        space: { type: SPACE_TYPE.Relative, length: 0.5 }
    }],
    [NOTE_DURATION.sixteenth, {
        codepoint: glyphNames.noteheadBlack.codepoint,
        width: bravuraMetadata.glyphAdvanceWidths.noteheadBlack,
        stemHeight: 0.8,
        flagUp: glyphNames.flag16thUp.codepoint,
        flagDown: glyphNames.flag16thDown.codepoint,
        space: { type: SPACE_TYPE.Relative, length: 0.25 }
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
}

export class NoteCom extends Component {
    private pitchMetric: NoteConfig;
    private durationNum: NOTE_DURATION_NUMBER;
    private durationStr: NOTE_DURATION | string;
    private durationMetric: DurationMetric;
    private location: CoordinateModel;
    constructor(protected props: NoteProps) {
        super();
        const { pitch, duration, type, divisions } = props;
        const { step, octave } = pitch;

        this.durationNum = +duration / +divisions;
        this.durationStr = type ? type : noteTypeMap.get(this.durationNum);
        this.pitchMetric = noteMap.get(`${step}${octave}` as NOTE_PITCH);
        this.durationMetric = durationMetricMap.get(this.durationStr as NOTE_DURATION);
    }

    render() {
        const { fontSize, widthUnit } = GlobalConfig;
        const { x, y } = this.location;
        const { isStemUp, ledgers } = this.pitchMetric;
        const { width, codepoint, stemHeight, flagUp, flagDown } = this.durationMetric;

        const calWidth = width * widthUnit;
        const calY = y * fontSize;
        const calStemHeight = stemHeight * fontSize;

        const elements: Array<any> = [eltSVG('text', undefined, `${codepoint}`)];
        if (stemHeight) {
            if (isStemUp) {
                elements.push(new Stem({ direction: STEM_DIRECTION.UP, x: calWidth, height: calStemHeight }));
                flagUp && elements.push(eltSVG('text', { x: calWidth, y: -calStemHeight }, flagUp));
            } else {
                stemHeight && elements.push(new Stem({ direction: STEM_DIRECTION.DOWN, height: calStemHeight }));
                flagDown && elements.push(eltSVG('text', { y: calStemHeight }, flagDown));
            }
        }
        if (ledgers) {
            elements.push(...ledgers.map((y: number) => new Ledger({ y, width: calWidth })));
        }
        return eltSVG('g',
            { transform: `translate(${x} ${calY})` },
            ...elements,
        )
    }
}