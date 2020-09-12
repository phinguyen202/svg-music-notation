import React from 'react';
import { SvgStaveSource } from '@model/source.model';
import ToolBar from 'components/toolbar';
import Stave from 'components/stave';

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

export class SvgMusicNotation extends React.Component<SvgMusicNotationProp, any> {
    // simplify the interface
    // 3 things to done on interface
    // 1. provide 1 React Component to render sheet
    // 2. user can input a source and a config for the sheet
    // 3. provide a way that user can use to get current source of the sheet

    constructor(props: SvgMusicNotationProp) {
        super(props);
    }

    render() {
        const staveSourceMap = this.props.source.map((staveSource: SvgStaveSource, index: number) => {
            return (<Stave y={100 * index} clef={staveSource.clef} elements={staveSource.elements} />)
        })

        const { config } = this.props;
        const { editable } = config;

        return (
            <div>
                {/* toolbar */}
                {editable && <ToolBar />}
                {/* sheet */}
                <svg>
                    {staveSourceMap}
                </svg>
            </div>
        );
    }
}