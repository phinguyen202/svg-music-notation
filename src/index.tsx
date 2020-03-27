import ReactDOM from "react-dom";
import React from "react";
import { SVGMusicNotation } from "./components/core/index";
import { MusicNotation } from "./model/business.model";

// for using interface, should be move to interface
const userSource = `
TrebleClef 4/4 G C D# Bb G | G C D# Bb G
You are my sun -shine, my on -ly sun -shine
A | G C D# Bb G | G C D# Bb G
You make me hap -py, when sky are gray
`;
// sample source
const source: MusicNotation = {
    clef: 'treble', // Treble, Bass, Grand
    staves: [
        { // stave
            meansures: [
                { // meansure
                    timeSignature: {
                        upper: 4,
                        lower: 4
                    }, // 2/4, 3/4, 4/4, 6/8
                    notes: [
                        {
                            note: 'C5', // C, D, E, F, G, A, B
                            accidental: '', // flat, sharp, Double flat, Double sharp, nature (differ with null)
                            duration: 'sixteenth', // whole, half, quarter, eighth, sixteenth
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'D5',
                            accidental: '',
                            duration: 'half',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'E5',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'F5',
                            accidental: '',
                            duration: 'eighth',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'G5',
                            accidental: '',
                            duration: 'sixteenth',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'A5',
                            accidental: '',
                            duration: 'whole',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'B5',
                            accidental: '',
                            duration: 'half',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        // {
                        //     duration: 'quarter'
                        // }
                    ],
                    barline: 'barline', // double, end, bold
                },
                { // meansure
                    timeSignature: {
                        upper: 3,
                        lower: 4
                    }, // 2/4, 3/4, 4/4, 6/8
                    notes: [
                        {
                            note: 'G5', // C, D, E, F, G, A, B
                            accidental: '', // flat, sharp, Double flat, Double sharp, nature (differ with null)
                            duration: 'whole', // whole, half, quarter, eighth, sixteenth
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            duration: 'whole'
                        },
                        {
                            duration: 'half'
                        },
                        {
                            duration: 'quarter'
                        },
                        {
                            duration: 'eighth'
                        },
                        {
                            duration: 'sixteenth'
                        },
                        {
                            note: 'C4',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'C6'
                        }
                    ],
                },
            ],
        },
        { // stave
            meansures: [
                { // meansure
                    timeSignature: {
                        upper: 6,
                        lower: 8
                    },
                    notes: [
                        {
                            note: 'C4',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'C4'
                        },
                        {
                            note: 'D4',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'D4'
                        },
                        {
                            note: 'E4',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'E4'
                        },
                        {
                            note: 'F4',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'F4'
                        },
                        {
                            note: 'G4',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'G4'
                        },
                        {
                            note: 'A4',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'A4'
                        },
                        {
                            note: 'B4',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'B4'
                        },
                        {
                            note: 'C5',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'C5'
                        },
                        {
                            note: 'D5',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'D5'
                        },
                        {
                            note: 'E5',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'E5'
                        },
                        {
                            note: 'F5',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'F5'
                        },
                        {
                            note: 'G5',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'G5'
                        },
                        {
                            note: 'A5',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'A5'
                        },
                        {
                            note: 'B5',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'B5'
                        },
                        {
                            note: 'C6',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'C6'
                        },
                    ],
                }
            ],
        }
    ]
};

ReactDOM.render(
    <SVGMusicNotation height={'100%'} width={'100%'} staves={source.staves} clef={source.clef} />,
    document.getElementById("root")
);