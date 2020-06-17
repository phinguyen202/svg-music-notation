import { WidthDemension } from "@model/common.model";
import React from "react";
import { CoordinateModel } from '@model/common.model';
import { MeasureModel } from "@model/business.model";
import Staff from '@base/staff-ledger/staff'
import TrebleClef from "@base/clef/treble";
import { KeySignature } from "./key-signature";
import { Measure } from "./measure";

// staff config
interface ClefStaff {
    lineNumber: number;
    spaceDistance: number;
}

const clefStaff :ClefStaff = {
    lineNumber: 5,
    spaceDistance: 10
}

interface Props extends CoordinateModel, WidthDemension {
    measures: MeasureModel[];
	keySigNumber?: number;
}

const offset: number = 10;

export function ClefStave({x = 0, y = 0, width, measures, keySigNumber }: Props): JSX.Element {
    // offset - TrebleClef - offset - key signature - offset - measures
    const staff = <Staff.JSX lineNumber={clefStaff.lineNumber} spaceDistance={clefStaff.spaceDistance} width={width}/>
    let currentX = offset;
    const clef = <TrebleClef.JSX x={currentX}/>
    currentX += TrebleClef.width + offset;
    const keySignature = keySigNumber && KeySignature({x: currentX, keySigNumber});
    if (keySignature) {
        currentX += keySignature.width;
    }
    const measureWidth = (width - currentX) / measures.length;
    const measuresJsx = measures.map((measures, index) => {
        return <Measure timeSignature={measures.timeSignature} notes={measures.notes} barline={measures.barline} width={measureWidth} x={currentX + measureWidth*index} y={10} key={index} />
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
