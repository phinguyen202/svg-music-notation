interface SvgStaveConfig {
    height: string,
    width: string,
}

const defaultConfig: SvgStaveConfig = {
    height: '100%',
    width: '100%',
}

export class SvgStave {
    private config: SvgStaveConfig;
    private elements: any[];

    constructor(initialConfig: SvgStaveConfig = defaultConfig) {
        this.config = initialConfig;
    }

    addConfig(newConfig: SvgStaveConfig) {
        this.config = newConfig;
    }

    addElement(newElement: any) {
        this.elements = this.elements.concat(newElement);
    }
}