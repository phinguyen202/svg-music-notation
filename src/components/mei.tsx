import React from 'react';
import Staff from '@base/staff-ledger/staff';
import { WidthDimension } from "@model/common.model";
import { MeiHead, MeiModel, Music } from "@model/mei";

export interface MeiProp extends WidthDimension {
    source: MeiModel | Music | MeiHead;
    config: any;
}

export default function MEI({ source, config, width }: MeiProp) {

    return (<>
        <Staff.JSX lineNumber={5} width={width} />
        <text x="10" y="0.75em">𝄞</text>
    </>)
}