import { PartCom } from '@components/part';
import { Component } from 'source-renderer';
import { SvgSheetConfig } from '@model/config';
import { ScorePartwise } from '@model/musicXML';

interface ScorePartwiseProps {
    source: ScorePartwise,
    config: SvgSheetConfig
}

export function ScorePartwiseGroup(props: ScorePartwiseProps): Array<Component<any, any>> {
    const { source, config } = props;
    // const partList = source['part-list'];
    const { part } = source;

    return [
        new PartCom({ source: part, config })
    ];
}