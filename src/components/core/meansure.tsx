import React from "react";
import { Note } from "./note";
import { CoordinateModel, WidthDemension } from "../../model/app.model";
import { Bar } from "./bar";
import { Rest } from "./rest";
import { MeansureProps, NoteProps } from "../../model/business.model";
import { TimeSignature } from "./time-signature";

export function Meansure(props: MeansureProps & CoordinateModel & WidthDemension) {
    // render time signature
    const timeSignature = props.timeSignature && <TimeSignature upper={props.timeSignature.upper} lower={props.timeSignature.lower} />;
    const timeSigOffset = timeSignature ? 0 : 0;
    const spaceBetweenNote = (props.width - timeSigOffset) / (props.notes.length + 1);
    const mensureElements = props.notes.map((ele: NoteProps, index: number) => {
        if (ele.note) { //this is note
            return <Note x={timeSigOffset + (spaceBetweenNote * (index + 1))} duration={ele.duration} note={ele.note} accidental={ele.accidental} dot={ele.dot} tie={ele.tie} lyrics={ele.lyrics} key={index} />
        } else { // rest
            return <Rest x={timeSigOffset + (spaceBetweenNote * (index + 1))} duration={ele.duration} key={index}/>
        }
    });
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            {timeSignature}
            {mensureElements}
            <Bar x={props.width - 0.5} type={(props.barline ? props.barline : 'barline')}/>
        </g>
    );
}

interface DemensionProps {
    height?: number;
}