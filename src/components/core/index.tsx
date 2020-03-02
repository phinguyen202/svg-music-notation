import * as React from "react";
import { Staff } from "./staff";
import { TrebleClef } from "./clef";
import { Configuration } from "../../model/config";

export class SVGMusicNotation extends React.Component<Configuration, {}> {
    constructor(props: Configuration) {
        super(props);
    }
    render() {
        return (
            <svg height={this.props.height} width={this.props.width}>
                <TrebleClef />
                <Staff />
            </svg>
        )
    }
}