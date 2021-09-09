import { eltNS } from '@lib/dom';
import Component from '@lib/component';
import { SvgSheetConfig } from '@model/config';
import { Measure, Part } from '@model/musicXML';
import { Stave } from '@base/stave';
import { MeasureGroup } from '@group/measure';

interface PartProps {
    source: Part,
    config: SvgSheetConfig
}

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

        const elements: Component<any, Glyph>[] = (Array.isArray(measure) ? measure : [measure])
            .reduce((acc: Component<any, Glyph>[], m: Measure) => {
                return acc.concat(MeasureGroup({ source: m, config: config }))
            }, []);

        console.log(elements);
        let x = 0;
        elements.forEach((element: Component<any, Glyph>, index: number) => {
            console.log(x);
            // WHY multiple with 16?
            // I don't know => just try and it seems to be "ok"
            // ref: https://en.wikipedia.org/wiki/Em_(typography)
            element.updateProps({ x: x * 16 });
            x += element.state.width;
        })

        // calculating and setting x-coordinate for elements
        return eltNS("g", {
            id: _id,
            transform: `translate(${50}, ${50})`
        },
            new Stave({ lineNumber: 5, width: config.width }),
            ...elements,
        );
    }
}