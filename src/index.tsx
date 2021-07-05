import React from 'react';
import { SvgStaveSource } from '@model/source.model';
import Stave from '@stave/index';
import ReactDOM from 'react-dom';
import { DimensionModel } from '@model/common.model';
import { init } from '@utils/idGenerator';
import './css/font.css';

export interface SvgSheetConfig {
    height: string;
    width: string;
    stave?: StaveConfig;
    editable?: boolean;
    save?: {
        handler: Function;
    },
    export?: {
        handler: Function;
    },
}

export interface StaveConfig {
    height?: number; // from top of staff subtract 10, default: 120
    marginTop?: number; // default: 20
}

export interface SvgSource {
    staves: SvgStaveSource[];
    idIncrementNo?: number;
}

export interface SvgMusicNotationProp {
    config: SvgSheetConfig;
    source: SvgSource;
    // header?: React.ReactNode
}

interface SvgMusicNotationState {
    dimension: DimensionModel;
}

export class SvgMusicNotation extends React.Component<SvgMusicNotationProp, SvgMusicNotationState> {
    // simplify the interface
    // 3 things to done on interface
    // 1. provide 1 React Component to render sheet
    // 2. user can input a source and a config for the sheet
    // 3. provide a way that user can use to get current source of the sheet
    smnRef: React.RefObject<SVGSVGElement>;
    constructor(props: SvgMusicNotationProp) {
        super(props);
        this.state = {
            dimension: null
        }
        this.smnRef = React.createRef();
    }

    componentDidMount() {
        // getting and setting svg demension
        const svgNode = ReactDOM.findDOMNode(this.smnRef.current) as Element;
        const clientRect: DOMRect = svgNode.getBoundingClientRect();
        this.setState({
            dimension: {
                width: clientRect.width,
                height: clientRect.height,
            }
        });
    }

    render() {
        const { source, config } = this.props;
        const { staves, idIncrementNo } = source;
        const { width, height, editable, stave } = config;
        const { dimension } = this.state;

        // initialize Id Generator
        init(idIncrementNo); // => move to one-run block

        const staveHeight = stave && stave.height ? stave.height : 120;
        const marginTop = stave && stave.marginTop ? stave.marginTop : 20;

        const staveSourceMap = dimension && staves.map(({ id, elements, slurs }: SvgStaveSource, index: number) => {
            return (<Stave key={id} id={id} y={staveHeight * index + marginTop} width={dimension.width} elements={elements} slurs={slurs} />)
        });

        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                fontFamily="Bravura, BravuraText"
                fontSize="2em"
                ref={this.smnRef}>
                {staveSourceMap}
            </svg>
        );
    }
}