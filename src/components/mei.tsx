import React from 'react';
import { WidthDimension } from "@model/common.model";
import { Mei, MeiModel } from "@model/mei";
import MeiHead from './meiHead';
import MeiMusic from './music';

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

export default function MEI({ source, config, width }: MeiProp) {
    let render;
    console.log(source);

    if (isMeiModel(source)) {
        render = (<svg>
            {source.mei.meiHead && <MeiHead source={source.mei.meiHead} config={config} width={width} />}
            {source.mei.music && <MeiMusic source={source.mei.music} config={config} width={width} />}
        </svg>)
    } else if (isMei(source)) {
        render = (<svg>
            {source.meiHead && <MeiHead source={source.meiHead} config={config} width={width} />}
            {source.music && <MeiMusic source={source.music} config={config} width={width} />}
        </svg>)
    }

    
    return (
        { render }
    )
}
