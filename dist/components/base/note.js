import { eltSVG } from 'source-renderer';
import { BaseComponent } from "./interface/base.component";
import { bravuraMetadata, glyphNames } from "../../glyph/index";
import { noteMap } from "../../config/treble";
import { NOTE_DURATION, NOTE_DURATION_NUMBER, STEM_DIRECTION } from "../../model/enum";
import { Stem } from "./stem";
import { Ledger } from "./ledger";
import { SPACE_TYPE } from "../../model/enum/space";
const durationMetricMap = new Map([
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
const noteTypeMap = new Map([
    [NOTE_DURATION_NUMBER.sixteenth, NOTE_DURATION.sixteenth],
    [NOTE_DURATION_NUMBER.eighth, NOTE_DURATION.eighth],
    [NOTE_DURATION_NUMBER.quarter, NOTE_DURATION.quarter],
    [NOTE_DURATION_NUMBER.half, NOTE_DURATION.half],
    [NOTE_DURATION_NUMBER.whole, NOTE_DURATION.whole],
]);
export class NoteCom extends BaseComponent {
    constructor(props, fontSize, widthUnit, position) {
        super(position);
        this.props = props;
        this.fontSize = fontSize;
        this.widthUnit = widthUnit;
        this.init();
    }
    init() {
        const { pitch, duration, type, divisions } = this.props;
        const { step, octave } = pitch;
        this.durationNum = +duration / +divisions;
        this.durationStr = type ? type : noteTypeMap.get(this.durationNum);
        this.pitch = `${step}${octave}`;
        this.pitchMetric = noteMap.get(this.pitch);
        this.durationMetric = durationMetricMap.get(this.durationStr);
        this.space = this.durationMetric.space;
        this.position = {
            x: 0,
            y: this.pitchMetric.y,
        };
        this.width = this.durationMetric.width;
    }
    getPitch() {
        return this.pitch;
    }
    getDuration() {
        return this.durationStr;
    }
    render() {
        const { x, y } = this.position;
        const { isStemUp, ledgers } = this.pitchMetric;
        const { width, codepoint, stemHeight, flagUp, flagDown } = this.durationMetric;
        const calWidth = width * this.widthUnit;
        const calY = y * this.fontSize;
        const calStemHeight = stemHeight * this.fontSize;
        const elements = [eltSVG('text', undefined, `${codepoint}`)];
        if (stemHeight) {
            if (isStemUp) {
                elements.push(new Stem({ direction: STEM_DIRECTION.UP, x: calWidth, height: calStemHeight }));
                flagUp && elements.push(eltSVG('text', { x: calWidth, y: -calStemHeight }, flagUp));
            }
            else {
                stemHeight && elements.push(new Stem({ direction: STEM_DIRECTION.DOWN, height: calStemHeight }));
                flagDown && elements.push(eltSVG('text', { y: calStemHeight }, flagDown));
            }
        }
        if (ledgers) {
            elements.push(...ledgers.map((y) => new Ledger({ width: calWidth }, { x: 0, y })));
        }
        return eltSVG('g', { transform: `translate(${x} ${calY})` }, ...elements);
    }
}
