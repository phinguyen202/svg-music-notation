import React from "react";
import { TrebleClef } from "./clef";
import { Staff } from "./staff";
import { StaveProps } from "../../model/business.model";
import { PositionProps } from "../../model/app.model";
import { Meansure } from "./meansure";

export class Stave extends React.Component<StaveProps & PositionProps, {}> {
    constructor(props: StaveProps & PositionProps) {
        super(props);
    }
    
    render() {
        const meansure = this.props.meansures.map((meansure, index) => {
            return <Meansure timeSignature={meansure.timeSignature} noteAndRest={meansure.noteAndRest} barline={meansure.barline} x={50} y={10} key={index} />
        })
        const stavePositionTranslated = `translate(${this.props.x}, ${this.props.y})`;


        return (
            <g transform={stavePositionTranslated}>
                <Staff></Staff>
                { this.renderClef(this.props.clef) }
                {meansure}
            </g>
        );
    }

    renderClef(clef: string) {
        if (!clef) { return;}
        if (clef === 'treble') {
            return <TrebleClef />;
        }
    }
}