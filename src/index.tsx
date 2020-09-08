import React from 'react';
import { RootSVGMusicNotation } from './components/index';
import { MusicNotationModel } from './model/business.model';
import { Configuration } from './model/config';
import { parse } from './utils/parser';
import { SvgSheetConfig } from './expose/sheet';
import { SvgStave } from './expose/stave';
import Staff from '@base/staff-ledger/staff';

interface SVGMusicNotationProp {
    source: string | MusicNotationModel;
    width: string;
    height: string;
    config?: Configuration;
}

const defaultConfig: Configuration = {
    lyric: true
}

export default class SVGMusicNotation extends React.Component<SVGMusicNotationProp, MusicNotationModel> {
    static defaultProps = {
        config: defaultConfig
    }
    constructor(props: SVGMusicNotationProp) {
        super(props);
        if (typeof this.props.source === 'string') {
            this.state = {
                ...this.state,
                ...parse(this.props.source, this.props.config)
            }
        } else {
            this.state = {
                ...this.state,
                ...{ source: this.props.source }
            }
        }
    }

    render() {
        return (<RootSVGMusicNotation width={this.props.width} height={this.props.height} staves={this.state.staves} config={this.props.config} />);
    }
}

interface SVGTestProp {
    config: SvgSheetConfig,
    staves: SvgStave[]
}
export class SVGTest extends React.Component<SVGTestProp, any> {
    constructor(props: SVGTestProp) {
        super(props);
    }

    render() {
        // console.log(this.props.staves);
        
        const staveHeight = 50;
        const renderedStaves = this.props.staves.map((stave: SvgStave, index: number) => {
            return <Staff.JSX key={stave.id} lineNumber={5} space={10} width={500} y={index*staveHeight}/>;
        });
        return (
            <svg>
                {renderedStaves}
            </svg>
        )
    }
}