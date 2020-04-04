'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(require('react-dom'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function TrebleClef(props) {
    return ( // width: 22.22, height: 65
    React__default.createElement("path", { transform: "translate(" + props.x + ", " + props.y + ")", xmlns: "http://www.w3.org/2000/svg", d: "m 3.5744199,58.475245 c 0.1544299,-1.75658 1.2688313,-3.18927 2.8374246,-3.60435 1.896792,-0.50168 3.4178317,0.68249 4.0430685,1.99005 0.529747,1.10721 0.527677,2.53951 -0.08852,3.48984 -0.7903979,1.21779 -2.3233671,1.88111 -3.5262866,1.49119 -0.051204,1.17231 1.7900801,2.08843 3.5252516,1.95421 2.41352,-0.18733 4.171134,-1.51652 4.841856,-3.68235 0.619299,-2.00035 0.307825,-4.10566 0.06591,-5.67854 -0.13177,-0.85604 -0.440575,-3.32071 -0.731078,-4.79828 -3.053627,0.78108 -6.3551054,0.11527 -9.1892616,-2.01287 C 2.5969082,45.555163 0.62990102,42.183361 0.14465882,38.446374 -0.28006448,35.175237 0.24962752,32.606743 1.4818532,30.317039 4.2740121,25.129446 8.3611481,22.056916 10.75898,19.686321 10.244703,16.570922 9.9764802,13.213881 10.309798,10.515415 10.752606,6.9306247 12.366903,2.1522847 15.294753,0.25538469 c 0.650349,-0.42151 1.280326,-0.345793 1.717632,0.41154 1.397931,2.42109201 2.215457,5.71439801 2.476762,8.40262301 0.328579,3.3812263 -0.762835,7.4189563 -2.03744,9.6260253 -1.573715,2.72543 -2.835356,4.333789 -4.81816,6.135145 0.115264,1.430669 0.51591,4.113829 0.814257,6.408434 5.441981,-0.305101 8.059827,3.550255 8.638109,7.124423 0.90174,5.571354 -2.89326,9.38656 -6.286961,10.78733 0.0414,0.70389 0.431097,3.49523 0.625619,4.69167 0.578771,3.55754 0.63782,6.17838 -0.903375,8.45812 -1.232171,1.82162 -3.008306,2.61365 -5.214721,2.69476 -4.002105,0.14822 -7.0107916,-3.35584 -6.731238,-6.52021 z m 5.2637452,-18.75541 c -0.4583328,2.269004 0.1934869,3.614696 2.1399039,4.908857 1.087437,0.72258 0.669305,1.501753 -0.944611,0.451197 -2.2706374,-1.478387 -3.4418538,-4.046391 -3.2785993,-6.661514 0.2190346,-3.509074 2.9592815,-6.088353 5.5556653,-6.957955 -0.239026,-1.856155 -0.464488,-3.722551 -0.751069,-5.701216 -2.2236823,1.612391 -4.4577144,3.674943 -5.9676417,5.575003 -2.0431045,2.570837 -3.1700891,5.20241 -3.1439422,7.961232 0.047391,5.034199 3.7928748,8.220526 7.2308611,9.106026 1.6970958,0.43709 3.6152408,0.38006 4.7965888,-0.0267 C 14.186072,46.747465 12.7974,36.824124 12.7974,35.722905 10.903114,36.296829 9.2002993,37.925779 8.8381651,39.7194 Z m 10.6931989,0.92767 c -0.776018,-3.300226 -3.071332,-4.883637 -5.525651,-5.017149 0.318937,2.286979 1.471034,11.063829 1.673617,12.413769 2.94136,-1.50252 4.461855,-4.802905 3.852034,-7.39662 z M 16.408556,5.6878307 c -2.304411,-0.38414 -4.226315,4.047699 -4.612526,6.6505663 -0.342415,2.306535 -0.30886,4.283075 0.04957,6.412084 2.315087,-1.769217 4.414845,-4.164161 5.539378,-6.760981 0.738486,-1.705811 1.84014,-5.8320603 -0.977076,-6.3016143 z" }));
}

function Staff(props) {
    var lines = [1, 2, 3, 4, 5].map(function (lineNumber, index) {
        var y = lineNumber * 10;
        return React__default.createElement("line", { x1: "0", x2: props.width, y1: y, y2: y, key: index });
    });
    return (React__default.createElement("g", { stroke: "black", strokeWidth: "0.5" }, lines));
}

