import React from 'react';
import { WidthDimension } from "@model/common.model";
import { MeiHead } from "@model/mei";

export interface MeiHeadProp extends WidthDimension {
    source: MeiHead;
    config: any;
}

export default function MeiHead({ config, source, width }: MeiHeadProp) {
    return (<>
        <text x="1em" y="1em">Not implemented yet!</text>
    </>)
}
