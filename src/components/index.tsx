import React from 'react';
import { MusicNotationModel, StaveModel } from '@model/business.model';
import ReactDOM from 'react-dom';
import { DemensionModel } from '@model/common.model';
import { ClefStave } from './stave/clef-stave/clef-stave';

interface RootSVGMusicNotationState {
    dimension: DemensionModel;
}

const svgPaddingTop = 30;
const svgPaddingBottom = 20;

export class RootSVGMusicNotation extends React.Component<MusicNotationModel, RootSVGMusicNotationState> {
    svgRef: React.RefObject<SVGSVGElement>;
    constructor(props: MusicNotationModel) {
        super(props);
        // props demension for render root svg
        // state demension for render stave
        this.state = {
            dimension: null
        }
        this.svgRef = React.createRef();
    }

    componentDidMount() {
        // getting and setting svg demension
        const svgNode = ReactDOM.findDOMNode(this.svgRef.current) as Element;
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
            <svg ref={this.svgRef} height={this.props.height} width={this.props.width}>
                {this.state.dimension && this.renderStaves(this.props.staves)}
            </svg>
        );
    }

    /**
     * @description render staves
     * re-write this function to implement more type of stave
     * @author Phi Nguyen - phinguyen202@gmail.com
     * @param {StaveModel[]} staves
     * @returns {JSX.Element[]}
     * @memberof RootSVGMusicNotation
     */
    renderStaves(staves: StaveModel[]): JSX.Element[] {
        const stavesList = staves.map((stave: StaveModel, index: number) => {
            return (<ClefStave y={svgPaddingTop + (120 * index)} width={this.state.dimension.width} measures={stave.measures} keySigNumber={stave.keySigNumber} key={index} />);
        });
        // rendering padding bottom
        // 97 is stave height which is calculated from 0 of stave
        stavesList.push(<rect y={svgPaddingTop + 97 + (120 * (staves.length - 1))} width={this.state.dimension.width} key={staves.length} height={svgPaddingBottom} fillOpacity={0} strokeOpacity={0}/>);
        return stavesList;
    }
}