import { SvgSheetConfig } from '@model/config';
import { MusicXML } from '@model/musicXML';
export declare class SvgMusicNotation {
    private container;
    private source;
    private config;
    private sheet;
    constructor(container: HTMLElement, source: MusicXML, config: SvgSheetConfig);
    private analyzeConfig;
    updateConfig(config: SvgSheetConfig): void;
    updateSource(source: any): void;
}
