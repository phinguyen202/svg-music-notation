import React, { useEffect } from "react";
import { WholeNote, QuarterNote, HaflNote, EighthNote, SixteenthNote } from "./note";
import { PositionProps } from "../../model/app.model";
import { BarLine, DoubleBarLine, BoldDoubleBarLine } from "./bar";
import { WholeRest, HalfRest, QuarterRest, EighthRest, SixteenthRest } from "./rest";
import { MeansureProps } from "../../model/business.model";
import { TimeSignature } from "./time-signature";

export function Meansure(props: MeansureProps & PositionProps) {
    const startPositionTranslated = `translate(${props.x}, ${props.y})`;
    return (
        <g transform={startPositionTranslated}>
            { props.timeSignature && <TimeSignature upper={props.timeSignature.upper} lower={props.timeSignature.lower}/>}
            <WholeNote />
            <HaflNote isStemUp={true}/>
            <QuarterNote isStemUp={false}/>
            <EighthNote isStemUp={false}/>
            <SixteenthNote isStemUp={true}/>
            <BarLine />
            <DoubleBarLine />
            <BoldDoubleBarLine />
            <WholeRest />
            <HalfRest />
            <QuarterRest />
            <EighthRest />
            <SixteenthRest />
        </g>
    );
}