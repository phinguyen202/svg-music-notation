import { eltNS } from '@lib/dom';
import Component from '@lib/component';
import { SvgSheetConfig } from '@model/config';
import { Measure, Part } from '@model/musicXML';
import { Stave } from '@base/index';
import { MeasureGroup } from '@group/measure';
import { Glyph, SpaceUnit, WidthDimension } from '@model/common.model';
import { SPACE_TYPE } from '@model/enum/space';
import BaseComponent from '@lib/base.component';

interface PartProps {
    source: Part,
    config: SvgSheetConfig
}

const spaceMap: Map<string, SpaceUnit> = new Map<string, SpaceUnit>([
    ['clef', { type: SPACE_TYPE.Absolute, length: 0.5 }],
    ['key-signature', { type: SPACE_TYPE.Absolute, length: 0.5 }],
    ['time-signature', { type: SPACE_TYPE.Absolute, length: 0.5 }],
    ['note.whole', { type: SPACE_TYPE.Relative, length: 4 }],
    ['note.half', { type: SPACE_TYPE.Relative, length: 2 }],
    ['note.quarter', { type: SPACE_TYPE.Relative, length: 1 }],
    ['note.eighth', { type: SPACE_TYPE.Relative, length: 0.5 }],
    ['note.sixteenth', { type: SPACE_TYPE.Relative, length: 0.25 }],
    ['barline', { type: SPACE_TYPE.None, length: 0 }],
])

/**
 * @description This Component hold a list of primary element
 * 1. calculate coordinate for each element based on part width and element's width
 * 2. calculate total height of part
 * @author phinguyen202
 * @export
 * @class PartCom
 * @extends {Component<PartProps>}
 */
export class PartCom extends Component<PartProps, Glyph> {
    constructor(props: PartProps) {
        super(props);
    }

    render() {
        const { source, config } = this.props;
        const { _id, measure } = source;
        const { padding, width, widthUnit } = config;

        const staveWidth = width - padding * 2;

        // building Measures
        const elements: BaseComponent<any, WidthDimension>[] = (Array.isArray(measure) ? measure : [measure])
            .reduce((acc: BaseComponent<any, WidthDimension>[], m: Measure) => {
                return acc.concat(MeasureGroup({ source: m, config: config }))
            }, []);

        let x = 0.5 * widthUnit; // margin left

        const { fixedWidth, totalRelUnit } = elements.reduce((acc: any, element: BaseComponent<any, WidthDimension>) => {
            const space = spaceMap.get(element.partKey);
            if (space) {
                if (space.type === SPACE_TYPE.Absolute) {
                    acc.fixedWidth += (space.length + element.state.width) * widthUnit;
                } else if (space.type === SPACE_TYPE.Relative) {
                    acc.totalRelUnit += space.length;
                }
            }
            return acc;
        }, { fixedWidth: x, totalRelUnit: 0 })

        const perUnit = (staveWidth - fixedWidth) / totalRelUnit;

        elements.reduce((prev: any, element: BaseComponent<any, WidthDimension>) => {
            prev.start = x;
            const space = spaceMap.get(element.partKey);
            if (space.type === SPACE_TYPE.Absolute) {
                element.updateProps({ x });
                x += (space.length + element.state.width) * widthUnit;
                prev.end = x;
            } else if (space.type === SPACE_TYPE.Relative) {
                element.updateProps({ x });
                x += space.length * perUnit;
            } else if (space.type === SPACE_TYPE.None) {
                element.updateProps({ x: prev.start + (prev.end - prev.start) / 2 });
            }
            return prev;
        }, { start: 0, end: 0 });

        return eltNS('g', {
            id: _id,
            transform: `translate(${padding} ${padding})`
        },
            new Stave({ lineNumber: 5, width: staveWidth }),
            ...elements,
        );
    }
}