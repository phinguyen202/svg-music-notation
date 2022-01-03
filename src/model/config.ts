import { Module } from '@modules/interface';

export interface SvgSheetConfig {
    height?: number;
    width?: number;
    fontSize?: number;
    widthUnit?: number;
    padding?: number;
    additionalModules?: Module[];
    barline: BarlineConfig;
    stave: StaveConfig;
}

export interface BarlineConfig {
    strokeWidth: number;
}

export interface StaveConfig {
    marginLeft: number;
}