import * as React from "react";
import { Configuration } from "../../model/config";
import { Stave } from "./stave";
import { MusicNotation, StaveProps } from "../../model/business.model";
import ReactDOM from "react-dom";

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
                {this.state.dimension && this.renderStave(this.props.staves)}
            </svg>
        );
    }

    renderStave(staves: StaveProps[]): JSX.Element[] {
        console.log(this.state.dimension);
        const stavesList = staves.map((stave: StaveProps, index: number) => {
            if (!index) {
                return (<Stave clef={this.props.clef} meansures={stave.meansures} x={0} y={0} key={index} />);
            }
            return (<Stave meansures={stave.meansures} x={0} y={100 * index} key={index} />);
        });
        return stavesList;
    }
}

interface SVGMusicNotationState {
    dimension: Demension;
}

interface Demension {
    height: number;
    width: number;
}