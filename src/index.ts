import { InvalidError } from '@exception/invalid';
import Store from '@lib/store';
import { SvgSheetConfig } from '@model/config';
import { Sheet } from '@components/index';
import { defaultConfig } from '@config/index';

export interface SvgMusicNotationProp {
    parent: HTMLElement;
    config: SvgSheetConfig;
    source: any;
}

export class SvgMusicNotation {
    private store: Store;
    private sheet: Sheet;
    constructor({ parent, source, config }: SvgMusicNotationProp) {
        if (!parent || !(parent instanceof HTMLElement)) {
            throw new InvalidError(`Parent param should be HTMLElement, but found ${parent && parent.constructor.name}!`);
        }

        const sheetConfig: SvgSheetConfig = {
            ...defaultConfig,
            ...config
        };

        if (!sheetConfig.width || !sheetConfig.height) {
            const clientRect: DOMRect = parent.getBoundingClientRect();
            if (!sheetConfig.width) { sheetConfig.width = clientRect.width }
            if (!sheetConfig.height) { sheetConfig.height = clientRect.height }
        }

        // listening resize event: ResizeObserver => updateConfig()

        // init store
        this.store = new Store({ initialState: { source, config: sheetConfig }});
        
        // Spread data into main component
        this.sheet = new Sheet({
            store: this.store,
            parent
        });
    }

    public updateConfig(config: SvgSheetConfig) {

    }

    public updateSource(source: any) {

    }
}