function WholeNote(props) {
    return (React__default.createElement("path", { transform: "translate(" + props.x + ", " + props.y + ")", d: "M 7.0702175,0 C 3.1653113,0 -1.6899323e-4,2.238723 0,5.000169 1.1300677e-4,7.761458 3.1654804,10 7.0702175,10 10.974955,10 14.140379,7.761458 14.140492,5.000169 14.140605,2.238723 10.975124,0 7.0702175,0 Z M 10.176494,4.165916 C 10.831005,6.609168 10.018598,8.058161 8.3032128,8.51792 6.5878281,8.97751 4.6189028,8.273654 3.9642228,5.830408 3.3095426,3.387156 4.2884398,1.747522 6.0039371,1.287966 c 0.2072693,-0.05571 0.4027982,-0.05315 0.4027982,-0.05315 1.5604966,0 3.2059145,0.826823 3.7697587,2.931097 z" }));
}
function HalfNote(props) {
    var stem = props.isStemUp ? React__default.createElement("path", { stroke: "black", strokeWidth: "1", d: "M 12.076271,2.9131353 V -30" }) : React__default.createElement("path", { stroke: "black", strokeWidth: "1", d: "M 0.6,7 V 39.9131353" });
    return (React__default.createElement("g", { transform: "translate(" + props.x + ", " + props.y + ")" },
        React__default.createElement("path", { d: "M 7.6994759,-0.01613342 C 6.5595355,-0.00177122 5.343616,0.24673268 4.1918261,0.73382688 0.84116652,2.1494567 -0.69945302,5.0635671 0.30148652,7.4331346 1.3028566,9.8027059 4.465956,10.730085 7.8166058,9.3147348 11.167125,7.899105 13.436125,4.6771558 12.435045,2.3075846 11.777945,0.75282658 9.8763457,-0.04870542 7.6994759,-0.01570262 Z M 9.3053757,1.7487663 c 0.8942293,0 1.5374793,0.24 1.8257493,0.6713878 0.70567,1.0585021 -0.855669,2.9913904 -3.4857893,4.3163115 C 5.0147759,8.0606761 2.3106564,8.2766534 1.6054063,7.217864 0.89973672,6.1593543 2.4610763,4.2264773 5.0911957,2.9015563 6.5446858,2.1701648 8.0965958,1.7444765 9.3053757,1.7487663 Z" }),
        stem));
}
function QuarterNote(props) {
    var stem = props.isStemUp ? React__default.createElement("path", { stroke: "black", strokeWidth: "1", d: "M 12.076271,2.9131353 V -30" }) : React__default.createElement("path", { stroke: "black", strokeWidth: "1", d: "M 0.6,7 V 39.9131353" });
    return (React__default.createElement("g", { transform: "translate(" + props.x + ", " + props.y + ")" },
        React__default.createElement("path", { d: "M 7.8164802,9.3315293 C 4.4659422,10.74664 1.3024237,9.8194673 0.30146123,7.4499503 -0.69944487,5.0804923 0.84126673,2.1660273 4.191802,0.75069028 c 3.3504822,-1.415394 7.242065,-0.79547 8.242971,1.57404702 1.000906,2.369461 -1.267758,5.591399 -4.6182928,7.006792 z" }),
        stem));
}
function EighthNote(props) {
    var stem = props.isStemUp ? React__default.createElement("path", { stroke: "black", strokeWidth: "1", d: "M 12.076271,2.9131353 V -30" }) : React__default.createElement("path", { stroke: "black", strokeWidth: "1", d: "M 0.6,7 V 39.9131353" });
    var flag = React__default.createElement("path", { transform: props.isStemUp ? '' : "scale(-1,1) rotate(180 5.7 5)", d: "m 12.076271,-30 v 10.780751 l 0.931029,0.0021 c -0.04788,-0.0038 3.281295,1.170981 4.487907,2.403689 2.30337,2.353334 3.807649,5.922146 3.096942,9.886492 C 20.079849,-4.069345 19.166386,-2.27136 18.24941,0 l 0.658289,-0.06954 c 1.318139,-2.980759 3.50909,-7.198046 2.937903,-11.620154 -0.529419,-4.099068 -3.385629,-6.953998 -5.242445,-9.272145 -1.920664,-2.397778 -3.358806,-3.96373 -3.712738,-8.995332 z" });
    return (React__default.createElement("g", { transform: "translate(" + props.x + ", " + props.y + ")" },
        React__default.createElement("path", { d: "M 7.8164802,9.3315293 C 4.4659422,10.74664 1.3024237,9.8194673 0.30146123,7.4499503 -0.69944487,5.0804923 0.84126673,2.1660273 4.191802,0.75069028 c 3.3504822,-1.415394 7.242065,-0.79547 8.242971,1.57404702 1.000906,2.369461 -1.267758,5.591399 -4.6182928,7.006792 z" }),
        stem,
        flag));
}
function SixteenthNote(props) {
    var stem = props.isStemUp ? React__default.createElement("path", { stroke: "black", strokeWidth: "1", d: "M 12.076271,2.9131353 V -30" }) : React__default.createElement("path", { stroke: "black", strokeWidth: "1", d: "M 0.6,7 V 39.9131353" });
    var flag = React__default.createElement("path", { transform: props.isStemUp ? '' : "scale(-1,1) rotate(180 5.7 5)", d: "m 13.208101,-29.999998 -1.172101,0.0071 c 0,4.14154 0.04287,11.100109 0.04287,14.527927 l 1.129232,0.246552 c 1.314636,0.936575 3.041083,1.995936 4.31368,2.956479 1.768183,1.334617 2.96056,2.547871 3.446571,4.667922 0.425896,1.857982 0.01965,4.830127 -1.257783,7.588018 L 20.209582,0 c 1.100768,-2.402743 1.804513,-3.980906 1.618978,-7.317324 -0.05946,-1.06877 -0.367393,-2.095868 -0.844435,-3.084418 1.222914,-4.564472 0.371727,-7.819117 -4.288082,-13.09846 -1.091698,-1.236831 -3.487941,-2.39846 -3.487941,-6.499496 z m 0.01663,6.821336 c 1.450777,0.930551 3.411953,2.349022 4.462281,3.609985 1.850419,2.221536 3.264865,3.808572 2.765551,8.19033 -1.0467,-1.728728 -2.563235,-3.335159 -4.121746,-4.83431 -1.132413,-1.089279 -2.936675,-3.510969 -3.106086,-6.966005 z" });
    return (React__default.createElement("g", { transform: "translate(" + props.x + ", " + props.y + ")" },
        React__default.createElement("path", { d: "M 7.8164802,9.3315293 C 4.4659422,10.74664 1.3024237,9.8194673 0.30146123,7.4499503 -0.69944487,5.0804923 0.84126673,2.1660273 4.191802,0.75069028 c 3.3504822,-1.415394 7.242065,-0.79547 8.242971,1.57404702 1.000906,2.369461 -1.267758,5.591399 -4.6182928,7.006792 z" }),
        stem,
        flag));
}
var noteCofigMap = new Map([
    ['C4', {
            y: 45,
            isStemUp: true,
            ledgers: [5]
        }],
    ['D4', {
            y: 40,
            isStemUp: true
        }],
    ['E4', {
            y: 35,
            isStemUp: true
        }],
    ['F4', {
            y: 30,
            isStemUp: true
        }],
    ['G4', {
            y: 25,
            isStemUp: true
        }],
    ['A4', {
            y: 20,
            isStemUp: true
        }],
    ['B4', {
            y: 15,
            isStemUp: false
        }],
    ['C5', {
            y: 10,
            isStemUp: false
        }],
    ['D5', {
            y: 5,
            isStemUp: false
        }],
    ['E5', {
            y: 0,
            isStemUp: false
        }],
    ['F5', {
            y: -5,
            isStemUp: false
        }],
    ['G5', {
            y: -10,
            isStemUp: false
        }],
    ['A5', {
            y: -15,
            isStemUp: false,
            ledgers: [5]
        }],
    ['B5', {
            y: -20,
            isStemUp: false,
            ledgers: [10]
        }],
    ['C6', {
            y: -25,
            isStemUp: false,
            ledgers: [5, 15]
        }],
]);
function Note(props) {
    // note & duration
    var duration = props.duration, note = props.note;
    var baseNote = noteCofigMap.get(note);
    var jsxNote;
    var ledgers = baseNote.ledgers ? baseNote.ledgers.map(function (ledger, index) {
        return React__default.createElement("line", { transform: "translate(" + props.x + ", " + baseNote.y + ")", x1: '-5', y1: ledger, x2: '17', y2: ledger, strokeWidth: '0.5', stroke: 'black', key: index });
    }) : undefined;
    switch (duration) {
        case 'whole':
            jsxNote = React__default.createElement(WholeNote, { x: props.x, y: baseNote.y });
            break;
        case 'half':
            jsxNote = React__default.createElement(HalfNote, { x: props.x, y: baseNote.y, isStemUp: baseNote.isStemUp });
            break;
        case 'quarter':
            jsxNote = React__default.createElement(QuarterNote, { x: props.x, y: baseNote.y, isStemUp: baseNote.isStemUp });
            break;
        case 'eighth':
            jsxNote = React__default.createElement(EighthNote, { x: props.x, y: baseNote.y, isStemUp: baseNote.isStemUp });
            break;
        case 'sixteenth':
            jsxNote = React__default.createElement(SixteenthNote, { x: props.x, y: baseNote.y, isStemUp: baseNote.isStemUp });
            break;
    }
    return (React__default.createElement(React__default.Fragment, null,
        jsxNote,
        ledgers,
        React__default.createElement("text", { transform: "translate(" + (props.x + 6) + ", " + 80 + ")", dominantBaseline: "middle", textAnchor: "middle" }, props.lyrics)));
}

