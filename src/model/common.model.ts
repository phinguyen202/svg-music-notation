import { SPACE_TYPE } from './enum/space';

export interface Identity<T> {
	id: T;
}

export interface Order<T> {
	order: T;
}

export interface Position {
	x: number;
	y: number;
}

export interface YRelativePosition {
	x: number;
	y: number| string;
}

export interface TwoPointModel {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
}

export interface XCoordinate {
	x?: number;
}

export interface YCoordinate {
	y?: number | string;
}

export interface CoordinateModel extends XCoordinate, YCoordinate {
}

export interface HeightDimension {
	height: number;
}

export interface WidthDimension {
	width: number;
}

export interface DimensionModel extends WidthDimension, HeightDimension { }

export interface SpaceUnit {
	type: SPACE_TYPE;
	length: number;
}

export interface Glyph extends WidthDimension{
	codepoint: string;
}