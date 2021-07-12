import React, { useState, useEffect } from 'react';
import { WidthDimension } from "@model/common.model";
import { Mei, MeiModel } from "@model/mei";
import MeiHead from './meiHead';
import MeiMusic from './music';
import { parseString } from 'xml2js';

function isMeiModel(obj: any): obj is MeiModel {
    return obj.mei !== undefined
}

function isMei(obj: any): obj is Mei {
    return obj.meiHead !== undefined || obj.music !== undefined;
}

export interface MeiProp extends WidthDimension {
    source: MeiModel | Mei;
    config: any;
}

export default function MEI({ source, config, width }: MeiProp): JSX.Element {
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

    let render;

    if (store) {
        if (isMeiModel(store)) {
            render = (<>
                {store.mei.meiHead && <MeiHead source={store.mei.meiHead} config={config} width={width} />}
                {store.mei.music && <MeiMusic source={store.mei.music} config={config} width={width} />}
            </>)
        } else if (isMei(store)) {
            render = (<>
                {store.meiHead && <MeiHead source={store.meiHead} config={config} width={width} />}
                {store.music && <MeiMusic source={store.music} config={config} width={width} />}
            </>)
        }
    }

    return (render ? render : <text>Nothing to show</text>);
}