function BarLine(props) {
    return ( // props.x - 0.5 to make Bar within measure
    React__default.createElement("line", { transform: "translate(" + (props.x - 0.5) + ", " + 0 + ")", y2: props.height, stroke: "black" }));
}
function DoubleBarLine(props) {
    return (React__default.createElement("g", { transform: "translate(" + (props.x - 0.5) + ", " + 0 + ")" },
        React__default.createElement("line", { y2: props.height, stroke: "black" }),
        React__default.createElement("line", { x1: "-5", x2: "-5", y2: props.height, stroke: "black" })));
}
function BoldDoubleBarLine(props) {
    return ( //props.x - 1.5 (3/2)
    React__default.createElement("g", { transform: "translate(" + (props.x - 1.5) + ", " + 0 + ")" },
        React__default.createElement("line", { y2: props.height, stroke: "black", strokeWidth: "3" }),
        React__default.createElement("line", { x1: "-5", x2: "-5", y2: props.height, stroke: "black" })));
}
var barLineConfigMap = new Map([
    ['treble', {
            height: 40
        }]
]);
function Bar(props) {
    var baseBarLine = barLineConfigMap.get('treble');
    var jsxBar;
    switch (props.type) {
        case 'barline':
            jsxBar = React__default.createElement(BarLine, { x: props.x, height: baseBarLine.height });
            break;
        case 'double':
            jsxBar = React__default.createElement(DoubleBarLine, { x: props.x, height: baseBarLine.height });
            break;
        case 'bold double':
            jsxBar = React__default.createElement(BoldDoubleBarLine, { x: props.x, height: baseBarLine.height });
            break;
    }
    return (React__default.createElement(React__default.Fragment, null, jsxBar));
}

