import { eltNS } from '@lib/dom';
import Component from '@lib/component';
import { Clef, SignType } from '@model/musicXML';
import { glyphNames } from '@config/glyphnames';
import { XCoordinate } from '@model/common.model';

interface ClefProps extends Clef, XCoordinate {
}

export class ClefCom extends Component<ClefProps> {
    constructor(props: ClefProps) {
        super(props);
    }

    render() {
        const { x = 0, sign, line } = this.props;

        return eltNS('text',
            { x, y: lineMap.get(+line) },
            clefMap.get(sign));
    }
}

const lineMap: Map<number, string> = new Map<number, string>([
    [1, '1em'],
    [2, '0.75em'],
    [3, '0.5em'],
    [4, '0.25em'],
    [5, '0em'],
]);

const clefMap: Map<SignType, string> = new Map<SignType, string>([
    ['G', glyphNames.gClef.codepoint],
    ['F', glyphNames.fClef.codepoint],
    ['C', glyphNames.cClef.codepoint],
    ['TAB', glyphNames['6stringTabClef'].codepoint],
    ['percussion', glyphNames.semipitchedPercussionClef1.codepoint],
]);