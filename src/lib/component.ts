export interface Props { }

export default abstract class Component<T> {
    protected props: any;
    public element: HTMLElement | SVGElement;
    constructor(props: T) {
        this.props = props;

        // render the first time
        this.element = this.render();
    }

    protected abstract render(): HTMLElement | SVGElement;
}