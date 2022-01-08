import { bravuraMetadata } from "../../glyph/bravura_metadata";
import { glyphNames } from "../../glyph/glyphnames";
import { NOTE_DURATION } from "../../model/enum";
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
