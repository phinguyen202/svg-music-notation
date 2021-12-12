import { eltSVG, Component } from 'source-renderer';
import { Measure, Part } from '@model/musicXML';
import { Stave } from '@base/index';
import { MeasureGroup } from '@group/measure';
import { Glyph, SpaceUnit, WidthDimension } from '@model/common.model';
import { SPACE_TYPE } from '@model/enum/space';
import { GlobalConfig } from '@config/index';

const spaceMap: Map<string, SpaceUnit> = new Map<string, SpaceUnit>([
    ['time-signature', ],
])

/**
 * @description This Component hold a list of primary element
 * 1. calculate coordinate for each element based on part width and element's width
 * 2. calculate total height of part
 * @author phinguyen202
 * @export
 * @class PartCom
 * @extends {Component}
 */
export class PartCom extends Component {
    constructor(private part: Part) {
        super();
    }

    render() {
        const { _id, measure } = this.part;
        const { padding, width, widthUnit } = GlobalConfig;

        const staveWidth = width - padding * 2;

        // building Measures
        const elements: Component[] = (Array.isArray(measure) ? measure : [measure]).reduce((acc: Component[], measure: Measure) => {
            return acc.concat(MeasureGroup(measure));
        }, []);

        const marginLeft = 0.5 * widthUnit; // margin left

        const { fixedWidth, totalRelUnit } = elements.reduce((acc: any, element: Component) => {
            const space = spaceMap.get(element.partKey);
            if (space) {
                if (space.type === SPACE_TYPE.Absolute) {
                    acc.fixedWidth += (space.length + element.state.width) * widthUnit;
                } else if (space.type === SPACE_TYPE.Relative) {
                    acc.totalRelUnit += space.length;
                }
            }
            return acc;
        }, { fixedWidth: marginLeft, totalRelUnit: 0 })

        const perUnit = (staveWidth - fixedWidth) / totalRelUnit;

        const totalElement = elements.length - 1;
        elements.reduce((x: any, element: Component) => {
            const space = spaceMap.get(element.partKey);
            if (space.type === SPACE_TYPE.Absolute) {
                element.updateProps({ x });
                x += (space.length + element.state.width) * widthUnit;
            } else if (space.type === SPACE_TYPE.Relative) {
                element.updateProps({ x });
                x += space.length * perUnit;
            } else if (space.type === SPACE_TYPE.None) {
                if (index === totalElement) {
                    element.updateProps({ x });
                } else {
                    element.updateProps({ x: x - marginLeft });
                }
            }
            return x;
        }, marginLeft);

        return eltSVG('g', {
            id: _id,
            transform: `translate(${padding} ${padding})`
        },
            new Stave({ lineNumber: 5, width: staveWidth }),
            ...elements,
        );
    }
}