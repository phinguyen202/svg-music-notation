import { PartCom } from '@components/part';
import { Component } from 'source-renderer';
import { SvgSheetConfig } from '@model/config';
import { ScorePartwise } from '@model/musicXML';

interface ScorePartwiseProps {
    source: ScorePartwise,
    config: SvgSheetConfig
}

export function ScorePartwiseGroup(scorePart: ScorePartwise): Array<Component> {
    return [
        new PartCom(scorePart.part)
    ];
    
}