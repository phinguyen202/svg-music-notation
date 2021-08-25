import Component from "./component";

export function elt(type: keyof HTMLElementTagNameMap, props: any, ...children: Array<HTMLElement | string | Component<any>>) {
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

type SVGElementChild = SVGElement | string | Component<any>;
const NS = "http://www.w3.org/2000/svg";
export function eltNS(type: keyof SVGElementTagNameMap, props: any, ...children: Array<SVGElementChild | Array<SVGElementChild>>) {
    let dom = document.createElementNS(NS, type);
    if (props) {
        for (const prop in props) {
            dom.setAttribute(prop, props[prop])
        }
    }
    for (const child of children) {
        if (Array.isArray(child)) {
            for (const grandChild of child) {
                addChild(dom, grandChild);
            }
        } else {
            addChild(dom, child);
        }
    }
    return dom;
}

function addChild(dom: SVGElement, child: SVGElementChild) {
    if (child instanceof Component) {
        dom.appendChild(child.element);
    } else if (typeof child === 'string') {
        dom.appendChild(document.createTextNode(child));
    } else if (child instanceof SVGElement) {
        dom.appendChild(child);
    }
}