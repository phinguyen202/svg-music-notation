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
                            note: 'C', // C, D, E, F, G, A, B
                            accidental: '', // flat, sharp, Double flat, Double sharp, nature (differ with null)
                            duration: 'sixteenth', // whole, half, quater, eighth, sixteenth
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'D',
                            accidental: '',
                            duration: 'half',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'E',
                            accidental: '',
                            duration: 'quarter',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'F',
                            accidental: '',
                            duration: 'eighth',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'G',
                            accidental: '',
                            duration: 'sixteenth',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'A',
                            accidental: '',
                            duration: 'whole',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'B',
                            accidental: '',
                            duration: 'half',
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        },
                        // {
                        //     duration: 'quater'
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
                            note: 'G', // C, D, E, F, G, A, B
                            accidental: '', // flat, sharp, Double flat, Double sharp, nature (differ with null)
                            duration: 'whole', // whole, half, quater, eighth, sixteenth
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
                            note: 'G', // C, D, E, F, G, A, B
                            accidental: '', // flat, sharp, Double flat, Double sharp, nature (differ with null)
                            duration: 'whole', // whole, half, quater, eighth, sixteenth
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        }
                    ],
                }
            ],
        }
    ]
};

ReactDOM.render(
    <SVGMusicNotation height={'1000'} width={'1000'} staves={source.staves} clef={source.clef} />,
    document.getElementById("root")
);