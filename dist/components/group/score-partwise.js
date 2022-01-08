import { PartCom } from "../part";
export function ScorePartwiseGroup(scorePart, config) {
    return [
        new PartCom(scorePart.part, config)
    ];
}
