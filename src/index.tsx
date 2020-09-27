import React from 'react';
import { SvgStaveSource } from '@model/source.model';
import ToolBar from 'components/toolbar';
import Stave from 'components/stave';
import ReactDOM from 'react-dom';
import { DimensionModel } from '@model/common.model';

export interface SvgSheetConfig {
    height: string;
    width: string;
    editable?: boolean;
    save?: {
        handler: Function
    },
    export?: {
        handler: Function
    },
}

export interface SvgMusicNotationProp {
    config: SvgSheetConfig,
    source: SvgStaveSource[],
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
        const staveSourceMap = this.state.dimension && this.props.source.map((staveSource: SvgStaveSource, index: number) => {
            return (<Stave y={100 * index} clef={staveSource.clef} elements={staveSource.elements} width={this.state.dimension.width} />)
        })

        const { config } = this.props;
        const { editable } = config;

        return (
            <div>
                {/* toolbar */}
                {editable && <ToolBar />}
                {/* sheet */}
                <svg width={this.props.config.width} ref={this.smnRef}>
                    {staveSourceMap}
                </svg>
            </div>
        );
    }
}