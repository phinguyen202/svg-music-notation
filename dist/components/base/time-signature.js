import { eltSVG } from 'source-renderer';
import { BaseComponent } from './interface/base.component';
import { bravuraMetadata } from "../../glyph/index";
import { GlobalConfig } from "../../config/index";
import { SPACE_TYPE } from "../../model/enum/space";
export class TimeSignatureCom extends BaseComponent {
    constructor(time) {
        super();
        this.time = time;
        this.init();
    }
    init() {
        this.space = { type: SPACE_TYPE.Absolute, length: 0.5 };
        const timeKey = `timeSig${this.time.beats}over${this.time['beat-type']}`;
        this.width = bravuraMetadata.glyphAdvanceWidths[timeKey];
        this.codepoint = bravuraMetadata.optionalGlyphs[timeKey].codepoint;
        this.position = {
            x: 0,
            y: GlobalConfig.fontSize
        };
    }
    render() {
        const { x = 0, y = 0 } = this.position;
        return eltSVG('text', { x, y }, this.codepoint);
    }
}
