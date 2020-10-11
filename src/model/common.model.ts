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