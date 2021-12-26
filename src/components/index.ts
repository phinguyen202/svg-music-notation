import { Sheet } from '@components/sheet';
import { Component } from 'source-renderer';
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
    Barline: typeof Barline,
    Clef: typeof ClefCom,
    KeySignature: typeof KeySignature,
    Ledger: typeof Ledger,
    Stave: typeof Stave,
    Stem: typeof Stem,
    TimeSignature: typeof TimeSignatureCom,
    //group
    Measure: typeof MeasureGroup,
    ScorePartwise: typeof ScorePartwiseGroup,
    // interface
    Part: typeof PartCom;
    Sheet: typeof Sheet,
}

const setFn = function(key: string, com: Component) {
    if (!(key || this.hasOwnProperty(key))) {
        throw new Error(`Cannot replace the element [${key}]. The key is not exist or not found!`)
    } else if (!(com instanceof Component)) {
        throw new Error(`Cannot replace the element [${key}]. The component must be a Component!`)
    }
    this[key] = com;
}

export default <Components> {
    // base
    Accidental: AccidentalCom,
    Barline: Barline,
    Clef: ClefCom,
    KeySignature: KeySignature,
    Ledger: Ledger,
    Note: NoteCom,
    Stave: Stave,
    Stem: Stem,
    TimeSignature: TimeSignatureCom,
    // group
    Measure: MeasureGroup,
    ScorePartwise: ScorePartwiseGroup,
    // interface
    Part: PartCom,
    Sheet: Sheet,
    // Methods
    set: setFn
}


