import React from 'react';
import ReactDOM from 'react-dom';
import { DimensionModel } from '@model/common.model';
import './css/font.css';
import { MeiHead, MeiModel, Music } from '@model/mei';
import { SvgSheetConfig } from '@model/config';
import MEI from 'components/mei';

export interface SvgMusicNotationProp {
    config: SvgSheetConfig;
    source: MeiModel | Music | MeiHead;
}
export class SvgMusicNotation extends React.Component<SvgMusicNotationProp, DimensionModel> {
    // simplify the interface
    // 3 things to done on interface
    // 1. provide 1 React Component to render sheet
    // 2. user can input a source and a config for the sheet
    // 3. provide a way that user can use to get current source of the sheet
    smnRef: React.RefObject<SVGSVGElement>;
    constructor(props: SvgMusicNotationProp) {
        super(props);
        this.smnRef = React.createRef();
    }

    componentDidMount() {
        // getting and setting svg demension
        const svgNode = ReactDOM.findDOMNode(this.smnRef.current) as Element;
        const clientRect: DOMRect = svgNode.getBoundingClientRect();
        this.setState({
                width: clientRect.width,
                height: clientRect.height
        });
    }

    render() {
        const { source, config } = this.props;
        const { width, height } = config;

        const mei = this.state && (<MEI source={source} config={config.mei} width={this.state.width} />)

        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                fontFamily="Bravura, BravuraText"
                fontSize="3em"
                ref={this.smnRef}>
                {mei}
            </svg>
        );
    }
}