function WholeRest(props) {
    return (React__default.createElement("path", { transform: "translate(" + props.x + ", " + props.y + ")", d: "M 0,0 V 4 H 12 L 12,0 z", fill: "black" }));
}
function HalfRest(props) {
    return (React__default.createElement(WholeRest, { x: props.x, y: props.y }));
}
function QuarterRest(props) {
    return (React__default.createElement("path", { transform: "translate(" + props.x + ", " + props.y + ")", d: "M 2.7199973,0.58145719 C 3.9254577,2.1127292 7.0903185,5.9257722 7.8677417,8.4007484 8.1454642,9.2849162 7.7458507,10.689814 6.6055388,11.960465 c -0.9314157,1.037776 -1.3773704,2.327342 -0.9206452,4.031578 0.5232384,1.952979 3.6489033,5.506035 4.3656964,6.483385 0.752414,1.026218 0.0074,1.44247 -1.042589,0.651734 -1.6357044,-1.23111 -3.8224945,-1.79608 -5.2461505,-0.714129 -1.3999608,1.064177 -1.3854599,2.182306 0.6467056,5.702042 0.4452701,0.771255 0.062837,1.174998 -0.5442015,0.642912 C 2.3924676,27.469052 0.12981226,24.139036 0.01580209,22.833793 -0.29018648,19.328722 3.9254577,18.337726 5.9128614,19.543192 4.4483283,17.814719 2.619227,15.901087 2.0357786,15.340499 1.2726986,14.606883 1.0631196,13.102716 1.775184,12.212643 2.557073,11.235235 3.5002576,9.2564812 3.7951604,8.1401274 4.2512536,6.4133676 3.4693645,4.2304862 2.9154958,2.8946442 2.6164424,2.3767072 2.1580375,1.6831472 1.7100353,0.90725819 c -0.4480022,-0.775952 0.1506826,-1.41752501 1.009962,-0.325801 z" }));
}
function EighthRest(props) {
    return (React__default.createElement("path", { transform: "translate(" + props.x + ", " + props.y + ")", d: "M 1.1681188e-4,3.396808 C -1.7521782e-4,5.273525 1.5214747,6.769967 3.3980575,6.794707 5.5350724,6.822217 7.7057876,5.951156 9.0751732,4.799128 8.4066004,9.265536 5.6037578,16.886489 4.4488972,19.573249 4.1801715,20.198123 6.7388188,20.095428 6.8559812,19.533299 7.5652045,16.130884 10.00155,6.888606 10.951814,4.821876 11.34915,3.957708 11.945475,2.302747 12.226407,1.793458 12.376803,1.520784 12.139087,1.195487 11.749581,1.638794 11.123061,2.351965 10.479018,2.826952 10.096635,3.041179 9.0177018,3.645569 7.6505355,4.283666 6.6847349,4.23641 6.7562239,3.962159 6.7945381,3.679994 6.7945381,3.396585 6.7945381,1.520784 5.2737059,3.2601111e-4 3.3978823,-9.8889166e-7 1.5216499,-3.2698889e-4 3.5043563e-4,1.52033 0,3.396586 Z" }));
}
function SixteenthRest(props) {
    return (React__default.createElement("path", { transform: "translate(" + props.x + ", " + props.y + ")", d: "M 6.0771088,-4.8815739e-7 C 4.2732033,-3.1648816e-4 2.8104886,1.4617305 2.8101956,3.2656765 c -2.929e-4,1.804386 1.4626562,3.243152 3.2669132,3.266943 2.0545847,0.02642 4.1417422,-0.811043 5.4584082,-1.918671 -0.249625,1.667259 -1.367517,5.9928135 -2.3430507,8.9282965 -0.9341151,0.484246 -1.9825854,0.917143 -2.7653792,0.878818 0.068719,-0.263738 0.1055676,-0.534904 0.1055676,-0.807458 0,-1.80356 -1.4622461,-3.265366 -3.2657415,-3.265806 C 1.4629491,10.347547 3.5154546e-4,11.809536 4.3979257e-8,13.613605 -2.9287389e-4,15.41812 1.4626562,16.856821 3.2669132,16.880612 5.2522521,16.907032 7.3451504,16.122113 8.6724199,15.07018 7.2461441,19.220276 3.7597768,28.094669 3.1550186,29.501717 2.896665,30.10251 5.2046236,30.17117 5.3771523,29.646835 L 14.565108,1.7244655 c 0.09356,-0.284399 -0.08401,-0.574991 -0.458475,-0.148702 -0.602298,0.68568 -1.221527,1.142362 -1.589197,1.34833 -1.03734,0.581096 -2.351779,1.194595 -3.2804461,1.149164 0.068777,-0.263673 0.1055676,-0.534968 0.1055676,-0.807452 0,-1.803513 -1.4621876,-3.26536598816 -3.265683,-3.26568298816 z" }));
}
var restConfigMap = new Map([
    ['whole', {
            y: 10
        }],
    ['half', {
            y: 16
        }],
    ['quarter', {
            y: 4
        }],
    ['eighth', {
            y: 10
        }],
    ['sixteenth', {
            y: 0
        }]
]);
function Rest(props) {
    var duration = props.duration;
    var baseRest = restConfigMap.get(duration);
    var jsxRest;
    switch (duration) {
        case 'whole':
            jsxRest = React__default.createElement(WholeRest, { x: props.x, y: baseRest.y });
            break;
        case 'half':
            jsxRest = React__default.createElement(HalfRest, { x: props.x, y: baseRest.y });
            break;
        case 'quarter':
            jsxRest = React__default.createElement(QuarterRest, { x: props.x, y: baseRest.y });
            break;
        case 'eighth':
            jsxRest = React__default.createElement(EighthRest, { x: props.x, y: baseRest.y });
            break;
        case 'sixteenth':
            jsxRest = React__default.createElement(SixteenthRest, { x: props.x, y: baseRest.y });
            break;
    }
    return (React__default.createElement(React__default.Fragment, null, jsxRest));
}

