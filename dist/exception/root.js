export class SvgError extends Error {
    constructor(message) {
        super();
        this.prefix = 'SvgError';
        this.message = `${this.prefix} ${message}`;
    }
}
