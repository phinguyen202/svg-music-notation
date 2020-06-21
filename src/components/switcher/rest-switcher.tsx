import { DurationType } from "@model/business.model";
import WholeHalfRest from "@base/rest/whole-half";
import QuarterRest from "@base/rest/quarter";
import EighthRest from "@base/rest/eighth";
import SixteenthRest from "@base/rest/sixteenth";

interface Props {
    duration: DurationType;
}

export function RestSwitcher({ duration }: Props) {
    switch (duration) {
        case 'whole':
            return WholeHalfRest;
        case 'half':
            return WholeHalfRest;
        case 'quarter':
            return QuarterRest;
        case 'eighth':
            return EighthRest;
        case 'sixteenth':
            return SixteenthRest;
        default:
            return undefined;
    }
}
