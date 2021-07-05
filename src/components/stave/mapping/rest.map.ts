import { DurationType } from '@model/business.model';
import { RestConfig } from '@stave/stave.model';

export default new Map<DurationType, RestConfig>([
    ['whole', {
        y: 20
    }],
    ['half', {
        y: 26
    }],
    ['quarter', {
        y: 15,
    }],
    ['eighth', {
        y: 20
    }],
    ['sixteenth', {
        y: 10
    }]
]);