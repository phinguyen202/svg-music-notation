import * as React from "react";
import { Configuration } from "../../model/config";
import { Stave } from "./stave";
import { MusicNotation, StaveProps } from "../../model/business.model";

export class SVGMusicNotation extends React.Component<Configuration & MusicNotation, {}> {
    constructor(props: Configuration & MusicNotation) {
        super(props);
    }

    render() {
        // loop staves
        const staves = this.props.staves.map((stave: StaveProps, index: number) => {
            return (<Stave meansures={stave.meansures} x={0} y={100 * index} key={index} />);
        });

        return (
            <svg height={this.props.height} width={this.props.width}>
                {staves}
            </svg>
        );
    }
}