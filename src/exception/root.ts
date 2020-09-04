export class SvgError extends Error {
    private prefix: string = 'SvgError ';
    constructor(message: string) {
        super();
        this.message = this.prefix.concat(message);
    }
}

export class RenderError extends SvgError {

}