import { PartCom } from '@components/part';
import { Component } from 'source-renderer';
import { SvgSheetConfig } from '@model/config';
import { ScorePartwise } from '@model/musicXML';

export function ScorePartwiseGroup(scorePart: ScorePartwise, config: SvgSheetConfig): Array<Component> {
    return [
        new PartCom(scorePart.part, config)
    ];
    
}