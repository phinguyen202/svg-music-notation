export interface MeiModel {
    mei: Mei;
}

export interface Mei {
    meiHead:        MeiHead;
    music:          Music;
    "_xmlns:xlink": string;
    _xmlns:         string;
    _meiversion:    string;
}

export interface MeiHead {
    fileDesc:     FileDesc;
    encodingDesc: EncodingDesc;
    workList:     WorkList;
    revisionDesc: RevisionDesc;
}

export interface EncodingDesc {
    appInfo:    AppInfo;
    classDecls: ClassDecls;
}

export interface AppInfo {
    application: Application[];
}

export interface Application {
    name:      string;
    "_xml:id": string;
    _version:  string;
}

export interface ClassDecls {
    taxonomy: Taxonomy[];
}

export interface Taxonomy {
    bibl:     TaxonomyBibl;
    category: CategoryElement[] | CategoryElement;
}

export interface TaxonomyBibl {
    "_xml:id": string;
    _target:   string;
    __text:    string;
}

export interface CategoryElement {
    altId:     string;
    label:     string;
    "_xml:id": string;
}

export interface FileDesc {
    titleStmt:  TitleStmt;
    pubStmt:    PubStmt;
    seriesStmt: SeriesStmt;
    sourceDesc: SourceDesc;
}

export interface PubStmt {
    publisher:    Publisher;
    address:      Address;
    date:         string;
    availability: Availability;
}

export interface GeogNameClass {
    _codedval:   string;
    "_auth.uri": string;
    _auth:       Auth;
    __text:      string;
    _role?:      string;
    address?:    Address;
}

export interface AddrLineClass {
    geogName: GeogNameClass;
    __text?:  string;
}

export interface Address {
    addrLine: Array<AddrLineClass | string>;
}

export enum Auth {
    DeutscheNationalbibliothek = "Deutsche Nationalbibliothek",
    Gnd = "GND",
    Tgn = "TGN",
}

export interface Availability {
    useRestrict: string;
}

export interface Publisher {
    corpName: GeogNameClass;
}

export interface SeriesStmt {
    title:      string;
    funder:     Publisher[];
    respStmt:   SeriesStmtRespStmt;
    identifier: Identifier;
}

export interface Identifier {
    ref: IdentifierRef;
}

export interface IdentifierRef {
    _target: string;
}

export interface SeriesStmtRespStmt {
    corpName: CorpNameElement;
}

export interface CorpNameElement {
    _role:  string;
    __text: string;
}

export interface SourceDesc {
    source: Source;
}

export interface Source {
    bibl: SourceBibl;
}

export interface SourceBibl {
    identifier: TitlePart;
    title:      string;
    composer:   Composer;
    imprint:    Imprint;
}

export interface Composer {
    persName: GeogNameClass;
}

export interface TitlePart {
    _type:  string;
    __text: string;
}

export interface Imprint {
    date:  TitlePart;
    annot: string;
}

export interface TitleStmt {
    title:    Title;
    composer: Composer;
    respStmt: TitleStmtRespStmt;
}

export interface TitleStmtRespStmt {
    persName: CorpNameElement[];
}

export interface Title {
    titlePart: TitlePart;
    __text:    string;
}

export interface RevisionDesc {
    change: Change[];
}

export interface Change {
    changeDesc: ChangeDesc;
    date:       DateClass | string;
    _n:         string;
    respStmt?:  ChangeRespStmt;
    _resp?:     string;
}

export interface ChangeDesc {
    p: PP | string;
}

export interface PP {
    ref:    PRef;
    __text: string;
}

export interface PRef {
    _target: string;
    __text:  string;
}

export interface DateClass {
    _isodate: Date;
}

export interface ChangeRespStmt {
    persName: PersNameClass | string;
}

export interface PersNameClass {
    "_xml:id": string;
    __text:    string;
}

export interface WorkList {
    work: Work;
}

export interface Work {
    title:          string;
    composer:       Composer;
    key:            Key;
    meter:          Meter;
    incip:          Incip;
    creation:       Creation;
    perfMedium:     PerfMedium;
    classification: Classification;
}

export interface Classification {
    termList: TermList;
}

export interface TermList {
    term: Term[];
}

export interface Term {
    _class: string;
    __text: string;
}

export interface Creation {
    date:   string;
    __text: string;
}

export interface Incip {
    incipCode: IncipCode;
}

export interface IncipCode {
    _form:  string;
    __text: string;
}

export interface Key {
    _pname: Pname;
    _mode:  string;
    __text: string;
}

export enum Pname {
    A = "a",
    B = "b",
    C = "c",
    D = "d",
    E = "e",
    F = "f",
    G = "g",
}

export interface Meter {
    _count: string;
    _unit:  string;
}

export interface PerfMedium {
    perfResList: PerfResList;
}

export interface PerfResList {
    perfRes: PerfRes;
}

export interface PerfRes {
    _codedval: string;
    __text:    string;
}

export interface Music {
    body: Body;
}

export interface Body {
    mdiv: Mdiv;
}

