import React from 'react';
import Staff from '@base/staff-ledger/staff';
import { WidthDimension } from "@model/common.model";
import { Music } from "@model/mei";

export interface MusicProp extends WidthDimension {
    source: Music;
    config: any;
}

export default function MeiMusic({ config, source, width }: MusicProp) {
    return (<>
        <Staff.JSX lineNumber={5} width={width} />
        <text x="10" y="0.75em">𝄞</text>
    </>)
}
