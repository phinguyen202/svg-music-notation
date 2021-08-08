import { SvgError } from "@exception/root";
import Component from "./component";

type Type = keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap | keyof HTMLElementDeprecatedTagNameMap;

type ChildType<T> = string | HTMLElement | ComponentChildType<T>;

interface ComponentChildType<T> {
    fn: Function;
    store?: T;
}

export function elt<T>(type: Type, props: any, ...children: Array<ChildType<T>>) {
    let dom = document.createElement(type);
    if (props) Object.assign(dom, props);
    for (let child of children) {
        if (child instanceof HTMLElement) {
            dom.appendChild(child);
        } else if (typeof child === 'string') {
            dom.appendChild(document.createTextNode(child));
        } else if (typeof child === 'object') {
            const { fn, store } = child;
            fn({ store, parent: dom });
        } else {
            throw new SvgError('Child param must be "string or Function or HTMLElement"');
        }
    }
    return dom;
}