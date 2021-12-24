export declare class Module {
    name: string;
    path: string;
    constructor(name: string, path: string);
    register(app: any): void;
    detach(app: any): void;
}
