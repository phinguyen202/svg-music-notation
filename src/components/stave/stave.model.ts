import { YCoordinate } from '@model/common.model';

export interface NoteConfig extends YCoordinate {
    isStemUp: boolean,
    ledgers?: Array<number>
}
