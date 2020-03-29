export interface XCoordinate {
	x: number;
}

export interface YCoordinate {
	y: number;
}

export interface CoordinateModel extends XCoordinate, YCoordinate{
}

export interface HeightDemension {
    height: number;
}

export interface WidthDemension {
    width: number;
}

export interface DemensionModel extends WidthDemension, HeightDemension{
}