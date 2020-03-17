import React, { useEffect } from "react";
import { WholeNote, QuarterNote, HaflNote, EighthNote, SixteenthNote } from "./note";
import { Position } from "../../model/app.model";

export function Meansure(props: Position) {
    const startPositionTranslated = `translate(${props.x}, ${props.y})`;
    return (
        <g transform={startPositionTranslated}>
            <WholeNote />
            <HaflNote isStemUp={true} transform={`translate(${10}, ${100})`}/>
            <QuarterNote isStemUp={false} transform={`translate(${5}, ${50})`}/>
            <EighthNote isStemUp={false}/>
            <SixteenthNote isStemUp={false}/>
        </g>
    );
}