var textStyle = {
    font: 'bold 28px cambria'
};
function TimeSignature(props) {
    return (React__default.createElement("g", { transform: "translate(5)" },
        React__default.createElement("text", { transform: "translate(" + 0 + ", " + 20 + ")", style: textStyle }, props.upper),
        React__default.createElement("text", { transform: "translate(" + 0 + ", " + 40 + ")", style: textStyle }, props.lower)));
}

function Meansure(props) {
    // render time signature
    var timeSignature = props.timeSignature && React__default.createElement(TimeSignature, { upper: props.timeSignature.upper, lower: props.timeSignature.lower });
    // -12 (width of whole, half, quarter note) to balance meansure
    var offsetX = -12 + (timeSignature ? 17 : 0);
    var spaceBetweenNote = (props.width - offsetX) / (props.notes.length + 1);
    var mensureElements = props.notes.map(function (ele, index) {
        if (ele.note) { //this is note
            return React__default.createElement(Note, { x: offsetX + (spaceBetweenNote * (index + 1)), duration: ele.duration, note: ele.note, accidental: ele.accidental, dot: ele.dot, tie: ele.tie, lyrics: ele.lyrics, key: index });
        }
        else { // rest
            return React__default.createElement(Rest, { x: offsetX + (spaceBetweenNote * (index + 1)), duration: ele.duration, key: index });
        }
    });
    return (React__default.createElement("g", { transform: "translate(" + props.x + ", " + props.y + ")" },
        timeSignature,
        mensureElements,
        React__default.createElement(Bar, { x: props.width, type: (props.barline ? props.barline : 'barline') })));
}

