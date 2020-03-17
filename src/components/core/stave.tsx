import React from "react";
import { TrebleClef } from "./clef";
import { Staff } from "./staff";
import { StaveProps } from "../../model/business.model";
import { Position } from "../../model/app.model";
import { Meansure } from "./meansure";

export class Stave extends React.Component<StaveProps & Position, {}> {
    constructor(props: StaveProps & Position) {
        super(props);
    }
    
    render() {
        {/* loop measures */ }
        const meansure = this.props.meansures.map((meansure, index) => {
            return <Meansure x={50} y={20} key={index} />
        })
        const stavePositionTranslated = `translate(${this.props.x}, ${this.props.y})`;
        return (
            <g transform={stavePositionTranslated}>
                <Staff></Staff>
                <TrebleClef></TrebleClef>
                {meansure}
            </g>
        );
    }
}