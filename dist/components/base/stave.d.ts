import { Component } from 'source-renderer';
import { OptionalPosition, WidthDimension } from '@model/common.model';
interface StaveProps extends OptionalPosition, WidthDimension {
    lineNumber: number;
}
export declare class Stave extends Component {
    private props;
    constructor(props: StaveProps);
    render(): SVGImageElement | SVGScriptElement | SVGSVGElement | SVGSymbolElement | SVGFilterElement | SVGSetElement | SVGStopElement | SVGViewElement | SVGClipPathElement | SVGMarkerElement | SVGMaskElement | SVGAElement | SVGStyleElement | SVGTitleElement | SVGAnimateElement | SVGAnimateMotionElement | SVGAnimateTransformElement | SVGCircleElement | SVGDefsElement | SVGDescElement | SVGEllipseElement | SVGFEBlendElement | SVGFEColorMatrixElement | SVGFEComponentTransferElement | SVGFECompositeElement | SVGFEConvolveMatrixElement | SVGFEDiffuseLightingElement | SVGFEDisplacementMapElement | SVGFEDistantLightElement | SVGFEDropShadowElement | SVGFEFloodElement | SVGFEFuncAElement | SVGFEFuncBElement | SVGFEFuncGElement | SVGFEFuncRElement | SVGFEGaussianBlurElement | SVGFEImageElement | SVGFEMergeElement | SVGFEMergeNodeElement | SVGFEMorphologyElement | SVGFEOffsetElement | SVGFEPointLightElement | SVGFESpecularLightingElement | SVGFESpotLightElement | SVGFETileElement | SVGFETurbulenceElement | SVGForeignObjectElement | SVGGElement | SVGLineElement | SVGLinearGradientElement | SVGMetadataElement | SVGMPathElement | SVGPathElement | SVGPatternElement | SVGPolygonElement | SVGPolylineElement | SVGRadialGradientElement | SVGRectElement | SVGSwitchElement | SVGTextElement | SVGTextPathElement | SVGTSpanElement | SVGUseElement;
}
export {};
