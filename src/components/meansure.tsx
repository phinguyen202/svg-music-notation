import React from "react";
import { Note } from "./note";
import { CoordinateModel, WidthDemension } from "../model/common.model";
import { Bar } from "./bar";
import { Rest } from "./rest";
import { MeansureProps, NoteProps } from "../model/business.model";
import { TimeSignature } from "./time-signature";

export function Meansure(props: MeansureProps & CoordinateModel & WidthDemension) {
    // render time signature
    const timeSignature = props.timeSignature && <TimeSignature upper={props.timeSignature.upper} lower={props.timeSignature.lower} />;
    // -12 (width of whole, half, quarter note) to balance meansure
    let offsetX = -12 + (timeSignature ? 17 : 0);
    const spaceBetweenNote = (props.width - offsetX) / (props.notes.length + 1);
    const mensureElements = props.notes.map((ele: NoteProps, index: number) => {
        if (ele.note) { //this is note
            return <Note x={offsetX + (spaceBetweenNote * (index + 1))} duration={ele.duration} note={ele.note} accidental={ele.accidental} dot={ele.dot} tie={ele.tie} lyrics={ele.lyrics} key={index} />
        } else { // rest
            return <Rest x={offsetX + (spaceBetweenNote * (index + 1))} duration={ele.duration} key={index}/>
        }
    });
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            {timeSignature}
            {mensureElements}
            <Bar x={props.width} type={(props.barline ? props.barline : 'barline')}/>
        </g>
    );
}