export interface Mdiv {
    score: Score;
}

export interface Score {
    scoreDef: ScoreScoreDef;
    section:  Section;
}

export interface ScoreScoreDef {
    pgHead:         PGHead;
    pgFoot:         PGFoot;
    staffGrp:       StaffGrp;
    "_meter.count": string;
    "_meter.unit":  string;
    "_key.sig":     string;
    "_key.mode":    string;
}

export interface PGFoot {
    p: PGFootP;
}

export interface PGFootP {
    rend: RendElement;
}

export interface RendElement {
    _halign: string;
    _valign: string;
    __text:  string;
    lb?:     string;
}

export interface PGHead {
    rend: RendElement[];
    lb:   string;
}

export interface StaffGrp {
    staffDef:    StaffGrpStaffDef[];
    "_bar.thru": string;
    _symbol:     string;
}

export interface StaffGrpStaffDef {
    _n:            string;
    "_clef.line":  string;
    "_clef.shape": string;
    "_key.sig":    string;
    "_key.mode":   string;
    _lines:        string;
}

export interface Section {
    scoreDef: ScoreDefElement[];
    measure:  Measure[];
    pb:       string[];
    sb:       string[];
    staffDef: SectionStaffDef[];
}

export interface Measure {
    staff:     Staff[];
    _n:        string;
    "_xml:id": string;
    _width:    string;
    tie?:      SlurElement[] | SlurElement;
    slur?:     SlurElement[] | SlurElement;
    dir?:      Dir[];
}

export interface Dir {
    rend:    DirRend;
    _tstamp: string;
    _place:  Place;
    _staff:  string;
}

export enum Place {
    Above = "above",
    Below = "below",
}

export interface DirRend {
    _fontfam:  Fontfam;
    _fontsize: Fontsize;
    __text:    string;
}

export enum Fontfam {
    TimesNewRoman = "Times New Roman",
}

export enum Fontsize {
    The9Pt = "9pt",
}

export interface SlurElement {
    _tstamp:   string;
    _curvedir: Place;
    _startid:  string;
    _endid:    string;
    _staff:    string;
    _tstamp2?: Tstamp2;
}

export enum Tstamp2 {
    The0M2 = "0m+2",
    The0M3 = "0m+3",
    The0M4 = "0m+4",
    The0M5 = "0m+5",
}

export interface Staff {
    layer: Layer;
    _n:    string;
}

export interface Layer {
    beam?:  BeamElement[] | PurpleBeam;
    _n:     string;
    chord?: FluffyChord[] | TentacledChord;
    note?:  FluffyNote[] | FluffyNote;
    rest?:  REST;
}

export interface BeamElement {
    note?:  FluffyNote[] | FluffyNote;
    chord?: BeamChordClass[] | PurpleChord;
}

export interface BeamChordClass {
    note:        PurpleNote[];
    "_xml:id":   string;
    _dur:        string;
    "_stem.dir": StemDir;
    _tie?:       Tie;
}

export enum StemDir {
    Down = "down",
    Up = "up",
}

export enum Tie {
    I = "i",
    M = "m",
    T = "t",
}

export interface PurpleNote {
    "_xml:id":     string;
    _pname:        Pname;
    _oct:          string;
    "_accid.ges"?: Accid;
    _accid?:       Accid;
}

export enum Accid {
    N = "n",
    S = "s",
}

export interface PurpleChord {
    note:        FluffyNote[];
    "_xml:id":   string;
    _dur:        string;
    "_stem.dir": StemDir;
}

export interface FluffyNote {
    "_xml:id":     string;
    _pname:        Pname;
    _oct:          string;
    "_accid.ges"?: Accid;
    _tie?:         Tie;
    _accid?:       Accid;
    _dur?:         string;
    "_stem.dir"?:  StemDir;
    _dots?:        string;
}

export interface PurpleBeam {
    note:   FluffyNote[] | TentacledNote;
    chord?: BeamChordClass;
}

export interface TentacledNote {
    "_xml:id":   string;
    _pname:      Pname;
    _oct:        string;
    _dur:        string;
    "_stem.dir": StemDir;
}

export interface FluffyChord {
    note:        FluffyNote[];
    "_xml:id":   string;
    _dur:        string;
    "_stem.dir": StemDir;
    _tie?:       Tie;
    _dots?:      string;
}

export interface TentacledChord {
    note:         PurpleNote[];
    "_xml:id":    string;
    _dur:         string;
    "_stem.dir"?: StemDir;
    _dots?:       string;
    _tie?:        Tie;
}

export interface REST {
    "_xml:id": string;
    _dur:      string;
}

export interface ScoreDefElement {
    "_meter.count"?:     string;
    "_meter.unit"?:      string;
    "_key.sig"?:         string;
    "_key.mode"?:        string;
    "_system.leftmar"?:  string;
    "_system.rightmar"?: string;
    "_system.topmar"?:   string;
}

export interface SectionStaffDef {
    _n:       string;
    _spacing: string;
}
