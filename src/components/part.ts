import { eltSVG, Component } from 'source-renderer';
import { Measure, Part } from '@model/musicXML';
import { Stave } from '@base/index';
import { MeasureGroup } from '@group/measure';
import { SPACE_TYPE } from '@model/enum/space';
import { BaseComponent } from './base/interface/base.component';
import { SvgSheetConfig } from '@model/config';

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
    constructor(private part: Part, private config: SvgSheetConfig) {
        super();
    }

    private locateElements(elements: Component[]): Component[] {
        const { padding, width, widthUnit, stave } = this.config;

        const staveWidth = width - padding * 2;
        const marginLeft = stave.marginLeft * widthUnit; // margin left
    
        const { fixedWidth, totalRelUnit } = elements.reduce((acc: any, element: BaseComponent) => {
            const { space } = element;
            if (space) {
                if (space.type === SPACE_TYPE.Absolute) {
                    acc.fixedWidth += (space.length + element.width) * widthUnit;
                } else if (space.type === SPACE_TYPE.Relative) {
                    acc.totalRelUnit += space.length;
                }
            }
            return acc;
        }, { fixedWidth: marginLeft, totalRelUnit: 0 })
    
        const perUnit = (staveWidth - fixedWidth) / totalRelUnit;
    
        const totalElement = elements.length - 1;
        elements.reduce((x: any, element: BaseComponent, index: number) => {
            const { space } = element;
            if (space.type === SPACE_TYPE.Absolute) {
                element.setPosition({ x });
                x += (space.length + element.width) * widthUnit;
            } else if (space.type === SPACE_TYPE.Relative) {
                element.setPosition({ x });
                x += space.length * perUnit;
            } else if (space.type === SPACE_TYPE.None) {
                if (index === totalElement) {
                    element.setPosition({ x });
                } else {
                    element.setPosition({ x: x - marginLeft });
                }
            }
            return x;
        }, marginLeft);
    
        return elements;
    }

    public buildElements(): Component[] {
        const { measure } = this.part;
        return <Component[]>(Array.isArray(measure) ? measure : [measure]).reduce((acc: Component[], measure: Measure) => {
            return acc.concat(MeasureGroup(measure, this.config));
        }, []);
    }

    render() {
        const { _id } = this.part;
        const { padding, width } = this.config;
        
        const staveWidth = width - padding * 2;

        const elements = this.locateElements(this.buildElements());

        return eltSVG('g', {
            id: _id,
            transform: `translate(${padding} ${padding})`
        },
            new Stave({ lineNumber: 5, width: staveWidth }),
            ...elements,
        );
    }
}