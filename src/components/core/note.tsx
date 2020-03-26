import React from "react";
import { XCoordinate, YCoordinate } from "../../model/app.model";
import { NoteProps } from "../../model/business.model";

function WholeNote(props: NoteProperties) {
    return (
        <path transform={`translate(${props.x}, ${props.y})`} d="M 7.0702175,0 C 3.1653113,0 -1.6899323e-4,2.238723 0,5.000169 1.1300677e-4,7.761458 3.1654804,10 7.0702175,10 10.974955,10 14.140379,7.761458 14.140492,5.000169 14.140605,2.238723 10.975124,0 7.0702175,0 Z M 10.176494,4.165916 C 10.831005,6.609168 10.018598,8.058161 8.3032128,8.51792 6.5878281,8.97751 4.6189028,8.273654 3.9642228,5.830408 3.3095426,3.387156 4.2884398,1.747522 6.0039371,1.287966 c 0.2072693,-0.05571 0.4027982,-0.05315 0.4027982,-0.05315 1.5604966,0 3.2059145,0.826823 3.7697587,2.931097 z" />
    );
}

function HalfNote(props: NoteProperties) {
    const stem = props.isStemUp ? <path stroke="black" strokeWidth="1" d="M 12.076271,2.9131353 V -30" /> : <path stroke="black" strokeWidth="1" d="M 0.6,7 V 39.9131353" />;
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <path d="M 7.6994759,-0.01613342 C 6.5595355,-0.00177122 5.343616,0.24673268 4.1918261,0.73382688 0.84116652,2.1494567 -0.69945302,5.0635671 0.30148652,7.4331346 1.3028566,9.8027059 4.465956,10.730085 7.8166058,9.3147348 11.167125,7.899105 13.436125,4.6771558 12.435045,2.3075846 11.777945,0.75282658 9.8763457,-0.04870542 7.6994759,-0.01570262 Z M 9.3053757,1.7487663 c 0.8942293,0 1.5374793,0.24 1.8257493,0.6713878 0.70567,1.0585021 -0.855669,2.9913904 -3.4857893,4.3163115 C 5.0147759,8.0606761 2.3106564,8.2766534 1.6054063,7.217864 0.89973672,6.1593543 2.4610763,4.2264773 5.0911957,2.9015563 6.5446858,2.1701648 8.0965958,1.7444765 9.3053757,1.7487663 Z" />
            {stem}
        </g>
    );
}

function QuarterNote(props: NoteProperties) {
    const stem = props.isStemUp ? <path stroke="black" strokeWidth="1" d="M 12.076271,2.9131353 V -30" /> : <path stroke="black" strokeWidth="1" d="M 0.6,7 V 39.9131353" />;
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <path d="M 7.8164802,9.3315293 C 4.4659422,10.74664 1.3024237,9.8194673 0.30146123,7.4499503 -0.69944487,5.0804923 0.84126673,2.1660273 4.191802,0.75069028 c 3.3504822,-1.415394 7.242065,-0.79547 8.242971,1.57404702 1.000906,2.369461 -1.267758,5.591399 -4.6182928,7.006792 z"></path>
            {stem}
        </g>
    );
}

function EighthNote(props: NoteProperties) {
    const stem = props.isStemUp ? <path stroke="black" strokeWidth="1" d="M 12.076271,2.9131353 V -30" /> : <path stroke="black" strokeWidth="1" d="M 0.6,7 V 39.9131353" />;
    const flag = <path transform={props.isStemUp ? '' : `scale(-1,1) rotate(180 5.7 5)`} d="m 12.076271,-30 v 10.780751 l 0.931029,0.0021 c -0.04788,-0.0038 3.281295,1.170981 4.487907,2.403689 2.30337,2.353334 3.807649,5.922146 3.096942,9.886492 C 20.079849,-4.069345 19.166386,-2.27136 18.24941,0 l 0.658289,-0.06954 c 1.318139,-2.980759 3.50909,-7.198046 2.937903,-11.620154 -0.529419,-4.099068 -3.385629,-6.953998 -5.242445,-9.272145 -1.920664,-2.397778 -3.358806,-3.96373 -3.712738,-8.995332 z" />;
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <path d="M 7.8164802,9.3315293 C 4.4659422,10.74664 1.3024237,9.8194673 0.30146123,7.4499503 -0.69944487,5.0804923 0.84126673,2.1660273 4.191802,0.75069028 c 3.3504822,-1.415394 7.242065,-0.79547 8.242971,1.57404702 1.000906,2.369461 -1.267758,5.591399 -4.6182928,7.006792 z"></path>
            {stem}
            {flag}
        </g>
    );
}

