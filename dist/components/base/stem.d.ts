import { Component } from 'source-renderer';
import { OptionalPosition, HeightDimension } from '@model/common.model';
import { STEM_DIRECTION } from '@model/enum';
interface StemProps extends OptionalPosition, HeightDimension {
    direction: STEM_DIRECTION;
}
export declare class Stem extends Component {
    private props;
    constructor(props: StemProps);
    render(): SVGImageElement | SVGScriptElement | SVGSVGElement | SVGSymbolElement | SVGFilterElement | SVGSetElement | SVGStopElement | SVGViewElement | SVGClipPathElement | SVGMarkerElement | SVGMaskElement | SVGAElement | SVGStyleElement | SVGTitleElement | SVGAnimateElement | SVGAnimateMotionElement | SVGAnimateTransformElement | SVGCircleElement | SVGDefsElement | SVGDescElement | SVGEllipseElement | SVGFEBlendElement | SVGFEColorMatrixElement | SVGFEComponentTransferElement | SVGFECompositeElement | SVGFEConvolveMatrixElement | SVGFEDiffuseLightingElement | SVGFEDisplacementMapElement | SVGFEDistantLightElement | SVGFEDropShadowElement | SVGFEFloodElement | SVGFEFuncAElement | SVGFEFuncBElement | SVGFEFuncGElement | SVGFEFuncRElement | SVGFEGaussianBlurElement | SVGFEImageElement | SVGFEMergeElement | SVGFEMergeNodeElement | SVGFEMorphologyElement | SVGFEOffsetElement | SVGFEPointLightElement | SVGFESpecularLightingElement | SVGFESpotLightElement | SVGFETileElement | SVGFETurbulenceElement | SVGForeignObjectElement | SVGGElement | SVGLineElement | SVGLinearGradientElement | SVGMetadataElement | SVGMPathElement | SVGPathElement | SVGPatternElement | SVGPolygonElement | SVGPolylineElement | SVGRadialGradientElement | SVGRectElement | SVGSwitchElement | SVGTextElement | SVGTextPathElement | SVGTSpanElement | SVGUseElement;
}
export {};
