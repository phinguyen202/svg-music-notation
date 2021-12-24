import { InvalidError } from "./exception/invalid";
import { Sheet } from "./components/index";
import { defaultConfig } from "./config/index";
export class SvgMusicNotation {
    constructor({ container, source, config, additionalModules }) {
        if (!container || !(container instanceof HTMLElement)) {
            throw new InvalidError(`Container param should be HTMLElement, but found ${container && container.constructor.name}!`);
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
        // listening resize event: ResizeObserver => updateConfig()
        this.container = container;
        this.source = source;
        // Spread data into main component
        this.sheet = new Sheet(source, sheetConfig);
        container.appendChild(this.sheet.render());
        additionalModules.forEach(module => {
            if (typeof module.register === 'function') {
                // observe module
                module.register(this);
            }
        });
    }
    updateConfig(config) {
    }
    updateSource(source) {
    }
}
