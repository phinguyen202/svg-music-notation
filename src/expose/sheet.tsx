import { renderSvgSheet } from './render';
import { SvgStave } from './stave';

export interface SvgSheetConfig {
  height: string;
  width: string;
}

const defaultConfig: SvgSheetConfig = {
  height: '100%',
  width: '100%',
};

export class SvgSheet {
  private config: SvgSheetConfig;
  private staves: SvgStave[];

  constructor(initialConfig: SvgSheetConfig = defaultConfig) {
    this.config = initialConfig;
    this.staves = [];
  }

  addConfig(newConfig: SvgSheetConfig) {
    this.config = newConfig;
  }

  addStave(newStave: SvgStave) {
    this.staves = this.staves.concat(newStave);
  }

  removeStave(staveId: SvgStave) {}

  render(node: HTMLElement) {
    renderSvgSheet(node, this.config, this.staves);
  }
}
