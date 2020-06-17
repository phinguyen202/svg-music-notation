import React from "react";
import { Note } from "./note";
import { CoordinateModel, WidthDemension } from "../model/common.model";
import { Bar } from "./bar";
import { Rest } from "./rest";
import { MeasureModel, NoteModel } from "../model/business.model";
import { TimeSignature } from "./time-signature";
import DoubleBarLine from "./base/bar/double-barline";
import { NoteBuilder } from './builder/note-builder';


export function Measure(props: MeasureModel & CoordinateModel & WidthDemension) {
    // render time signature
    const timeSignature = props.timeSignature && <TimeSignature upper={props.timeSignature.upper} lower={props.timeSignature.lower} />;
    // -12 (width of whole, half, quarter note) to balance measure
    let offsetX = -12 + (timeSignature ? 17 : 0);
    const spaceBetweenNote = (props.width - offsetX) / (props.notes.length + 1);
    const mensureElements = props.notes.map((ele: NoteModel, index: number) => {
        if (ele.note) { // this is note
            return <NoteBuilder x={offsetX + (spaceBetweenNote * (index + 1))} y={0} duration={ele.duration} accidental={ele.accidental} dot={ele.dot} key={index} />
        } else { // rest
            return <Rest x={offsetX + (spaceBetweenNote * (index + 1))} duration={ele.duration} key={index}/>
        }
    });
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            {timeSignature}
            {mensureElements}
            <Bar x={props.width} type={(props.barline ? props.barline : 'barline')}/>
            {/* <DoubleBarLine.JSX x={1} y={1} height={100}/> */}
        </g>
    );
}