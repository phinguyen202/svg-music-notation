import { SvgSheetConfig } from '@model/config';

export const defaultConfig: SvgSheetConfig = {
    scale: 0.5, // scale not work in Safari, so always is 1
    fontSize: 96,
    padding: 50,
    barline: {
        strokeWidth: 0.5,
    },
    stave: {
        marginLeft: 0.5
    }
}

export let GlobalConfig: SvgSheetConfig;

export function setGlobalConfig(config: SvgSheetConfig) {
    if (config) { 
        GlobalConfig = config;
    }
}