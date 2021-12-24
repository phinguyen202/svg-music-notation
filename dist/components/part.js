import { eltSVG, Component } from 'source-renderer';
import { Stave } from "./base/index";
import { MeasureGroup } from "./group/measure";
import { SPACE_TYPE } from "../model/enum/space";
import { GlobalConfig } from "../config/index";
/**
 * @description This Component hold a list of primary element
 * 1. calculate coordinate for each element based on part width and element width
 * 2. calculate total height of part
 * @author phinguyen202
 * @export
 * @class PartCom
 * @extends {Component}
 */
export class PartCom extends Component {
    constructor(part) {
        super();
        this.part = part;
    }
    render() {
        const { _id, measure } = this.part;
        const { padding, width, widthUnit, stave } = GlobalConfig;
        const staveWidth = width - padding * 2;
        // building Measures
        const elements = (Array.isArray(measure) ? measure : [measure]).reduce((acc, measure) => {
            return acc.concat(MeasureGroup(measure));
        }, []);
        const marginLeft = stave.marginLeft * widthUnit; // margin left
        const { fixedWidth, totalRelUnit } = elements.reduce((acc, element) => {
            const { space } = element;
            if (space) {
                if (space.type === SPACE_TYPE.Absolute) {
                    acc.fixedWidth += (space.length + element.width) * widthUnit;
                }
                else if (space.type === SPACE_TYPE.Relative) {
                    acc.totalRelUnit += space.length;
                }
            }
            return acc;
        }, { fixedWidth: marginLeft, totalRelUnit: 0 });
        const perUnit = (staveWidth - fixedWidth) / totalRelUnit;
        const totalElement = elements.length - 1;
        elements.reduce((x, element, index) => {
            const { space } = element;
            if (space.type === SPACE_TYPE.Absolute) {
                element.setPosition({ x });
                x += (space.length + element.width) * widthUnit;
            }
            else if (space.type === SPACE_TYPE.Relative) {
                element.setPosition({ x });
                x += space.length * perUnit;
            }
            else if (space.type === SPACE_TYPE.None) {
                if (index === totalElement) {
                    element.setPosition({ x });
                }
                else {
                    element.setPosition({ x: x - marginLeft });
                }
            }
            return x;
        }, marginLeft);
        return eltSVG('g', {
            id: _id,
            transform: `translate(${padding} ${padding})`
        }, new Stave({ lineNumber: 5, width: staveWidth }), ...elements);
    }
}
