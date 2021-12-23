export class SvgError extends Error {
    private prefix: string = 'SvgError';
    constructor(message: string) {
        super();
        this.message = `${this.prefix} ${message}`;
    }
}