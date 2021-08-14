import Component from "./component";

type Type = keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap | keyof HTMLElementDeprecatedTagNameMap;

export function elt<T>(type: Type, props: any, ...children: Array<HTMLElement | string | Component<T>>) {
    let dom = document.createElement(type);
    if (props) Object.assign(dom, props);
    for (let child of children) {
        if (child instanceof HTMLElement) {
            dom.appendChild(child);
        } else if (typeof child === 'string') {
            dom.appendChild(document.createTextNode(child));
        } else if (child instanceof Component) {
            dom.appendChild(child.element);
        }
    }
    return dom;
}