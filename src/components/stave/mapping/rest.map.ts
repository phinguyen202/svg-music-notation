import { DurationType } from '@model/business.model';
import { RestCofig } from '@stave/stave.model';

export default new Map<DurationType, RestCofig>([
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