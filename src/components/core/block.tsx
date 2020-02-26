import React from "react";
import { Staff } from "./staff";
import { TrebleClef } from "./clef";

export class MusicBlock extends React.Component {
    render() {
        return (
            <svg height="70" width="8000">
                <TrebleClef />
                <Staff />
            </svg>
        )
    }
}