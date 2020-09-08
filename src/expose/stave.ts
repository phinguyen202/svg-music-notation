import { SvgElement } from './svgElement'
interface SvgStaveConfig {
    clef: 'treble' | 'bass' | 'alto' | 'tenor';
}

const defaultConfig: SvgStaveConfig = {
    clef: 'treble',
}

export class SvgStave {
    public id: string;
    private config: SvgStaveConfig;
    private elements: SvgElement[];

    constructor(id: string, initialConfig: SvgStaveConfig = defaultConfig) {
        this.id = id;
        this.config = initialConfig;
    }

    addConfig(newConfig: SvgStaveConfig) {
        this.config = newConfig;
    }

    addElement(newElement: SvgElement) {
        this.elements = this.elements.concat(newElement);
    }
}