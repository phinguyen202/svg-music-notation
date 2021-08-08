import Store from '@lib/store';

interface Props {
    store?: Store;
    parent?: any;
}

export default abstract class Component {
    protected props: any;
    public element: HTMLElement;
    constructor(props: Props = {}) {
        this.props = props;

        // this.props.store.subscribe(() => {
        //     // replace the older when received an event
        //     const newElement = this.render();
        //     this.element.replaceWith(newElement);
        //     this.element = newElement;
        // });

        // render the first time
        this.element = this.render();
        this.props.parent.appendChild(this.element);
    }

    protected abstract render(): any;
}