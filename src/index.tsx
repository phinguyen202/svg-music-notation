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
                    noteAndRest: [
                        {
                            note: 'G', // C, D, E, F, G, A, B
                            accidental: '', // flat, sharp, Double flat, Double sharp, nature (differ with null)
                            duration: 'whole', // whole, half, quater, eighth, sixteenth
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        }
                    ],
                    barline: 'standard', // double, end, beginRepeat, endRepeat, beginEndRepeat
                },
            ],
        },
        { // stave
            meansures: [
                { // meansure
                    noteAndRest: [
                        {
                            note: 'G', // C, D, E, F, G, A, B
                            accidental: '', // flat, sharp, Double flat, Double sharp, nature (differ with null)
                            duration: 'whole', // whole, half, quater, eighth, sixteenth
                            dot: true,
                            tie: false,
                            lyrics: 'You'
                        }
                    ],
                    barline: 'standard', // double, end, beginRepeat, endRepeat, beginEndRepeat
                },
            ],
        }
    ]
};

ReactDOM.render(
    <SVGMusicNotation height={500} width={800} staves={source.staves} clef={source.clef} />,
    document.getElementById("root")
);