import { YCoordinate } from '@model/common.model';

export interface NoteCofig extends YCoordinate {
    isStemUp: boolean,
    ledgers?: Array<number>
}
