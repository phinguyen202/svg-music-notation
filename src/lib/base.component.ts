import Component from '@lib/component';

export default abstract class BaseComponent<T, S> extends Component<T, S> {
    public partKey: string;
}