import { RunTimeError } from '@exception/runtime';

let index: number;
export function init(no: number = 0): void {
    if (index) {
        console.warn('Id Generator has been reset!');
    }
    index = no;
}

export function next(): string {
    if (!index) {
        throw new RunTimeError('Id Generator is not initialized!');
    }
    return String(index++);
}