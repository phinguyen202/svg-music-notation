import { eltSVG, Component } from 'source-renderer';
const width = 0.12; // why this number ?
export class Stem extends Component {
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        const { x = 0, y = 0, direction = 'up', height } = this.props;
        if (direction === 'up') {
            return eltSVG('path', {
                d: `M${x} ${y} v ${-height} h ${width} v ${height} Z`,
            });
        }
        else {
            return eltSVG('path', {
                d: `M${x} ${y} v ${height} h ${width} v ${-height} Z`,
            });
        }
    }
}
