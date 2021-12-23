'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function JSX({ lineNumber, space, width, y = 0, x = 0 }) {
    const lines = (new Array(lineNumber)).fill(0).map((data, index) => {
        const yLine = ++index * space;
        return React__default['default'].createElement("line", { x2: width, y1: yLine, y2: yLine, key: index });
    });
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})`, stroke: 'black', strokeWidth: '0.5' }, lines));
}
var Staff = {
    JSX
};

const width = 4;
const height = 4;
function JSX$1({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("circle", { cx: 2, cy: 2, r: '2' })));
}
var SingleDot = {
    width,
    height,
    JSX: JSX$1
};

const width$1 = 10;
const height$1 = 4;
function JSX$2({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("circle", { cx: 2, cy: 2, r: '2' }),
        React__default['default'].createElement("circle", { cx: 8, cy: 2, r: '2' })));
}
var DoubleDot = {
    width: width$1,
    height: height$1,
    JSX: JSX$2
};

const width$2 = 16;
const height$2 = 4;
function JSX$3({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("circle", { cx: 2, cy: 2, r: '2' }),
        React__default['default'].createElement("circle", { cx: 8, cy: 2, r: '2' }),
        React__default['default'].createElement("circle", { cx: 14, cy: 2, r: '2' })));
}
var TripleDot = {
    width: width$2,
    height: height$2,
    JSX: JSX$3
};

function DotBuilder({ x = 0, y = 0, type }) {
    switch (type) {
        case 'single':
            return React__default['default'].createElement(SingleDot.JSX, { x: x, y: y });
        case 'double':
            return React__default['default'].createElement(DoubleDot.JSX, { x: x, y: y });
        case 'triple':
            return React__default['default'].createElement(TripleDot.JSX, { x: x, y: y });
        default:
            return undefined;
    }
}

const width$3 = 14.14;
const height$3 = 10;
function JSX$4({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("path", { transform: `translate(${x}, ${y})`, d: 'M 7.0702175,0 C 3.1653113,0 -1.6899323e-4,2.238723 0,5.000169 1.1300677e-4,7.761458 3.1654804,10 7.0702175,10 10.974955,10 14.140379,7.761458 14.140492,5.000169 14.140605,2.238723 10.975124,0 7.0702175,0 Z M 10.176494,4.165916 C 10.831005,6.609168 10.018598,8.058161 8.3032128,8.51792 6.5878281,8.97751 4.6189028,8.273654 3.9642228,5.830408 3.3095426,3.387156 4.2884398,1.747522 6.0039371,1.287966 c 0.2072693,-0.05571 0.4027982,-0.05315 0.4027982,-0.05315 1.5604966,0 3.2059145,0.826823 3.7697587,2.931097 z' }));
}
var WholeNote = {
    width: width$3,
    height: height$3,
    JSX: JSX$4
};

const height$4 = 32.91;
function JSX$5({ up = true }) {
    return up ? React__default['default'].createElement("path", { stroke: 'black', strokeWidth: '1', d: 'M 12.076271,2.9131353 V -30' }) : React__default['default'].createElement("path", { stroke: 'black', strokeWidth: '1', d: 'M 0.6,7 V 39.9131353' });
}
var Stem = {
    height: height$4,
    JSX: JSX$5
};

const width$4 = 12.62;
const height$5 = 39.89;
function JSX$6({ x = 0, y = 0, isStemUp = true }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("path", { d: 'M 7.6994759,-0.01613342 C 6.5595355,-0.00177122 5.343616,0.24673268 4.1918261,0.73382688 0.84116652,2.1494567 -0.69945302,5.0635671 0.30148652,7.4331346 1.3028566,9.8027059 4.465956,10.730085 7.8166058,9.3147348 11.167125,7.899105 13.436125,4.6771558 12.435045,2.3075846 11.777945,0.75282658 9.8763457,-0.04870542 7.6994759,-0.01570262 Z M 9.3053757,1.7487663 c 0.8942293,0 1.5374793,0.24 1.8257493,0.6713878 0.70567,1.0585021 -0.855669,2.9913904 -3.4857893,4.3163115 C 5.0147759,8.0606761 2.3106564,8.2766534 1.6054063,7.217864 0.89973672,6.1593543 2.4610763,4.2264773 5.0911957,2.9015563 6.5446858,2.1701648 8.0965958,1.7444765 9.3053757,1.7487663 Z' }),
        React__default['default'].createElement(Stem.JSX, { up: isStemUp })));
}
var HalfNote = {
    width: width$4,
    height: height$5,
    JSX: JSX$6
};

const width$5 = 12.67;
const height$6 = 10;
function JSX$7({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("path", { d: 'M 7.8164802,9.3315293 C 4.4659422,10.74664 1.3024237,9.8194673 0.30146123,7.4499503 -0.69944487,5.0804923 0.84126673,2.1660273 4.191802,0.75069028 c 3.3504822,-1.415394 7.242065,-0.79547 8.242971,1.57404702 1.000906,2.369461 -1.267758,5.591399 -4.6182928,7.006792 z' })));
}
var HeadNote = {
    width: width$5,
    height: height$6,
    JSX: JSX$7
};

const width$6 = 12.67;
const height$7 = 40;
function JSX$8({ x = 0, y = 0, isStemUp = true }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement(HeadNote.JSX, null),
        React__default['default'].createElement(Stem.JSX, { up: isStemUp })));
}
var QuarterNote = {
    width: width$6,
    height: height$7,
    JSX: JSX$8
};

const width$7 = 12.67;
const height$8 = 40;
function JSX$9({ x = 0, y = 0, isStemUp = true }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement(HeadNote.JSX, null),
        React__default['default'].createElement(Stem.JSX, { up: isStemUp }),
        React__default['default'].createElement("path", { transform: isStemUp ? '' : 'scale(-1,1) rotate(180 5.7 5)', d: 'm 12.076271,-30 v 10.780751 l 0.931029,0.0021 c -0.04788,-0.0038 3.281295,1.170981 4.487907,2.403689 2.30337,2.353334 3.807649,5.922146 3.096942,9.886492 C 20.079849,-4.069345 19.166386,-2.27136 18.24941,0 l 0.658289,-0.06954 c 1.318139,-2.980759 3.50909,-7.198046 2.937903,-11.620154 -0.529419,-4.099068 -3.385629,-6.953998 -5.242445,-9.272145 -1.920664,-2.397778 -3.358806,-3.96373 -3.712738,-8.995332 z' })));
}
var EighthNote = {
    width: width$7,
    height: height$8,
    JSX: JSX$9
};

const width$8 = 12.67;
const height$9 = 40;
function JSX$a({ x = 0, y = 0, isStemUp = true }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement(HeadNote.JSX, null),
        React__default['default'].createElement(Stem.JSX, { up: isStemUp }),
        React__default['default'].createElement("path", { transform: isStemUp ? '' : 'scale(-1,1) rotate(180 5.7 5)', d: 'm 13.208101,-29.999998 -1.172101,0.0071 c 0,4.14154 0.04287,11.100109 0.04287,14.527927 l 1.129232,0.246552 c 1.314636,0.936575 3.041083,1.995936 4.31368,2.956479 1.768183,1.334617 2.96056,2.547871 3.446571,4.667922 0.425896,1.857982 0.01965,4.830127 -1.257783,7.588018 L 20.209582,0 c 1.100768,-2.402743 1.804513,-3.980906 1.618978,-7.317324 -0.05946,-1.06877 -0.367393,-2.095868 -0.844435,-3.084418 1.222914,-4.564472 0.371727,-7.819117 -4.288082,-13.09846 -1.091698,-1.236831 -3.487941,-2.39846 -3.487941,-6.499496 z m 0.01663,6.821336 c 1.450777,0.930551 3.411953,2.349022 4.462281,3.609985 1.850419,2.221536 3.264865,3.808572 2.765551,8.19033 -1.0467,-1.728728 -2.563235,-3.335159 -4.121746,-4.83431 -1.132413,-1.089279 -2.936675,-3.510969 -3.106086,-6.966005 z' })));
}
var SixteenthNote = {
    width: width$8,
    height: height$9,
    JSX: JSX$a
};

const width$9 = 8.33;
const height$a = 28;
function JSX$b({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("path", { d: 'm 6.3588713,-9 -1.198899,0.1320592 v 7.4073571 l -2.2966586,0.609056 v -7.0989782 l -1.1988438,0.1320592 v 7.284733 L 0,-0.0927193 v 3.064529 L 1.6644699,2.5308153 V 9.075673 L 0,9.516667 v 3.063227 L 1.6644699,12.13885 V 19 l 1.1988438,-0.132115 v -7.048216 l 2.2966586,-0.608984 v 6.739562 l 1.198899,-0.132115 v -6.925361 l 1.674005,-0.443634 V 7.3859369 L 6.3588713,7.8295876 V 1.2847304 l 1.674005,-0.4436507 v -3.0632 l -1.674005,0.4436507 z M 5.1599723,1.6028253 V 8.146426 L 2.8633137,8.755411 V 2.2105541 Z' })));
}
var Sharp = {
    width: width$9,
    height: height$a,
    JSX: JSX$b
};

const width$a = 10;
const height$b = 10;
function JSX$c({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("path", { d: 'm 0,0 1.2204724,4.0944882 c 1.0337638,0 1.9860158,0.3385197 2.7607559,0.9053858 C 3.2064882,5.5669921 2.2541732,5.9055118 1.2204724,5.9055118 L 0,10 4.0944252,8.7794016 c 0,-1.0337638 0.3383307,-1.9858268 0.9055118,-2.7608189 0.5670551,0.7749921 0.9055118,1.7273071 0.9055118,2.7608189 L 9.999937,10 8.7794646,5.9055118 C 7.7455748,5.9055118 6.7935118,5.5672441 6.0186457,4.999874 6.7934488,4.4330079 7.7457638,4.0944882 8.7794646,4.0944882 L 9.999937,0 5.9054488,1.2203465 c 0,1.0337637 -0.3384567,1.9860787 -0.9055118,2.7610078 C 4.4328189,3.2064252 4.0944252,2.2541102 4.0944252,1.2203465 Z' })));
}
var DoubleSharp = {
    width: width$a,
    height: height$b,
    JSX: JSX$c
};

const width$b = 7.06;
const height$c = 28;
function JSX$d({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("path", { d: 'M 1.3146058,9.006223 5.7456234,7.83243 V 1.311395 L 1.3146058,2.485181 Z M 5.7456234,10.914596 0,12.436728 V -8.8552072 L 1.3146058,-9 v 8.401853 L 7.060165,-2.1202723 V 18.855316 L 5.7456234,19 Z' })));
}
var Natural = {
    width: width$b,
    height: height$c,
    JSX: JSX$d
};

const width$c = 7.33;
const height$d = 25;
function JSX$e({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("path", { d: 'M 1.2239019,9.3153099 V 3.1688778 c 0.1229568,-0.5885221 1.0333045,-1.66122 1.6653198,-1.70216 1.4219177,-0.09165 2.1316206,1.6838241 1.481556,3.4988999 C 3.8630043,6.3833187 2.3201742,8.2281378 1.2239019,9.3153099 Z M 5.7636648,6.4855337 C 6.3303175,5.9439457 7.5178289,4.4758117 7.3042756,2.6588148 7.0845888,0.7898188 5.4623186,-6.122e-5 4.4496335,-6.122e-5 c -0.9698102,0 -1.9646213,0.467195 -3.2257317,1.40372292 V -13.299644 L 0,-13.164836 V 11.700357 C 2.4403857,9.4630269 3.6616007,8.4958279 5.7636648,6.4866028 Z' })));
}
var Flat = {
    width: width$c,
    height: height$d,
    JSX: JSX$e
};

const width$d = 15.66;
const height$e = 25;
function JSX$f({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement(Flat.JSX, { x: 0, y: 0 }),
        React__default['default'].createElement(Flat.JSX, { x: 8.33, y: 0 })));
}
var DoubleFlat = {
    width: width$d,
    height: height$e,
    JSX: JSX$f
};

function AccidentalUpstreamBuilder({ x = 0, y = 0, type, distanceSpace = 0 }) {
    switch (type) {
        case 'sharp':
            return React__default['default'].createElement(Sharp.JSX, { x: x - (Sharp.width + distanceSpace), y: y });
        case 'double sharp':
            return React__default['default'].createElement(DoubleSharp.JSX, { x: x - (DoubleSharp.width + distanceSpace), y: y });
        case 'natural':
            return React__default['default'].createElement(Natural.JSX, { x: x - (Natural.width + distanceSpace), y: y });
        case 'flat':
            return React__default['default'].createElement(Flat.JSX, { x: x - (Flat.width + distanceSpace), y: y });
        case 'double flat':
            return React__default['default'].createElement(DoubleFlat.JSX, { x: x - (DoubleFlat.width + distanceSpace), y: y });
        default:
            return undefined;
    }
}

const width$e = 22;
function JSX$g({ y = 0, x = 0 }) {
    return (React__default['default'].createElement("line", { transform: `translate(${x}, ${y})`, stroke: 'black', strokeWidth: '0.5', x2: width$e, y1: 0.25, y2: 0.25 }));
}
var Ledger = {
    JSX: JSX$g
};

class SvgError extends Error {
    constructor(message) {
        super();
        this.prefix = 'SvgError';
        this.message = `${this.prefix} ${message}`;
    }
}
class RenderError extends SvgError {
}

const space = 2;
function noteBuilder(props) {
    const { duration, beamGroup } = props;
    let note;
    if (beamGroup) {
        note = HeadNote;
    }
    else {
        switch (props.duration) {
            case 'whole':
                note = WholeNote;
                break;
            case 'half':
                note = HalfNote;
                break;
            case 'quarter':
                note = QuarterNote;
                break;
            case 'eighth':
                note = EighthNote;
                break;
            case 'sixteenth':
                note = SixteenthNote;
                break;
            default:
                if (!duration) {
                    throw new RenderError('Note duration is undefined');
                }
                else {
                    throw new RenderError(`Invalid duration: ${duration}`);
                }
        }
    }
    return Object.assign(Object.assign(Object.assign({}, props), note), { renderFunc: function () {
            const { id, x = 0, y = 0, duration, accidental, dot, isStemUp = true, ledgers, width, height, JSX } = this;
            const ledgersJsx = ledgers && ledgers.map((y, index) => {
                return React__default['default'].createElement(Ledger.JSX, { key: index, x: -5, y: y });
            });
            return (React__default['default'].createElement("g", { key: id, transform: `translate(${x}, ${y})` },
                React__default['default'].createElement(JSX, { isStemUp: isStemUp }),
                dot && React__default['default'].createElement(DotBuilder, { type: dot, x: width + space, y: height / 2 - space }),
                accidental && React__default['default'].createElement(AccidentalUpstreamBuilder, { type: accidental, distanceSpace: space }),
                ledgersJsx));
        } });
}

var RestMap = new Map([
    ['whole', {
            y: 20
        }],
    ['half', {
            y: 26
        }],
    ['quarter', {
            y: 15,
        }],
    ['eighth', {
            y: 20
        }],
    ['sixteenth', {
            y: 10
        }]
]);

var TrebleNoteMap = new Map([
    ['C4', {
            y: 55,
            isStemUp: true,
            order: 1,
            ledgers: [5]
        }],
    ['D4', {
            y: 50,
            isStemUp: true,
            order: 2
        }],
    ['E4', {
            y: 45,
            isStemUp: true,
            order: 3
        }],
    ['F4', {
            y: 40,
            isStemUp: true,
            order: 4
        }],
    ['G4', {
            y: 35,
            isStemUp: true,
            order: 5
        }],
    ['A4', {
            y: 30,
            isStemUp: true,
            order: 6
        }],
    ['B4', {
            y: 25,
            isStemUp: false,
            order: 7
        }],
    ['C5', {
            y: 20,
            isStemUp: false,
            order: 8
        }],
    ['D5', {
            y: 15,
            isStemUp: false,
            order: 9
        }],
    ['E5', {
            y: 10,
            isStemUp: false,
            order: 10
        }],
    ['F5', {
            y: 5,
            isStemUp: false,
            order: 11
        }],
    ['G5', {
            y: 0,
            isStemUp: false,
            order: 12
        }],
    ['A5', {
            y: -5,
            isStemUp: false,
            order: 13,
            ledgers: [5]
        }],
    ['B5', {
            y: -10,
            isStemUp: false,
            order: 14,
            ledgers: [10]
        }],
    ['C6', {
            y: -15,
            isStemUp: false,
            order: 15,
            ledgers: [5, 15]
        }],
]);

var TrebleKeySignatureMap = new Map([
    ['flat', [25, 10, 30, 15, 35, 20, 40]],
    ['sharp', [5, 20, 0, 15, 30, 10, 25]],
]);

function findNoteMap(clef) {
    if (clef === 'treble') {
        return TrebleNoteMap;
    }
}
function findKeySignatureMap(clef) {
    if (clef === 'treble') {
        return TrebleKeySignatureMap;
    }
}

const space$1 = 2;
function keySignatureBuilder(props) {
    const { keySigNumber } = props;
    let width = 0;
    if (keySigNumber) {
        if (keySigNumber > 0) {
            width = (keySigNumber * (Sharp.width + space$1)) - space$1;
        }
        else {
            width = (Math.abs(keySigNumber) * (Flat.width + space$1)) - space$1;
        }
    }
    return Object.assign(Object.assign({}, props), { width, height: 0, renderFunc: function () {
            const { id, x, y = 0, keySigNumber, accidentalMap } = this;
            let keySignature;
            if (keySigNumber > 0) {
                keySignature = accidentalMap.get('sharp').slice(0, keySigNumber).map((keyY, index) => {
                    return React__default['default'].createElement(Sharp.JSX, { x: index * (Sharp.width + space$1), y: keyY, key: index });
                });
            }
            else {
                keySignature = accidentalMap.get('flat').slice(0, Math.abs(keySigNumber)).map((keyY, index) => {
                    return React__default['default'].createElement(Flat.JSX, { x: index * (Flat.width + space$1), y: keyY, key: index });
                });
            }
            return (React__default['default'].createElement("g", { key: id, transform: `translate(${x}, ${y})` }, keySignature));
        } });
}

const width$f = 4;
const height$f = 12;
function JSX$h({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("path", { transform: `translate(${x}, ${y})`, d: 'M 0,0 V 4 H 12 L 12,0 z', fill: 'black' }));
}
var WholeHalfRest = {
    width: width$f,
    height: height$f,
    JSX: JSX$h
};

const width$g = 10.36;
const height$g = 29;
function JSX$i({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("path", { transform: `translate(${x}, ${y})`, d: 'M 2.7199973,0.58145719 C 3.9254577,2.1127292 7.0903185,5.9257722 7.8677417,8.4007484 8.1454642,9.2849162 7.7458507,10.689814 6.6055388,11.960465 c -0.9314157,1.037776 -1.3773704,2.327342 -0.9206452,4.031578 0.5232384,1.952979 3.6489033,5.506035 4.3656964,6.483385 0.752414,1.026218 0.0074,1.44247 -1.042589,0.651734 -1.6357044,-1.23111 -3.8224945,-1.79608 -5.2461505,-0.714129 -1.3999608,1.064177 -1.3854599,2.182306 0.6467056,5.702042 0.4452701,0.771255 0.062837,1.174998 -0.5442015,0.642912 C 2.3924676,27.469052 0.12981226,24.139036 0.01580209,22.833793 -0.29018648,19.328722 3.9254577,18.337726 5.9128614,19.543192 4.4483283,17.814719 2.619227,15.901087 2.0357786,15.340499 1.2726986,14.606883 1.0631196,13.102716 1.775184,12.212643 2.557073,11.235235 3.5002576,9.2564812 3.7951604,8.1401274 4.2512536,6.4133676 3.4693645,4.2304862 2.9154958,2.8946442 2.6164424,2.3767072 2.1580375,1.6831472 1.7100353,0.90725819 c -0.4480022,-0.775952 0.1506826,-1.41752501 1.009962,-0.325801 z' }));
}
var QuarterRest = {
    width: width$g,
    height: height$g,
    JSX: JSX$i
};

const width$h = 12.27;
const height$h = 20;
function JSX$j({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("path", { transform: `translate(${x}, ${y})`, d: 'M 1.1681188e-4,3.396808 C -1.7521782e-4,5.273525 1.5214747,6.769967 3.3980575,6.794707 5.5350724,6.822217 7.7057876,5.951156 9.0751732,4.799128 8.4066004,9.265536 5.6037578,16.886489 4.4488972,19.573249 4.1801715,20.198123 6.7388188,20.095428 6.8559812,19.533299 7.5652045,16.130884 10.00155,6.888606 10.951814,4.821876 11.34915,3.957708 11.945475,2.302747 12.226407,1.793458 12.376803,1.520784 12.139087,1.195487 11.749581,1.638794 11.123061,2.351965 10.479018,2.826952 10.096635,3.041179 9.0177018,3.645569 7.6505355,4.283666 6.6847349,4.23641 6.7562239,3.962159 6.7945381,3.679994 6.7945381,3.396585 6.7945381,1.520784 5.2737059,3.2601111e-4 3.3978823,-9.8889166e-7 1.5216499,-3.2698889e-4 3.5043563e-4,1.52033 0,3.396586 Z' }));
}
var EighthRest = {
    width: width$h,
    height: height$h,
    JSX: JSX$j
};

const width$i = 14.59;
const height$i = 30;
function JSX$k({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("path", { transform: `translate(${x}, ${y})`, d: 'M 6.0771088,-4.8815739e-7 C 4.2732033,-3.1648816e-4 2.8104886,1.4617305 2.8101956,3.2656765 c -2.929e-4,1.804386 1.4626562,3.243152 3.2669132,3.266943 2.0545847,0.02642 4.1417422,-0.811043 5.4584082,-1.918671 -0.249625,1.667259 -1.367517,5.9928135 -2.3430507,8.9282965 -0.9341151,0.484246 -1.9825854,0.917143 -2.7653792,0.878818 0.068719,-0.263738 0.1055676,-0.534904 0.1055676,-0.807458 0,-1.80356 -1.4622461,-3.265366 -3.2657415,-3.265806 C 1.4629491,10.347547 3.5154546e-4,11.809536 4.3979257e-8,13.613605 -2.9287389e-4,15.41812 1.4626562,16.856821 3.2669132,16.880612 5.2522521,16.907032 7.3451504,16.122113 8.6724199,15.07018 7.2461441,19.220276 3.7597768,28.094669 3.1550186,29.501717 2.896665,30.10251 5.2046236,30.17117 5.3771523,29.646835 L 14.565108,1.7244655 c 0.09356,-0.284399 -0.08401,-0.574991 -0.458475,-0.148702 -0.602298,0.68568 -1.221527,1.142362 -1.589197,1.34833 -1.03734,0.581096 -2.351779,1.194595 -3.2804461,1.149164 0.068777,-0.263673 0.1055676,-0.534968 0.1055676,-0.807452 0,-1.803513 -1.4621876,-3.26536598816 -3.265683,-3.26568298816 z' }));
}
var SixteenthRest = {
    width: width$i,
    height: height$i,
    JSX: JSX$k
};

function restBuilder(props) {
    const { duration } = props;
    let restType;
    switch (duration) {
        case 'whole':
            restType = WholeHalfRest;
            break;
        case 'half':
            restType = WholeHalfRest;
            break;
        case 'quarter':
            restType = QuarterRest;
            break;
        case 'eighth':
            restType = EighthRest;
            break;
        case 'sixteenth':
            restType = SixteenthRest;
            break;
        default:
            if (!duration) {
                throw new RenderError('Rest duration is undefined');
            }
            else {
                throw new RenderError(`Invalid duration: ${duration}`);
            }
    }
    return Object.assign(Object.assign(Object.assign({}, props), restType), { renderFunc: function () {
            const { id, x, y, width, height, JSX } = this;
            return React__default['default'].createElement(JSX, { key: id, x: x, y: y });
        } });
}

const width$j = 1;
function JSX$l({ x = 0, y = 0, height = 0 }) {
    return (React__default['default'].createElement("rect", { transform: `translate(${x}, ${y})`, width: 1, height: height }));
}
var BarLine = {
    width: width$j,
    JSX: JSX$l
};

const width$k = 6;
function JSX$m({ x = 0, y = 0, height = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("rect", { width: 1, height: height }),
        React__default['default'].createElement("rect", { x: '5', width: 1, height: height })));
}
var DoubleBarLine = {
    width: width$k,
    JSX: JSX$m
};

const width$l = 6;
function JSX$n({ x = 0, y = 0, height = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("rect", { width: 1, height: height }),
        React__default['default'].createElement("rect", { x: '3', width: 3, height: height })));
}
var BoldDoubleBarLine = {
    width: width$l,
    JSX: JSX$n
};

function barlineBuilder(props) {
    const { barline } = props;
    let barlineType;
    switch (barline) {
        case 'single':
            barlineType = BarLine;
            break;
        case 'double':
            barlineType = DoubleBarLine;
            break;
        case 'bold double':
            barlineType = BoldDoubleBarLine;
            break;
        default:
            if (!barline) {
                throw new RenderError('Barline type is undefined');
            }
            else {
                throw new RenderError(`Invalid barline: ${barline}`);
            }
    }
    return Object.assign(Object.assign(Object.assign({}, props), barlineType), { renderFunc: function () {
            const { id, x = 0, y = 0, height, JSX } = this;
            return React__default['default'].createElement(JSX, { key: id, x: x, y: y, height: height });
        } });
}

const width$m = 22.22;
const height$j = 65;
function JSX$o({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("path", { transform: `translate(${x}, ${y})`, d: 'm 3.5744199,58.475245 c 0.1544299,-1.75658 1.2688313,-3.18927 2.8374246,-3.60435 1.896792,-0.50168 3.4178317,0.68249 4.0430685,1.99005 0.529747,1.10721 0.527677,2.53951 -0.08852,3.48984 -0.7903979,1.21779 -2.3233671,1.88111 -3.5262866,1.49119 -0.051204,1.17231 1.7900801,2.08843 3.5252516,1.95421 2.41352,-0.18733 4.171134,-1.51652 4.841856,-3.68235 0.619299,-2.00035 0.307825,-4.10566 0.06591,-5.67854 -0.13177,-0.85604 -0.440575,-3.32071 -0.731078,-4.79828 -3.053627,0.78108 -6.3551054,0.11527 -9.1892616,-2.01287 C 2.5969082,45.555163 0.62990102,42.183361 0.14465882,38.446374 -0.28006448,35.175237 0.24962752,32.606743 1.4818532,30.317039 4.2740121,25.129446 8.3611481,22.056916 10.75898,19.686321 10.244703,16.570922 9.9764802,13.213881 10.309798,10.515415 10.752606,6.9306247 12.366903,2.1522847 15.294753,0.25538469 c 0.650349,-0.42151 1.280326,-0.345793 1.717632,0.41154 1.397931,2.42109201 2.215457,5.71439801 2.476762,8.40262301 0.328579,3.3812263 -0.762835,7.4189563 -2.03744,9.6260253 -1.573715,2.72543 -2.835356,4.333789 -4.81816,6.135145 0.115264,1.430669 0.51591,4.113829 0.814257,6.408434 5.441981,-0.305101 8.059827,3.550255 8.638109,7.124423 0.90174,5.571354 -2.89326,9.38656 -6.286961,10.78733 0.0414,0.70389 0.431097,3.49523 0.625619,4.69167 0.578771,3.55754 0.63782,6.17838 -0.903375,8.45812 -1.232171,1.82162 -3.008306,2.61365 -5.214721,2.69476 -4.002105,0.14822 -7.0107916,-3.35584 -6.731238,-6.52021 z m 5.2637452,-18.75541 c -0.4583328,2.269004 0.1934869,3.614696 2.1399039,4.908857 1.087437,0.72258 0.669305,1.501753 -0.944611,0.451197 -2.2706374,-1.478387 -3.4418538,-4.046391 -3.2785993,-6.661514 0.2190346,-3.509074 2.9592815,-6.088353 5.5556653,-6.957955 -0.239026,-1.856155 -0.464488,-3.722551 -0.751069,-5.701216 -2.2236823,1.612391 -4.4577144,3.674943 -5.9676417,5.575003 -2.0431045,2.570837 -3.1700891,5.20241 -3.1439422,7.961232 0.047391,5.034199 3.7928748,8.220526 7.2308611,9.106026 1.6970958,0.43709 3.6152408,0.38006 4.7965888,-0.0267 C 14.186072,46.747465 12.7974,36.824124 12.7974,35.722905 10.903114,36.296829 9.2002993,37.925779 8.8381651,39.7194 Z m 10.6931989,0.92767 c -0.776018,-3.300226 -3.071332,-4.883637 -5.525651,-5.017149 0.318937,2.286979 1.471034,11.063829 1.673617,12.413769 2.94136,-1.50252 4.461855,-4.802905 3.852034,-7.39662 z M 16.408556,5.6878307 c -2.304411,-0.38414 -4.226315,4.047699 -4.612526,6.6505663 -0.342415,2.306535 -0.30886,4.283075 0.04957,6.412084 2.315087,-1.769217 4.414845,-4.164161 5.539378,-6.760981 0.738486,-1.705811 1.84014,-5.8320603 -0.977076,-6.3016143 z' }));
}
var TrebleClef = {
    width: width$m,
    height: height$j,
    JSX: JSX$o
};

const width$n = 22.22; // not correct
const height$k = 28; // not correct
function JSX$p({ x = 0, y = 0 }) {
    return (React__default['default'].createElement("path", { transform: `translate(${x}, ${y})`, d: 'm 6.561862,107.3479 c 0.2835,-3.2247 2.3293,-5.8548 5.208898,-6.6168 3.4821,-0.92097 6.2744,1.2529 7.4222,3.6533 0.9725,2.0326 0.9687,4.662 -0.1625,6.4066 -1.451,2.2356 -4.2652,3.4533 -6.4735,2.7375 -0.094,2.1521 3.2862,3.8339 6.4716,3.5875 4.4307,-0.3439 7.6573,-2.784 8.8886,-6.76 1.1369,-3.6722 0.5651,-7.5371 0.121,-10.42457 -0.2419,-1.5715 -0.8088,-6.0961 -1.3421,-8.8086 -5.6058,1.4339 -11.6666,0.2116 -16.869498,-3.6952 -5.0592,-3.7982 -8.6702,-9.9881 -9.5609998,-16.8484 -0.7797,-6.0051 0.1927,-10.7203 2.4547998,-14.9237 5.1258,-9.5233 12.628898,-15.1638 17.030798,-19.5157 -0.9441,-5.7192 -1.4365,-11.882 -0.8246,-16.8358 0.8129,-6.5809 3.7764,-15.352898 9.1513,-18.8351976 1.1939,-0.7738 2.3504,-0.6348 3.1532,0.7554996 2.5663,4.4446 4.0671,10.490398 4.5468,15.425398 0.6032,6.2072 -1.4004,13.6196 -3.7403,17.6713 -2.889,5.0033 -5.2051,7.9559 -8.8451,11.2628 0.2116,2.6264 0.9471,7.5521 1.4948,11.7645 9.9903,-0.5601 14.7961,6.5175 15.8577,13.0789 1.6554,10.2278 -5.3114,17.2317 -11.5415,19.8032 0.076,1.2922 0.7914,6.4165 1.1485,8.6129 1.0625,6.53087 1.1709,11.34217 -1.6584,15.52727 -2.262,3.3441 -5.5226,4.7981 -9.5731,4.947 -7.347,0.2721 -12.870298,-6.1606 -12.357098,-11.9697 z M 16.22496,72.91703 c -0.8414,4.1654 0.3552,6.6358 3.9284,9.0116 1.9963,1.3265 1.2287,2.7569 -1.7341,0.8283 -4.1684,-2.714 -6.3185,-7.4283 -6.0188,-12.2291 0.4021,-6.4419 5.4326,-11.1769 10.199,-12.7733 -0.4388,-3.4075 -0.8527,-6.8338 -1.3788,-10.4662 -4.0822,2.96 -8.1834,6.7464 -10.9553,10.2345 -3.750698,4.7195 -5.819598,9.5505 -5.771598,14.6151 0.087,9.2417 6.962898,15.0911 13.274298,16.7167 3.1155,0.8024 6.6368,0.6977 8.8055,-0.049 -0.531,-2.9874 -3.0803,-21.2045 -3.0803,-23.2261 -3.4775,1.0536 -6.6035,4.044 -7.2683,7.3367 z m 19.6304,1.703 c -1.4246,-6.0585 -5.6383,-8.9653 -10.1439,-9.2104 0.5855,4.1984 2.7005,20.3108 3.0724,22.789 5.3997,-2.7583 8.191,-8.8171 7.0715,-13.5786 z m -5.7328,-64.1784 c -4.2304,-0.705198 -7.7586,7.4307 -8.4676,12.209 -0.6286,4.2343 -0.567,7.8628 0.091,11.7712 4.25,-3.2479 8.1047,-7.6445 10.1691,-12.4117 1.3557,-3.1315 3.3781,-10.7064 -1.7937,-11.5684 z', "connector-curvature": '0' }));
}
var BassClef = {
    width: width$n,
    height: height$k,
    JSX: JSX$p
};

function clefBuilder(props) {
    const { clef } = props;
    let clefType;
    switch (clef) {
        case 'treble':
            clefType = TrebleClef;
            break;
        case 'bass':
            clefType = BassClef;
            break;
        case 'alto':
            clefType = TrebleClef;
            break;
        case 'tenor':
            clefType = TrebleClef;
            break;
        default:
            if (!clef) {
                throw new RenderError('Clef type is undefined');
            }
            else {
                throw new RenderError(`Invalid clef: ${clef}`);
            }
    }
    return Object.assign(Object.assign(Object.assign({}, props), clefType), { renderFunc: function () {
            const { id, x = 0, y = 0, JSX } = this;
            return React__default['default'].createElement(JSX, { key: id, x: x, y: y });
        } });
}

const width$o = 17;
const height$l = 53;
const textStyle = {
    font: 'bold 28px cambria'
};
function JSX$q({ upper, lower, x = 0, y = 0 }) {
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement("text", { transform: `translate(${0}, ${20})`, style: textStyle }, upper),
        React__default['default'].createElement("text", { transform: `translate(${0}, ${40})`, style: textStyle }, lower)));
}
var TimeSignature = {
    width: width$o,
    height: height$l,
    JSX: JSX$q
};

function timeSignatureBuilder(props) {
    return Object.assign(Object.assign(Object.assign({}, TimeSignature), props), { renderFunc: function () {
            const { id, x, y, upper, lower } = this;
            return React__default['default'].createElement(TimeSignature.JSX, { key: id, x: x, y: y, upper: upper, lower: lower });
        } });
}

/**
 * converts degree to radians
 * @param degree
 * @returns {number}
 */
const toRadians = function (degree) {
    return degree * (Math.PI / 180);
};
/**
 * Converts radian to degree
 * @param radians
 * @returns {number}
 */
const toDegree = function (radians) {
    return radians * (180 / Math.PI);
};
/**
 * Rounds a number mathematical correct to the number of decimals
 * @param number
 * @param decimals (optional, default: 5)
 * @returns {number}
 */
const roundNumber = function (number, decimals = 5) {
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
var TrigonometryMath = {
    sin: function (number) {
        return roundNumber(Math.sin(toRadians(number)));
    },
    cos: function (number) {
        return roundNumber(Math.cos(toRadians(number)));
    },
    tan: function (number) {
        return roundNumber(Math.tan(toRadians(number)));
    },
    asin: function (number) {
        return roundNumber(toDegree(Math.asin(number)));
    },
    acos: function (number) {
        return roundNumber(toDegree(Math.acos(number)));
    },
    atan: function (number) {
        return roundNumber(toDegree(Math.atan(number)));
    },
};

function quadraticEquationSolver(a, b, c) {
    const dental = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
    return {
        result1: (-1 * b + dental) / (2 * a),
        result2: (-1 * b - dental) / (2 * a)
    };
}

function dx(A, B) {
    // called AB: y = ax + b
    // yA = axA + b
    const a = !(B.y - A.y) || !(B.x - A.x) ? 0 : (B.y - A.y) / (B.x - A.x);
    const b = A.y - (a * A.x);
    return { a, b };
}
/**
 * @description finding 2 point (C) that ^BAC = degrees
 * @author Phi Nguyen
 * @export
 * @param {PointModel} A
 * @param {PointModel} B
 * @param {number} degrees
 * @returns {TwoPointByPosition}
 */
function findPerpendicularPointsBasedOnAB(A, B, degrees) {
    // called AB: y = ax + b
    // yA = axA + b
    // yB = axB + b
    // yA - yB = a(xA - xB)
    const { a, b } = dx(A, B);
    // call H is "center" of AB
    const xH = (A.x + B.x) / 2;
    const yH = (A.y + B.y) / 2;
    // called CH ⊥ AB
    // => CH: y = a1x + b1 => a*a1 = -1 => a1 = -1/a
    const a1 = -1 / a;
    const b1 = yH - a1 * xH;
    const dAH = Math.sqrt(Math.pow((A.x - xH), 2) + Math.pow((A.y - yH), 2));
    const dHC = dAH * TrigonometryMath.tan(degrees);
    // called c: xC, yC is needed position 
    // (xC - xH)^2 + (yC - yH)^2 = dHC^2
    // PTB2 a1 * B.x + b1 * x + c = 0
    // => a = 1 + a1^2
    // => b = -2xH + 2a1b1 -2a1yH = -2(xH -a1b1 + ayH);
    // => c = -(dHC^2) + xH^2 + yH^2 + b1^2 - 2b1yH
    const re = quadraticEquationSolver(1 + Math.pow(a1, 2), -2 * (xH - a1 * b1 + a1 * yH), -(Math.pow(dHC, 2)) + Math.pow(xH, 2) + Math.pow(yH, 2) + Math.pow(b1, 2) - 2 * b1 * yH);
    const c1 = {
        x: re.result1,
        y: a1 * re.result1 + b1
    };
    const c2 = {
        x: re.result2,
        y: a1 * re.result2 + b1
    };
    if (c1.y >= c2.y) {
        return {
            above: c2,
            under: c1,
        };
    }
    else {
        return {
            above: c1,
            under: c2,
        };
    }
}
/**
 * @description finding 2 point (C() which is on dAB and distance of dAC = d
 * @author Phi Nguyen
 * @export
 * @param {PointModel} A
 * @param {PointModel} B
 * @param {number} d
 * @returns {TwoPointBaseLine}
 */
function findPointsOnAB(A, B, d) {
    // dAB
    const a = (B.y - A.y) / (B.x - A.x);
    const b = A.y - a * A.x;
    // call C (xC, yC) on AB and dAC= d
    // => yC = a*xC + b
    // => (xC - xA)^2 + (yC - yA)^2 = d^2
    // => a = 1 + a^2
    // => b = -2xA + 2ab -2ayA = -2(xA -ab + ayA);
    // => c = -(d^2) + xA^2 + yA^2 + b^2 - 2byA
    const re = quadraticEquationSolver(1 + Math.pow(a, 2), -2 * (A.x - a * b + a * A.y), -(Math.pow(d, 2)) + Math.pow(A.x, 2) + Math.pow(A.y, 2) + Math.pow(b, 2) - 2 * b * A.y);
    const c1 = {
        x: re.result1,
        y: a * re.result1 + b
    };
    const c2 = {
        x: re.result2,
        y: a * re.result2 + b
    };
    if (calculatedAB(B, c1) < calculatedAB(B, c2)) {
        return {
            between: c1,
            outside: c2,
        };
    }
    else {
        return {
            between: c2,
            outside: c1,
        };
    }
}
/**
 * @description calcular distance between A and B
 * @author Phi Nguyen
 * @export
 * @param {PointModel} A
 * @param {PointModel} B
 * @returns {number}
 */
function calculatedAB(A, B) {
    return Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2));
}

const width$p = 0;
const height$m = 20;
const curLength = 15;
const extLength = 2;
function JSX$r({ x1, y1, x2, y2, place = 'under' }) {
    // finding C
    const CRe = findPerpendicularPointsBasedOnAB({ x: x1, y: y1 }, { x: x2, y: y2 }, 60);
    let C;
    if (place === 'under') {
        C = CRe.under;
    }
    else {
        C = CRe.above;
    }
    const foundAcur = findPointsOnAB({ x: x1, y: y1 }, C, 10);
    const curAx = foundAcur.between.x;
    const curAy = foundAcur.between.y;
    const foundBcur = findPointsOnAB({ x: x2, y: y2 }, C, 10);
    const curBx = foundBcur.between.x;
    const curBy = foundBcur.between.y;
    // find A1, B1
    const foundA1 = findPointsOnAB({ x: x1, y: y1 }, { x: x2, y: y2 }, extLength);
    const A1 = foundA1.outside;
    const foundB1 = findPointsOnAB({ x: x2, y: y2 }, { x: x1, y: y1 }, extLength);
    const B1 = foundB1.outside;
    // finding C1
    const C1Re = findPerpendicularPointsBasedOnAB(A1, B1, 60);
    let C1;
    if (place === 'under') {
        C1 = C1Re.under;
    }
    else {
        C1 = C1Re.above;
    }
    const foundA1cur = findPointsOnAB(A1, C1, curLength);
    const curA1x = foundA1cur.between.x;
    const curA1y = foundA1cur.between.y;
    const foundB1cur = findPointsOnAB(B1, C1, curLength);
    const curB1x = foundB1cur.between.x;
    const curB1y = foundB1cur.between.y;
    return (React__default['default'].createElement("path", { d: `M ${x1} ${y1} C ${curAx} ${curAy}, ${curBx} ${curBy}, ${x2} ${y2} L ${B1.x} ${B1.y} C ${curB1x} ${curB1y}, ${curA1x} ${curA1y}, ${A1.x} ${A1.y} Z`, strokeWidth: 0.1, stroke: 'none', fill: 'black' }));
}
var Slur = {
    width: width$p,
    height: height$m,
    JSX: JSX$r
};

function slurBuilder(props) {
    return Object.assign(Object.assign(Object.assign({}, Slur), props), { renderFunc: function () {
            const { id, x1, y1, x2, y2, place, JSX } = this;
            return React__default['default'].createElement(JSX, { key: id, x1: x1, y1: y1, x2: x2, y2: y2, place: place });
        } });
}

// for edit mode
const distanceMap = new Map([
    ['clef', { type: 'static', unit: 10 }],
    ['keySignature', { type: 'static', unit: 10 }],
    ['timeSignature', { type: 'static', unit: 10 }],
    ['note', { type: 'dynamic', unit: 5 }],
    ['rest', { type: 'dynamic', unit: 5 }],
    ['barline', { type: 'dynamic', unit: 5 }],
]);
const lastEleDisUnit = 5;

class RunTimeError extends SvgError {
}

let index;
function init(no = 0) {
    if (index) {
        console.warn('Id Generator has been reset!');
    }
    index = no;
}
function next() {
    if (!index) {
        throw new RunTimeError('Id Generator is not initialized!');
    }
    return String(index++);
}

const beamDurations = ['eighth', 'sixteenth'];

const stemWidth = 1;
const beamHeight = 4;
function beamBuilder(props) {
    return Object.assign(Object.assign({ height: 0, width: 0 }, props), { renderFunc: function () {
            const { id, isUp, elements } = this;
            // vaidation
            if (elements.length < 2) {
                return;
            }
            const [first, second, ...rest] = elements;
            const last = rest.pop();
            const primaryBeamDx = dx({ x: first.x, y: first.y - first.height + beamHeight }, { x: last.x - stemWidth, y: last.y - last.height + beamHeight });
            // loop and build
            const numberOfNote = elements.length - 1;
            for (const [cur, index] of elements.entries()) {
                if (!index) { // first
                    const next = elements[index + 1];
                }
                else if (index === numberOfNote) { // last
                    const previous = elements[numberOfNote - 1];
                }
                else {
                    const next = elements[index + 1];
                    const previous = elements[numberOfNote - 1];
                }
            }
            let beamPath;
            if (isUp) {
                // finding dx that goes through under line of beam
                const { a, b } = dx({ x: first.x, y: first.y - first.height + beamHeight }, { x: last.x - stemWidth, y: last.y - last.height + beamHeight });
                const restStemPath = rest.reduce((d, { x, y }) => {
                    d = d.concat(` L ${x - stemWidth},${a * (x - stemWidth) + b} L ${x - stemWidth},${y} L ${x},${y} L ${x},${a * x + b}`);
                    return d;
                }, '');
                beamPath = `M ${last.x - stemWidth},${last.y} h ${stemWidth} v ${-last.height} L ${first.x - stemWidth},${first.y - first.height} v ${first.height} h ${stemWidth} v ${-first.height + beamHeight} ${restStemPath} L ${last.x - stemWidth},${last.y - last.height + beamHeight} z`;
            }
            // return <path key={id} d={beamPath} fill='none' stroke='black' strokeWidth={0.5} />
            return React__default['default'].createElement("path", { key: id, d: beamPath, fill: 'black' });
        } });
}

function Stave({ x = 0, y = 0, elements = [], slurs = [], width }) {
    // setting up clef
    let clef = 'treble';
    if (elements.length && elements[0].type === 'clef') {
        const clefEle = elements[0];
        clef = clefEle.clef;
    }
    // PHASE 1: Calculate note distance
    // get stuff ready
    const keySignatureMap = findKeySignatureMap(clef);
    const noteMap = findNoteMap(clef);
    // loop and pre-render elements & sum width of elements
    const preRenderObj = elements.reduce((previous, element) => {
        const type = element.type;
        let builtElement;
        if (type === 'clef') {
            builtElement = clefBuilder(Object.assign(Object.assign({}, element), { y: 0 }));
        }
        else if (type === 'keySignature') {
            builtElement = keySignatureBuilder(Object.assign(Object.assign({}, element), { accidentalMap: keySignatureMap }));
        }
        else if (type === 'timeSignature') {
            builtElement = timeSignatureBuilder(Object.assign(Object.assign({}, element), { y: 10 }));
        }
        else if (type === 'note') {
            const { pitch } = element;
            const noteConfig = noteMap.get(pitch);
            builtElement = noteBuilder(Object.assign(Object.assign({}, element), noteConfig));
        }
        else if (type === 'rest') {
            const { duration } = element;
            const restConfig = RestMap.get(duration);
            builtElement = restBuilder(Object.assign(Object.assign({}, element), restConfig));
        }
        else if (type === 'barline') {
            builtElement = barlineBuilder(Object.assign(Object.assign({}, element), { height: 40, y: 10 }));
        }
        previous.width += builtElement.width;
        previous.renderArr.push(Object.assign(Object.assign({}, builtElement), { type }));
        return previous;
    }, { width: 0, renderArr: [] });
    // loop to sum static width/units of elements
    // if the last element is a barline (normal case) else adding lastEleDisUnit unit
    const isLastEleBar = elements[elements.length - 1].type === 'barline';
    const { staticWidth, units } = elements.reduce((previous, element) => {
        const disObj = distanceMap.get(element.type);
        if (disObj.type === 'static') {
            previous.staticWidth += disObj.unit;
        }
        else {
            previous.units += disObj.unit;
        }
        return previous;
    }, { staticWidth: 0, units: isLastEleBar ? 0 : lastEleDisUnit });
    // calculate how long of an unit
    const disPerUnit = (width - preRenderObj.width - staticWidth) / units;
    // setting x for each element
    let { renderArr } = preRenderObj;
    let currentX = 0;
    renderArr = renderArr.map((element, index) => {
        const disObj = distanceMap.get(element.type);
        if (disObj.type === 'static') {
            currentX += disObj.unit;
        }
        else {
            currentX += disObj.unit * disPerUnit;
        }
        element.x = currentX;
        currentX += element.width;
        return element;
    });
    // PHASE 2: beam, slur..
    // slurs
    // get notes
    const noteElements = renderArr.filter((element) => element.type === 'note');
    // getting new slurs
    const newSlurs = noteElements.reduce((previous, element) => {
        const { id, slurTo } = element;
        if (slurTo && !slurs.some(s => s.from === id)) {
            const toElement = noteElements.find((element) => element.id === slurTo);
            if (toElement) {
                // start point stem is up => under
                // start point stem is down => over
                const { x, y, width, isStemUp } = element;
                if (isStemUp) {
                    previous.push(slurBuilder({ id: next(), x1: x + width, y1: y + width, x2: toElement.x, y2: toElement.y + width, place: 'under' }));
                }
                else {
                    previous.push(slurBuilder({ id: next(), x1: x + width, y1: y, x2: toElement.x, y2: toElement.y, place: 'over' }));
                }
            }
        }
        return previous;
    }, []);
    const allSlurs = [...slurs, ...newSlurs];
    // beams
    // grouping by beamGroup
    const newBeamsMap = noteElements.reduce((map, element) => {
        if (element.beamGroup && beamDurations.some((d) => d === element.duration)) {
            if (map.has(element.beamGroup)) {
                map.get(element.beamGroup).push(element);
            }
            else {
                map.set(element.beamGroup, [element]);
            }
        }
        return map;
    }, new Map());
    // build beams
    // for each group and change the way note is built
    // applying beamed rules
    const beams = [];
    for (const notes of newBeamsMap.values()) {
        if (notes.length < 2) {
            continue;
        }
        // direction (up or down) of beam based on averge of order
        // if less than mid then down
        // else up
        const isUp = notes.reduce((previous, note) => previous + note.order, 0) / notes.length < 7;
        const beamElements = notes.map(({ x, y }) => {
            return {
                x: x + HeadNote.width,
                y: y + HeadNote.height / 2,
                height: 30
            };
        });
        const beam = beamBuilder({
            id: next(),
            isUp,
            elements: beamElements
        });
        beams.push(beam);
    }
    // PHASE 3: render
    const elementReactNodes = renderArr.map((element, index) => {
        return element.renderFunc();
    });
    const slurReactNodes = allSlurs.map((element, index) => {
        return element.renderFunc();
    });
    const beamReactNodes = beams.map((element, index) => {
        return element.renderFunc();
    });
    return (React__default['default'].createElement("g", { transform: `translate(${x}, ${y})` },
        React__default['default'].createElement(Staff.JSX, { lineNumber: 5, space: 10, width: width }),
        elementReactNodes,
        slurReactNodes,
        beamReactNodes));
}

class SvgMusicNotation extends React__default['default'].Component {
    constructor(props) {
        super(props);
        this.state = {
            dimension: null
        };
        this.smnRef = React__default['default'].createRef();
    }
    componentDidMount() {
        // getting and setting svg demension
        const svgNode = ReactDOM__default['default'].findDOMNode(this.smnRef.current);
        const clientRect = svgNode.getBoundingClientRect();
        this.setState({
            dimension: {
                width: clientRect.width,
                height: clientRect.height,
            }
        });
    }
    render() {
        const { source, config } = this.props;
        const { staves, idIncrementNo } = source;
        const { width, height, editable, stave } = config;
        const { dimension } = this.state;
        // initialize Id Generator
        init(idIncrementNo); // => move to one-run block
        const staveHeight = stave && stave.height ? stave.height : 120;
        const marginTop = stave && stave.marginTop ? stave.marginTop : 20;
        const staveSourceMap = dimension && staves.map(({ id, elements, slurs }, index) => {
            return (React__default['default'].createElement(Stave, { key: id, id: id, y: staveHeight * index + marginTop, width: dimension.width, elements: elements, slurs: slurs }));
        });
        return (
        // <div style={{ width: '100%', height: '100%' }}>
        //     {/* toolbar */}
        //     {/* {editable && <ToolBar />} */}
        //     {/* sheet */}
        React__default['default'].createElement("svg", { width: width, height: height, ref: this.smnRef }, staveSourceMap)
        // </div>
        );
    }
}

exports.SvgMusicNotation = SvgMusicNotation;
