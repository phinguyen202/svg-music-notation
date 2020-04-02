import ReactDOM from "react-dom";
import React from "react";
import { RootSVGMusicNotation } from "./components/core/index";
import { MusicNotation, TimeSignatureProps } from "./model/business.model";

interface SVGMusicNotationProp {
    source: string | MusicNotation;
    width: string;
    height: string;
}

export default class SVGMusicNotation extends React.Component<SVGMusicNotationProp, MusicNotation> {
    constructor(props: SVGMusicNotationProp) {
        super(props);
        if (typeof this.props.source === 'string') {
            this.state = parse(this.props.source);
        } else {
            this.state = this.props.source;
        }
    }

    render() {
        return (<RootSVGMusicNotation width={this.props.width} height={this.props.height} staves={this.state.staves} clef={this.state.clef} />);
    }
}

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
        const allLyrics = stave[1] ? stave[1].split('|') : undefined;
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
                    noteAndRest.lyrics = lyrics && lyrics[index] && lyrics[index] !== '\\E' ? lyrics[index] : '';
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
