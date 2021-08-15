import Component from "./component";

export function elt<T>(type: keyof HTMLElementTagNameMap, props: any, ...children: Array<HTMLElement | string | Component<T>>) {
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

const NS = "http://www.w3.org/2000/svg";
export function eltNS<T>(type: keyof SVGElementTagNameMap, props: any, ...children: Array<SVGElement | string | Component<T>>) {
    let dom = document.createElementNS(NS, type);
    if (props) {
        for(const prop in props) {
            dom.setAttribute(prop, props[prop])  
        }
    }
    for (let child of children) {
        if (child instanceof SVGElement) {
            dom.appendChild(child);
        } else if (typeof child === 'string') {
            dom.appendChild(document.createTextNode(child));
        } else if (child instanceof Component) {
            dom.appendChild(child.element);
        }
    }
    return dom;
}