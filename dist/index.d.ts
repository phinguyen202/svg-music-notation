import { SvgSheetConfig } from '@model/config';
import { Module } from '@modules/interface';
export interface SvgMusicNotationProp {
    container: HTMLElement;
    config: SvgSheetConfig;
    additionalModules?: Module[];
    source: any;
}
export declare class SvgMusicNotation {
    private container;
    private source;
    private sheet;
    constructor({ container, source, config, additionalModules }: SvgMusicNotationProp);
    updateConfig(config: SvgSheetConfig): void;
    updateSource(source: any): void;
}
