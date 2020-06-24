import React from "react";
import { RootSVGMusicNotation } from "./components/index";
import { MusicNotationModel } from "./model/business.model";
import { Configuration } from "./model/config";
import { parse } from "./utils/parser";

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
        return (<RootSVGMusicNotation width={this.props.width} height={this.props.height} staves={this.state.staves} config={this.props.config}/>);
    }
}
