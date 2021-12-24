import { BaseComponent } from '@base/interface/base.component';
import { Key } from '@model/musicXML';
import { OptionalPosition, Position } from '@model/common.model';
interface KeySignatureProps extends Key, OptionalPosition {
    widthUnit: number;
}
export declare class KeySignature extends BaseComponent {
    private props;
    private elements;
    constructor(props: KeySignatureProps, position?: Position);
    private init;
    render(): SVGImageElement | SVGScriptElement | SVGSVGElement | SVGSymbolElement | SVGFilterElement | SVGSetElement | SVGStopElement | SVGViewElement | SVGClipPathElement | SVGMarkerElement | SVGMaskElement | SVGAElement | SVGStyleElement | SVGTitleElement | SVGAnimateElement | SVGAnimateMotionElement | SVGAnimateTransformElement | SVGCircleElement | SVGDefsElement | SVGDescElement | SVGEllipseElement | SVGFEBlendElement | SVGFEColorMatrixElement | SVGFEComponentTransferElement | SVGFECompositeElement | SVGFEConvolveMatrixElement | SVGFEDiffuseLightingElement | SVGFEDisplacementMapElement | SVGFEDistantLightElement | SVGFEDropShadowElement | SVGFEFloodElement | SVGFEFuncAElement | SVGFEFuncBElement | SVGFEFuncGElement | SVGFEFuncRElement | SVGFEGaussianBlurElement | SVGFEImageElement | SVGFEMergeElement | SVGFEMergeNodeElement | SVGFEMorphologyElement | SVGFEOffsetElement | SVGFEPointLightElement | SVGFESpecularLightingElement | SVGFESpotLightElement | SVGFETileElement | SVGFETurbulenceElement | SVGForeignObjectElement | SVGGElement | SVGLineElement | SVGLinearGradientElement | SVGMetadataElement | SVGMPathElement | SVGPathElement | SVGPatternElement | SVGPolygonElement | SVGPolylineElement | SVGRadialGradientElement | SVGRectElement | SVGSwitchElement | SVGTextElement | SVGTextPathElement | SVGTSpanElement | SVGUseElement;
}
export {};
