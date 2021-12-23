import { Module } from '@modules/interface';

export interface SvgSheetConfig {
    height?: number;
    width?: number;
    scale?: number;
    fontSize?: number;
    widthUnit?: number;
    padding?: number;
    additionalModules?: Module[];
    barline: BarlineConfig;
    stave: StaveConfig;
}

interface BarlineConfig {
    strokeWidth: number;
}

interface StaveConfig {
    marginLeft: number;
}