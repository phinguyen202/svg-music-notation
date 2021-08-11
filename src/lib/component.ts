import Store from '@lib/store';

interface Props<T> {
    store?: T;
    parent?: any;
}

export default class Component<T> {
    protected props: any;
    public element: HTMLElement;
    constructor(props: Props<T> = {}) {
        this.props = props;

        // render the first time
        this.element = this.render();
        this.props.parent.appendChild(this.element);
    }

    protected render(): any {
        throw new Error('Not Implemented!')
    }
}