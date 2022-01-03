import { InvalidError } from '@exception/invalid';
import { SvgSheetConfig } from '@model/config';
import { Sheet } from '@components/sheet';
import { defaultConfig } from '@config/index';
import { MusicXML } from '@model/musicXML';

export class SvgMusicNotation {
    private sheet: Sheet;
    constructor(private container: HTMLElement, private source: MusicXML, private config: SvgSheetConfig) {
        if (!container || !(container instanceof HTMLElement)) {
            throw new InvalidError(`Container param should be HTMLElement, but found ${container ? 'nothing' : container.constructor.name}!`);
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
        
        // Spread data into main component
        this.sheet = new Sheet(source, this.analyzeConfig(sheetConfig));

        container.appendChild(this.sheet.render());
    }

    private analyzeConfig(config: SvgSheetConfig) {
        const analyzedConfig = { ...defaultConfig, ...config };
        return {
            ...analyzedConfig,
            padding: analyzedConfig.padding,
            width: analyzedConfig.width,
            height: analyzedConfig.height,
            widthUnit: analyzedConfig.fontSize / 4 // why 4?
        }
    }

    public updateConfig(config: SvgSheetConfig) {

    }

    public updateSource(source: any) {

    }
}