var Stave = /** @class */ (function (_super) {
    __extends(Stave, _super);
    function Stave(props) {
        return _super.call(this, props) || this;
    }
    Stave.prototype.render = function () {
        // render clef
        var clef = this.renderClef(this.props.clef);
        // render measures
        // offetX is long number in pixel that the stave need to render stuff like staff, accidentals, etc
        var offsetX = clef ? 30 : 0;
        var meansureHeight = (this.props.width - offsetX) / this.props.measures.length;
        var meansure = this.props.measures.map(function (meansure, index) {
            return React__default.createElement(Meansure, { timeSignature: meansure.timeSignature, notes: meansure.notes, barline: meansure.barline, width: meansureHeight, x: offsetX + meansureHeight * index, y: 10, key: index });
        });
        return (React__default.createElement("g", { transform: "translate(" + this.props.x + ", " + this.props.y + ")" },
            React__default.createElement(Staff, { width: this.props.width }),
            clef,
            meansure));
    };
    /**
     * @description render clef
     * @author Phi Nguyen - phinguyen202@gmail.com
     * @param {string} clef
     * @returns JSX.Element
     * @memberof Stave
     */
    Stave.prototype.renderClef = function (clef) {
        if (!clef) {
            return;
        }
        if (clef === 'treble') {
            return React__default.createElement(TrebleClef, { x: 10, y: 0 });
        }
    };
    return Stave;
}(React__default.Component));

