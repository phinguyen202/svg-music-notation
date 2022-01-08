import { InvalidError } from "./exception/invalid";
import { Sheet } from "./components/sheet";
import { defaultConfig } from "./config/index";
export class SvgMusicNotation {
    constructor(container, source, config) {
        this.container = container;
        this.source = source;
        this.config = config;
        if (!container || !(container instanceof HTMLElement)) {
            throw new InvalidError(`Container param should be HTMLElement, but found ${container ? 'nothing' : container.constructor.name}!`);
        }
        const sheetConfig = Object.assign(Object.assign({}, defaultConfig), config);
        if (!sheetConfig.width || !sheetConfig.height) {
            const clientRect = container.getBoundingClientRect();
            if (!sheetConfig.width) {
                sheetConfig.width = clientRect.width;
            }
            if (!sheetConfig.height) {
                sheetConfig.height = clientRect.height;
            }
        }
        // Spread data into main component
        this.sheet = new Sheet(source, this.analyzeConfig(sheetConfig));
        container.appendChild(this.sheet.render());
    }
    analyzeConfig(config) {
        const analyzedConfig = Object.assign(Object.assign({}, defaultConfig), config);
        return Object.assign(Object.assign({}, analyzedConfig), { padding: analyzedConfig.padding, width: analyzedConfig.width, height: analyzedConfig.height, widthUnit: analyzedConfig.fontSize / 4 // why 4?
         });
    }
    updateConfig(config) {
    }
    updateSource(source) {
    }
}
