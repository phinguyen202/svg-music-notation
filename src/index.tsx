import React from 'react';
import ReactDOM from 'react-dom';
import { DimensionModel } from '@model/common.model';
import { MeiModel, Mei } from '@model/mei';
import { SvgSheetConfig } from '@model/config';
import MEI from 'components/mei';
import './css/font.css';

export interface SvgMusicNotationProp {
    config: SvgSheetConfig;
    source: MeiModel | Mei;
}
export class SvgMusicNotation extends React.Component<SvgMusicNotationProp, DimensionModel> {
    smnRef: React.RefObject<SVGSVGElement>;
    constructor(props: SvgMusicNotationProp) {
        super(props);
        this.smnRef = React.createRef();
    }

    componentDidMount() {
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

        const mei = this.state && <MEI source={source} config={config.mei} width={this.state.width} />

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