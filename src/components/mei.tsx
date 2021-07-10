import React, { useState, useEffect } from 'react';
import Staff from '@base/staff-ledger/staff';
import { WidthDimension } from "@model/common.model";
import { MeiHead, MeiModel, Music } from "@model/mei";
import { parseString } from 'xml2js';

export interface MeiProp extends WidthDimension {
    source: MeiModel | Music | MeiHead;
    config: any;
}

export default function MEI({ source, config, width }: MeiProp) {
    const [store, setStore] = useState(undefined);

    useEffect(() => {
        // validate mei by schema
        parseString(source, function (error: any, result: any) {
            if (error) {
                setStore(undefined);
                throw error;
            } else {
                setStore(result);
            }
        });
    }, [source]);

    return (<>
        <Staff.JSX lineNumber={5} width={width} />
        <text x="10" y="0.75em">𝄞</text>
    </>)
}