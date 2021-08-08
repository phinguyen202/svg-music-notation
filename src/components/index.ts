import '@css/font.css';
import Component from '@lib/component';
import { elt } from '@lib/dom';
import ScorePartwise from './score-partwise';

export class Sheet extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { store } = this.props;
        const { source, config } = store;
        const { width, height, fontSize } = config;

        return elt('svg', {
            xmlns: "http://www.w3.org/2000/svg",
            fontFamily: "Bravura, BravuraText",
            width,
            height,
            fontSize
        }, {
            fn: ScorePartwise.constructor,
            store: source
        });
    }
}