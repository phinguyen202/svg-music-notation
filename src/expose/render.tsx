import ReactDOM from 'react-dom';
import React from 'react';
import { RenderError } from '../exception/root';
import { SvgSheetConfig } from './sheet';
import { SvgStave } from './stave';
import { SVGTest } from 'index';

export function renderSvgSheet(node: HTMLElement, sheetConfig: SvgSheetConfig, staves: SvgStave[]) {
    if (!node) {
        throw new RenderError('node is undefined');
    }
    ReactDOM.render(
        <SVGTest config={sheetConfig} staves={staves} />,
        node
    );
}