function SixteenthNote(props: NoteProperties) {
    const stem = props.isStemUp ? <path stroke="black" strokeWidth="1" d="M 12.076271,2.9131353 V -30" /> : <path stroke="black" strokeWidth="1" d="M 0.6,7 V 39.9131353" />;
    const flag = <path transform={props.isStemUp ? '' : `scale(-1,1) rotate(180 5.7 5)`} d="m 13.208101,-29.999998 -1.172101,0.0071 c 0,4.14154 0.04287,11.100109 0.04287,14.527927 l 1.129232,0.246552 c 1.314636,0.936575 3.041083,1.995936 4.31368,2.956479 1.768183,1.334617 2.96056,2.547871 3.446571,4.667922 0.425896,1.857982 0.01965,4.830127 -1.257783,7.588018 L 20.209582,0 c 1.100768,-2.402743 1.804513,-3.980906 1.618978,-7.317324 -0.05946,-1.06877 -0.367393,-2.095868 -0.844435,-3.084418 1.222914,-4.564472 0.371727,-7.819117 -4.288082,-13.09846 -1.091698,-1.236831 -3.487941,-2.39846 -3.487941,-6.499496 z m 0.01663,6.821336 c 1.450777,0.930551 3.411953,2.349022 4.462281,3.609985 1.850419,2.221536 3.264865,3.808572 2.765551,8.19033 -1.0467,-1.728728 -2.563235,-3.335159 -4.121746,-4.83431 -1.132413,-1.089279 -2.936675,-3.510969 -3.106086,-6.966005 z" />
    return (
        <g transform={`translate(${props.x}, ${props.y})`}>
            <path d="M 7.8164802,9.3315293 C 4.4659422,10.74664 1.3024237,9.8194673 0.30146123,7.4499503 -0.69944487,5.0804923 0.84126673,2.1660273 4.191802,0.75069028 c 3.3504822,-1.415394 7.242065,-0.79547 8.242971,1.57404702 1.000906,2.369461 -1.267758,5.591399 -4.6182928,7.006792 z"></path>
            {stem}
            {flag}
        </g>
    );
}

interface NoteMapProps extends YCoordinate{
    isStemUp: boolean,
    ledgers?: Array<number>
}
const noteMap: Map<string, NoteMapProps> = new Map<string, NoteMapProps>([
    ['C4', {
        y: 45,
        isStemUp: true,
        ledgers: [5]
    }],
    ['D4', {
        y: 40,
        isStemUp: true
    }],
    ['E4', {
        y: 35,
        isStemUp: true
    }],
    ['F4', {
        y: 30,
        isStemUp: true
    }],
    ['G4', {
        y: 25,
        isStemUp: true
    }],
    ['A4', {
        y: 20,
        isStemUp: true
    }],
    ['B4', {
        y: 15,
        isStemUp: false
    }],
    ['C5', {
        y: 10,
        isStemUp: false
    }],
    ['D5', {
        y: 5,
        isStemUp: false
    }],
    ['E5', {
        y: 0,
        isStemUp: false
    }],
    ['F5', {
        y: -5,
        isStemUp: false
    }],
    ['G5', {
        y: -10,
        isStemUp: false
    }],
    ['A5', {
        y: -15,
        isStemUp: false,
        ledgers: [5]
    }],
    ['B5', {
        y: -20,
        isStemUp: false,
        ledgers: [10]
    }],
    ['C6', {
        y: -25,
        isStemUp: false,
        ledgers: [5, 15]
    }],
]);

export function Note(props: NoteProps & XCoordinate) {
    // note & duration
    const { duration, note } = props;
    const baseNote = noteMap.get(note);
    let jsxNote;
    const ledgers = baseNote.ledgers ? baseNote.ledgers.map((ledger: number, index: number) => {
        return <line transform={`translate(${props.x}, ${baseNote.y})`} x1='-5' y1={ledger} x2='17' y2={ledger} strokeWidth='0.5' stroke='black' key={index} />
    }) : undefined;
    switch (duration) {
        case 'whole':
            jsxNote = <WholeNote x={props.x} y={baseNote.y} />
            break;
        case 'half':
            jsxNote = <HalfNote x={props.x} y={baseNote.y} isStemUp={baseNote.isStemUp} />
            break;
        case 'quarter':
            jsxNote = <QuarterNote x={props.x} y={baseNote.y} isStemUp={baseNote.isStemUp} />
            break;
        case 'eighth':
            jsxNote = <EighthNote x={props.x} y={baseNote.y} isStemUp={baseNote.isStemUp} />
            break;
        case 'sixteenth':
            jsxNote = <SixteenthNote x={props.x} y={baseNote.y} isStemUp={baseNote.isStemUp} />
            break;
        default:
            break;
    }
    return (
        <>
            {jsxNote}
            {ledgers}
            {/* Plus 6 for align center of note */}
            <text transform={`translate(${props.x + 6}, ${80})`} dominantBaseline="middle" textAnchor="middle">{props.lyrics}</text>
        </>
    )
}

interface NoteProperties extends XCoordinate, YCoordinate {
    isStemUp?: boolean;
}