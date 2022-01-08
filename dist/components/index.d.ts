import { Sheet } from '@components/sheet';
import { AccidentalCom, ClefCom, KeySignature, NoteCom, Stave, TimeSignatureCom } from './base';
import { Barline } from '@base/barline';
import { Ledger } from '@base/ledger';
import { Stem } from '@base/stem';
import { MeasureGroup } from '@group/measure';
import { ScorePartwiseGroup } from '@group/score-partwise';
import { PartCom } from '@components/part';
interface Components {
    set: Function;
    Accidental: typeof AccidentalCom;
    Note: typeof NoteCom;
    Barline: typeof Barline;
    Clef: typeof ClefCom;
    KeySignature: typeof KeySignature;
    Ledger: typeof Ledger;
    Stave: typeof Stave;
    Stem: typeof Stem;
    TimeSignature: typeof TimeSignatureCom;
    Measure: typeof MeasureGroup;
    ScorePartwise: typeof ScorePartwiseGroup;
    Part: typeof PartCom;
    Sheet: typeof Sheet;
}
declare const _default: Components;
export default _default;
