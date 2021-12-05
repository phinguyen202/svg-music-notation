import { InvalidError } from '@exception/invalid';
import { SvgSheetConfig } from '@model/config';
import { Sheet } from '@components/index';
import { defaultConfig } from '@config/index';
import { MusicXML } from '@model/musicXML';
import { Module } from '@modules/interface';

export interface SvgMusicNotationProp {
    container: HTMLElement;
    config: SvgSheetConfig;
    additionalModules?: Module[];
    source: any;
}

export class SvgMusicNotation {
    private container: HTMLElement;
    private source: MusicXML;
    private sheet: Sheet;
    constructor({ container, source, config, additionalModules }: SvgMusicNotationProp) {
        if (!container || !(container instanceof HTMLElement)) {
            throw new InvalidError(`Container param should be HTMLElement, but found ${container && container.constructor.name}!`);
        }

        const sheetConfig: SvgSheetConfig = {
            ...defaultConfig,
            ...config
        };

        if (!sheetConfig.width || !sheetConfig.height) {
            const clientRect: DOMRect = container.getBoundingClientRect();
            if (!sheetConfig.width) { sheetConfig.width = clientRect.width }
            if (!sheetConfig.height) { sheetConfig.height = clientRect.height }
        }

        // listening resize event: ResizeObserver => updateConfig()

        this.container = container;
        this.source = source;
        
        // Spread data into main component
        this.sheet = new Sheet({
            source,
            config: sheetConfig,
        });

        container.appendChild(this.sheet.render());

        additionalModules.forEach(module => {
            if (typeof module.register === 'function') {
                // observe module
                module.register(this);
            }
        });

        // do "global" app init config
        // - scale number
        // - type of base component, ex: whole note: type: Relative, length: 4
    }

    public updateConfig(config: SvgSheetConfig) {

    }

    public updateSource(source: any) {

    }
}