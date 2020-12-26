export interface Identity<T> {
	id: T;
}

export interface PointModel {
	x: number;
	y: number;
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
	y?: number;
}

export interface CoordinateModel extends XCoordinate, YCoordinate{
}

export interface HeightDimension {
    height: number;
}

export interface WidthDimension {
    width: number;
}

export interface DimensionModel extends WidthDimension, HeightDimension{
}