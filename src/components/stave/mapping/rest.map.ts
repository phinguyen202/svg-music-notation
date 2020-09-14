import { YCoordinate } from '@model/common.model';
import { DurationType } from '@model/business.model';

interface RestCofig extends YCoordinate { }

export default new Map<DurationType, RestCofig>([
    ['whole', {
        y: 10
    }],
    ['half', {
        y: 16
    }],
    ['quarter', {
        y: 5,
    }],
    ['eighth', {
        y: 10
    }],
    ['sixteenth', {
        y: 0
    }]
]);