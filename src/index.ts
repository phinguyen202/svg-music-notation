import { InvalidError } from '@exception/invalid';
import { SvgSheetConfig } from '@model/config';
import { Sheet } from '@components/index';
import { defaultConfig } from '@config/index';
import { MusicXML } from '@model/musicXML';

export interface SvgMusicNotationProp {
    container: HTMLElement;
    config: SvgSheetConfig;
    source: any;
}

export class SvgMusicNotation {
    private container: HTMLElement;
    private source: MusicXML;
    private sheet: Sheet;
    constructor({ container, source, config }: SvgMusicNotationProp) {
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

        container.appendChild(this.sheet.element);
    }

    public updateConfig(config: SvgSheetConfig) {

    }

    public updateSource(source: any) {

    }
}