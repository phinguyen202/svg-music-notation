import * as React from "react";
import { Configuration } from "../../model/config";
import { Stave } from "./stave";
import { MusicNotation, StaveProps } from "../../model/business.model";
import ReactDOM from "react-dom";
import { DemensionModel } from "../../model/app.model";

export class SVGMusicNotation extends React.Component<Configuration & MusicNotation, SVGMusicNotationState> {
    myRef: React.RefObject<SVGSVGElement>;
    constructor(props: Configuration & MusicNotation) {
        super(props);
        this.state = {
            dimension: null
        }
        this.myRef = React.createRef();
    }

    componentDidMount() {
        // getting and setting svg demension
        const svgNode = ReactDOM.findDOMNode(this.myRef.current) as Element;
        const clientRect: DOMRect = svgNode.getBoundingClientRect();
        this.setState({
            dimension: {
                width: clientRect.width,
                height: clientRect.height,
            }
        });
    }

    render() {
        return (
            <svg ref={this.myRef} height={this.props.height} width={this.props.width}>
                {this.state.dimension && this.renderStaves(this.props.staves)}
            </svg>
        );
    }

    /**
     * @description render staves
     * @author Phi Nguyen - phinguyen202@gmail.com
     * @param {StaveProps[]} staves
     * @returns {JSX.Element[]}
     * @memberof SVGMusicNotation
     */
    renderStaves(staves: StaveProps[]): JSX.Element[] {
        const stavesList = staves.map((stave: StaveProps, index: number) => {
            if (!index) {
                return (<Stave clef={this.props.clef} meansures={stave.meansures} width={this.state.dimension.width} x={0} y={0} key={index} />);
            }
            return (<Stave meansures={stave.meansures} x={0} width={this.state.dimension.width} y={100 * index} key={index} />);
        });
        return stavesList;
    }
}

interface SVGMusicNotationState {
    dimension: DemensionModel;
}