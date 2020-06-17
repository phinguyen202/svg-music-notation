import React from "react";
import { TrebleClef } from "./clef";
import { Staff } from "./staff";
import { StaveModel } from "../model/business.model";
import { CoordinateModel, WidthDemension, } from "../model/common.model";
import { Measure } from "./measure";
import { KeySignature } from "./key-signature";

export class Stave extends React.Component<StaveModel & CoordinateModel & WidthDemension, {}> {
    constructor(props: StaveModel & CoordinateModel & WidthDemension) {
        super(props);
    }

    render() {
        // render clef
        const clef = this.renderClef(this.props.clef);
        // render measures
        // offetX is long number in pixel that the stave need to render stuff like staff, accidentals, etc
        let offsetX = clef ? 30 : 0;
        
        const keySignature = this.props.keySigNumber ? <KeySignature clef={this.props.clef} keySigNumber={this.props.keySigNumber} x={offsetX} y={10}/> : undefined;
        // console.log(keySignature);
        if (keySignature) { offsetX += Math.abs(this.props.keySigNumber) * 10 + 10; }
        const measureHeight = (this.props.width - offsetX) / this.props.measures.length;
        const measure = this.props.measures.map((measure, index) => {
            return <Measure timeSignature={measure.timeSignature} notes={measure.notes} barline={measure.barline} width={measureHeight} x={offsetX + measureHeight*index} y={10} key={index} />
        });
        return (
            <g transform={`translate(${this.props.x}, ${this.props.y})`}>
                <Staff width={this.props.width} />
                {clef}
                {keySignature}
                {measure}
            </g>
        );
    }

    /**
     * @description render clef
     * @author Phi Nguyen - phinguyen202@gmail.com
     * @param {string} clef
     * @returns JSX.Element
     * @memberof Stave
     */
    renderClef(clef: string): JSX.Element {
        if (!clef) { return; }
        if (clef === 'treble') {
            return <TrebleClef x={10} y={0}/>;
        }
    }
}

interface DemensionProps {
    height?: number;
}