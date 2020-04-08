import React from "react";
import { RootSVGMusicNotation } from "./components/core/index";
import { MusicNotation, TimeSignatureProps } from "./model/business.model";
import { Configuration, defaultConfig } from "./model/config";

interface SVGMusicNotationProp {
    source: string | MusicNotation;
    width: string;
    height: string;
    config?: Configuration;
}

export default class SVGMusicNotation extends React.Component<SVGMusicNotationProp, MusicNotation> {
    static defaultProps = {
        config: defaultConfig
    }
    constructor(props: SVGMusicNotationProp) {
        super(props);
        this.setState
        if (typeof this.props.source === 'string') {
            this.state = {
                ...this.state,
                ...parse(this.props.source, this.props.config)
            }
        } else {
            this.state = {
                ...this.state,
                ...{ source: this.props.source }
            }
        }
    }

    render() {
        return (<RootSVGMusicNotation width={this.props.width} height={this.props.height} staves={this.state.staves} clef={this.state.clef} config={this.props.config}/>);
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

function parse(source: string, config: Configuration): any {
    // declare notation object
    const notation = {} as any;
    // split source to lines
    // console.log(source);
    const lines = source.trim().split(/\r?\n/);
    // console.log(lines);
    // chunk lines to get staves
    const staves = !config?.lyric ? lines : lines.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 2);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray
    }, []);

    if (config?.lyric) {
        const parsedClef = parseClef(staves[0][0]);
        notation.clef = parsedClef.clef;
        staves[0][0] = parsedClef.stave;

        notation.staves = staves.map(stave => {
            return parseStave(stave[0], stave[1]);
        });
    } else {
        const parsedClef = parseClef(staves[0]);
        notation.clef = parsedClef.clef;
        staves[0] = parsedClef.stave;

        notation.staves = staves.map(stave => {
            return parseStave(stave);
        });
    }
    return notation;
}

function parseClef(firstStave: string) {
    // whether the clef is exist
    let clef;
    const firstWord = firstStave.match(/(\S*)\s/)[1];
    const indexOfClef = firstWord.indexOf('Clef');
    if (firstWord && indexOfClef) {
        clef = firstWord.slice(0, indexOfClef).toLowerCase();
        // remove clef word
        firstStave = firstStave.substr(firstStave.indexOf(" ") + 1);
    }
    return  {
        stave: firstStave,
        clef: clef
    }
}

function parseStave(stave: string, lyrics?: string) {
    // extract meansure, lyrics from stave
    const measures = stave.match(/.*?(\|\||\|B|\|)/g);
    const lyricsList = lyrics ? lyrics.split('|') : undefined;
    // console.log(allLyrics);

    const paseredMeasures = measures.map((measure: string, index: number) => {
        return parseMeasure(measure, lyricsList ? lyricsList[index] : undefined);
    });
    return { measures: paseredMeasures };
}

function parseMeasure(measure: string, lyrics?: string) {
    const splitMeasure = measure.trim().split(' ');
    const splitLyric = lyrics ? lyrics.trim().split(' ') : undefined;
    const meansure: any = {};
    const bar = splitMeasure.pop();
    meansure.barline = barMap.get(bar);
    // whether timeSignature is exist
    if (splitMeasure[0].includes('/')) {
        // get time signature
        const timeSignature: TimeSignatureProps = {
            upper: +splitMeasure[0][0],
            lower: +splitMeasure[0][2]
        };
        meansure.timeSignature = timeSignature;
        // delete timeSignature (first element)
        splitMeasure.shift();
    }
    // getting note and rest
    meansure.notes = splitMeasure.map((nAndR: any, index: number) => {
        const noteAndRest = {} as any;
        const extractedNote = nAndR.split('-');
        if (extractedNote[0] !== 'R') { // Note
            noteAndRest.note = extractedNote[0];
            // set other attributes
            noteAndRest.lyrics = splitLyric && splitLyric[index] && splitLyric[index] !== '\\E' ? splitLyric[index] : '';
        }
        noteAndRest.duration = durationMap.get(extractedNote[1]);
        return noteAndRest;
    });
    return meansure;
}