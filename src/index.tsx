import ReactDOM from "react-dom";
import React from "react";
import { SVGMusicNotation } from "./components/core/index";
import { MusicNotation, TimeSignatureProps, NoteProps, RestProps } from "./model/business.model";

// for using interface, should be move to interface
const userSource = `
TrebleClef 4/4 C5-4n D5-4n E5-4n D5-4n || C5-4n D5-4n F5-4n E5-4n |B C5-4n D5-4n E5-4n D5-4n C5-4n |B
I don't know you, | but I want you | all the more for that
R-4n A4-8n G4-8n A4-8n G4-8n A4-8n G4-8n | C5-4n D5-4n E5-4n D5-8n C5-8n | C5-4n D5-4n F5-4n E5-4n |
\\E \\E \\E \\E \\E \\E | Words fall through me and | al -ways fool me,
`;

const barMap: Map<string, string> = new Map<string, string>([
    ['|', 'barline'],
    ['||', 'double'],
    ['|B', 'bold double'],
]);

const durationMap: Map<string, string> = new Map<string, string>([
    ['1n', 'whole'],
    ['2n', 'half'],
    ['4n', 'quarter'],
    ['8n', 'eighth'],
    ['16n', 'sixteenth'],
]);
function parse(source: string): any {
    // declare notation object
    const notation = {} as any;
    // split source to lines
    console.log(source);
    const lines = source.trim().split(/\r?\n/);
    console.log(lines);
    // chunk lines to get staves
    const staves = lines.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 2);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray
    }, []);

    // whether the clef is exist
    const firstWord = staves[0][0].match(/(\S*)\s/)[1];
    const indexOfClef = firstWord.indexOf('Clef');
    if (firstWord && indexOfClef) {
        const clef = firstWord.slice(0, indexOfClef).toLowerCase();
        notation.clef = clef;
        // remove clef word
        staves[0][0] = staves[0][0].substr(staves[0][0].indexOf(" ") + 1);
    }

    // extract staves
    notation.staves = staves.map(stave => {
        // extract meansure, lyrics from stave
        const measures = stave[0].match(/.*?(\|\||\|B|\|)/g);
        const allLyrics = stave[1] ? stave[1].split('|'): undefined;
        console.log(allLyrics);

        const paseredMeasures = measures.map((m: string, index: number) => {
            m = m.trim();
            const lyrics = allLyrics && allLyrics[index] ? allLyrics[index].trim().split(' ') : undefined;
            const meansure: any = {};
            const eles = m.split(' ');
            const bar = eles.pop();
            meansure.barline = barMap.get(bar);
            // whether timeSignature is exist
            if (eles[0].includes('/')) {
                // get time signature
                const timeSignature: TimeSignatureProps = {
                    upper: +eles[0][0],
                    lower: +eles[0][2]
                };
                meansure.timeSignature = timeSignature;
                // delete timeSignature (first element)
                eles.shift();
            }
            // getting note and rest
            meansure.notes = eles.map((nAndR: any, index: number) => {
                const noteAndRest = {} as any;
                const extractedNote = nAndR.split('-');
                if (extractedNote[0] !== 'R') { // Note
                    noteAndRest.note = extractedNote[0];
                    // set other attributes
                    noteAndRest.lyrics = lyrics && lyrics[index] && lyrics[index] !== '\\E'? lyrics[index] : '';
                }
                noteAndRest.duration = durationMap.get(extractedNote[1]);
                return noteAndRest;
            });
            return meansure;
        });
        return { measures: paseredMeasures };
    });
    return notation;
}

const parsedSource: MusicNotation = parse(userSource);

// sample source
const source: MusicNotation = {
    clef: 'treble', // Treble, Bass, Grand
    staves: [
        { // stave
            measures: [
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
                            dot: 'single',
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'D5',
                            accidental: '',
                            duration: 'half',
                            dot: 'single',
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'E5',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'F5',
                            accidental: '',
                            duration: 'eighth',
                            dot: 'single',
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'G5',
                            accidental: '',
                            duration: 'sixteenth',
                            dot: 'single',
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'A5',
                            accidental: '',
                            duration: 'whole',
                            dot: 'single',
                            tie: false,
                            lyrics: 'You'
                        },
                        {
                            note: 'B5',
                            accidental: '',
                            duration: 'half',
                            dot: 'single',
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
                            dot: 'single',
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
                            dot: 'single',
                            tie: false,
                            lyrics: 'C6'
                        }
                    ],
                },
            ],
        },
        { // stave
            measures: [
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
                            dot: 'single',
                            tie: false,
                            lyrics: 'C4'
                        },
                        {
                            note: 'D4',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'D4'
                        },
                        {
                            note: 'E4',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'E4'
                        },
                        {
                            note: 'F4',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'F4'
                        },
                        {
                            note: 'G4',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'G4'
                        },
                        {
                            note: 'A4',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'A4'
                        },
                        {
                            note: 'B4',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'B4'
                        },
                        {
                            note: 'C5',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'C5'
                        },
                        {
                            note: 'D5',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'D5'
                        },
                        {
                            note: 'E5',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'E5'
                        },
                        {
                            note: 'F5',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'F5'
                        },
                        {
                            note: 'G5',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'G5'
                        },
                        {
                            note: 'A5',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'A5'
                        },
                        {
                            note: 'B5',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'B5'
                        },
                        {
                            note: 'C6',
                            accidental: '',
                            duration: 'quarter',
                            dot: 'single',
                            tie: false,
                            lyrics: 'C6'
                        },
                    ],
                }
            ],
        }
    ]
};
// console.log(source);
ReactDOM.render(
    <SVGMusicNotation height={'100%'} width={'800'} staves={parsedSource.staves} clef={parsedSource.clef} />,
    document.getElementById("root")
);