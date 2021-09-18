export interface Props { }

export default abstract class Component<T, S> {
    public state: S;
    protected props: T;
    constructor(props: T) {
        this.props = props;
    }

    public updateProps(obj: object) {
        this.props = {
            ...this.props,
            ...obj
        }
    }

    public abstract render(): HTMLElement | SVGElement;
}