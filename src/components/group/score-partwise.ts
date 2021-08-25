import { PartCom } from '@components/base/part';
import Component from '@lib/component';
import { SvgSheetConfig } from '@model/config';
import { ScorePartwise } from '@model/musicXML';

interface ScorePartwiseProps {
    source: ScorePartwise,
    config: SvgSheetConfig
}

export function ScorePartwiseGroup<T>(props: ScorePartwiseProps): Array<Component<any>> {
    const { source, config } = props;
    // const partList = source['part-list'];
    const { part } = source;

    return [
        new PartCom({ source: part, config })
    ];
}