var svgPaddingTop = 30, svgPaddingBottom = 20;
var RootSVGMusicNotation = /** @class */ (function (_super) {
    __extends(RootSVGMusicNotation, _super);
    function RootSVGMusicNotation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            dimension: null
        };
        _this.myRef = React.createRef();
        return _this;
    }
    RootSVGMusicNotation.prototype.componentDidMount = function () {
        // getting and setting svg demension
        var svgNode = ReactDOM.findDOMNode(this.myRef.current);
        var clientRect = svgNode.getBoundingClientRect();
        this.setState({
            dimension: {
                width: clientRect.width,
                height: clientRect.height,
            }
        });
    };
    RootSVGMusicNotation.prototype.render = function () {
        return (React.createElement("svg", { ref: this.myRef, height: this.props.height, width: this.props.width }, this.state.dimension && this.renderStaves(this.props.staves)));
    };
    /**
     * @description render staves
     * @author Phi Nguyen - phinguyen202@gmail.com
     * @param {StaveProps[]} staves
     * @returns {JSX.Element[]}
     * @memberof RootSVGMusicNotation
     */
    RootSVGMusicNotation.prototype.renderStaves = function (staves) {
        var _this = this;
        var stavesList = staves.map(function (stave, index) {
            if (!index) {
                return (React.createElement(Stave, { clef: _this.props.clef, measures: stave.measures, width: _this.state.dimension.width, x: 0, y: svgPaddingTop, key: index }));
            }
            return (React.createElement(Stave, { measures: stave.measures, x: 0, width: _this.state.dimension.width, y: svgPaddingTop + (120 * index), key: index }));
        });
        // rendering padding bottom
        // 97 is stave height wich is calculated from 0 of stave
        stavesList.push(React.createElement("rect", { y: svgPaddingTop + 97 + (120 * (staves.length - 1)), width: this.state.dimension.width, key: staves.length, height: svgPaddingBottom, fillOpacity: 0, strokeOpacity: 0 }));
        return stavesList;
    };
    return RootSVGMusicNotation;
}(React.Component));

var SVGMusicNotation = /** @class */ (function (_super) {
    __extends(SVGMusicNotation, _super);
    function SVGMusicNotation(props) {
        var _this = _super.call(this, props) || this;
        if (typeof _this.props.source === 'string') {
            _this.state = parse(_this.props.source);
        }
        else {
            _this.state = _this.props.source;
        }
        return _this;
    }
    SVGMusicNotation.prototype.render = function () {
        return (React__default.createElement(RootSVGMusicNotation, { width: this.props.width, height: this.props.height, staves: this.state.staves, clef: this.state.clef }));
    };
    return SVGMusicNotation;
}(React__default.Component));
var barMap = new Map([
    ['|', 'barline'],
    ['||', 'double'],
    ['|B', 'bold double'],
]);
var durationMap = new Map([
    ['1n', 'whole'],
    ['2n', 'half'],
    ['4n', 'quarter'],
    ['8n', 'eighth'],
    ['16n', 'sixteenth'],
]);
function parse(source) {
    // declare notation object
    var notation = {};
    // split source to lines
    console.log(source);
    var lines = source.trim().split(/\r?\n/);
    console.log(lines);
    // chunk lines to get staves
    var staves = lines.reduce(function (resultArray, item, index) {
        var chunkIndex = Math.floor(index / 2);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);
    // whether the clef is exist
    var firstWord = staves[0][0].match(/(\S*)\s/)[1];
    var indexOfClef = firstWord.indexOf('Clef');
    if (firstWord && indexOfClef) {
        var clef = firstWord.slice(0, indexOfClef).toLowerCase();
        notation.clef = clef;
        // remove clef word
        staves[0][0] = staves[0][0].substr(staves[0][0].indexOf(" ") + 1);
    }
    // extract staves
    notation.staves = staves.map(function (stave) {
        // extract meansure, lyrics from stave
        var measures = stave[0].match(/.*?(\|\||\|B|\|)/g);
        var allLyrics = stave[1] ? stave[1].split('|') : undefined;
        console.log(allLyrics);
        var paseredMeasures = measures.map(function (m, index) {
            m = m.trim();
            var lyrics = allLyrics && allLyrics[index] ? allLyrics[index].trim().split(' ') : undefined;
            var meansure = {};
            var eles = m.split(' ');
            var bar = eles.pop();
            meansure.barline = barMap.get(bar);
            // whether timeSignature is exist
            if (eles[0].includes('/')) {
                // get time signature
                var timeSignature = {
                    upper: +eles[0][0],
                    lower: +eles[0][2]
                };
                meansure.timeSignature = timeSignature;
                // delete timeSignature (first element)
                eles.shift();
            }
            // getting note and rest
            meansure.notes = eles.map(function (nAndR, index) {
                var noteAndRest = {};
                var extractedNote = nAndR.split('-');
                if (extractedNote[0] !== 'R') { // Note
                    noteAndRest.note = extractedNote[0];
                    // set other attributes
                    noteAndRest.lyrics = lyrics && lyrics[index] && lyrics[index] !== '\\E' ? lyrics[index] : '';
                }
                noteAndRest.duration = durationMap.get(extractedNote[1]);
                return noteAndRest;
            });
            return meansure;
        });
        return { measures: paseredMeasures };
    });
    return notation;
}

module.exports = SVGMusicNotation;
