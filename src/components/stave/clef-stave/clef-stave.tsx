import { WidthDemension } from "@model/common.model";
import React from "react";
import { CoordinateModel } from '@model/common.model';
import { MeasureModel } from "@model/business.model";
import Staff from '@base/staff-ledger/staff'
import TrebleClef from "@base/clef/treble";
import { KeySignature } from "./key-signature";
import { Measure } from "./measure";

interface Props extends CoordinateModel, WidthDemension {
    measures: MeasureModel[];
	keySigNumber?: number;
}

const staffLineNumber: number = 5;
const staffSpace: number = 10;

const offset: number = 10;
const KeySignatureOffset: number = 5;

const measureYOffset: number = 10;

export function ClefStave({ x = 0, y = 0, width, measures, keySigNumber }: Props): JSX.Element {
    // offset - TrebleClef - offset - key signature - offset - measures
    const staff = <Staff.JSX lineNumber={staffLineNumber} space={staffSpace} width={width}/>
    let currentX = offset;
    const clef = <TrebleClef.JSX x={currentX}/>
    currentX += TrebleClef.width;
    const keySignature = keySigNumber && KeySignature({x: currentX += KeySignatureOffset, keySigNumber});
    if (keySignature) {
        currentX += keySignature.width;
    }
    // balanced based on number of elements not and rest and time singature
    const totalMeansureEle = measures.reduce((previousValue, currentValue) => previousValue += currentValue.notes.length + (currentValue.timeSignature ? 1 : 0), 0);
    const restedWidth = width - currentX;
    const measuresJsx = measures.map((measure, index) => {
        const measureWidth = (measure.notes.length + (measure.timeSignature ? 1 : 0))/totalMeansureEle * restedWidth;
        const meansureJSX = <Measure x={currentX} y={measureYOffset} timeSignature={measure.timeSignature} notes={measure.notes} barline={measure.barline} width={measureWidth} key={index} />
        currentX += measureWidth;
        return meansureJSX;
    });
    return (
        <g transform={`translate(${x}, ${y})`}>
            {staff}
            {clef}
            {keySignature && keySignature.JSXElement}
            {measuresJsx}
        </g>
    )
}
