import { YCoordinate, Order } from '@model/common.model';

export interface NoteConfig extends YCoordinate, Order<number> {
    isStemUp: boolean,
    ledgers?: Array<number>
}

export interface RestCofig extends YCoordinate { }