import ReactDOM from 'react-dom';
import React from 'react';
import { RenderError } from '../exception/root';
import { SvgSheetConfig } from './sheet';
import { SvgStave } from './stave';
import { SVGTest } from 'index';
import { Provider } from 'react-redux';
import store from '@store/root';

export function renderSvgSheet(node: HTMLElement, sheetConfig: SvgSheetConfig, staves: SvgStave[]) {
    if (!node) {
        throw new RenderError('node is undefined');
    }
    const a = ReactDOM.render(
        <Provider store={store}>
            <SVGTest config={sheetConfig} staves={staves} />
        </Provider>,
        node
    );
    console.log(a);

}