import { Component } from 'source-renderer';
import { Part } from '@model/musicXML';
import { SvgSheetConfig } from '@model/config';
/**
 * @description This Component hold a list of primary element
 * 1. calculate coordinate for each element based on part width and element width
 * 2. calculate total height of part
 * @author phinguyen202
 * @export
 * @class PartCom
 * @extends {Component}
 */
export declare class PartCom extends Component {
    private part;
    private config;
    constructor(part: Part, config: SvgSheetConfig);
    private locateElements;
    buildElements(): Component[];
    render(): SVGImageElement | SVGScriptElement | SVGSVGElement | SVGSymbolElement | SVGFilterElement | SVGSetElement | SVGStopElement | SVGViewElement | SVGClipPathElement | SVGMarkerElement | SVGMaskElement | SVGAElement | SVGStyleElement | SVGTitleElement | SVGAnimateElement | SVGAnimateMotionElement | SVGAnimateTransformElement | SVGCircleElement | SVGDefsElement | SVGDescElement | SVGEllipseElement | SVGFEBlendElement | SVGFEColorMatrixElement | SVGFEComponentTransferElement | SVGFECompositeElement | SVGFEConvolveMatrixElement | SVGFEDiffuseLightingElement | SVGFEDisplacementMapElement | SVGFEDistantLightElement | SVGFEDropShadowElement | SVGFEFloodElement | SVGFEFuncAElement | SVGFEFuncBElement | SVGFEFuncGElement | SVGFEFuncRElement | SVGFEGaussianBlurElement | SVGFEImageElement | SVGFEMergeElement | SVGFEMergeNodeElement | SVGFEMorphologyElement | SVGFEOffsetElement | SVGFEPointLightElement | SVGFESpecularLightingElement | SVGFESpotLightElement | SVGFETileElement | SVGFETurbulenceElement | SVGForeignObjectElement | SVGGElement | SVGLineElement | SVGLinearGradientElement | SVGMetadataElement | SVGMPathElement | SVGPathElement | SVGPatternElement | SVGPolygonElement | SVGPolylineElement | SVGRadialGradientElement | SVGRectElement | SVGSwitchElement | SVGTextElement | SVGTextPathElement | SVGTSpanElement | SVGUseElement;
}
