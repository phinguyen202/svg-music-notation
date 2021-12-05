import { SvgSheetConfig } from '@model/config';

export const defaultConfig: SvgSheetConfig = {
    scale: 0.5,
    fontSize: 96,
    padding: 50,
}

export let GlobalConfig: SvgSheetConfig;

export function setGlobalConfig(config: SvgSheetConfig) {
    if (config) { 
        GlobalConfig = config;
    }
}