import { SPACE_TYPE } from './enum/space';
export interface Position {
    x: number;
    y: number;
}
export interface OptionalPosition {
    x?: number;
    y?: number;
}
export interface HeightDimension {
    height: number;
}
export interface WidthDimension {
    width: number;
}
export interface DimensionModel extends WidthDimension, HeightDimension {
}
export interface SpaceUnit {
    type: SPACE_TYPE;
    length: number;
}
export interface Glyph extends WidthDimension {
    codepoint: string;
}
