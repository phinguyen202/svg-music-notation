import { Configuration } from "./config";

export interface NoteRestProps {
	duration: string;
}

export interface RestProps extends NoteRestProps {

}

export interface NoteProps extends NoteRestProps {
	note: string;
	accidental?: 'flat' | 'sharp' | 'natural' | 'double flat' | 'double sharp';
	dot?: 'single' | 'double' | 'triple';
	tie?: boolean;
	lyrics?: string;
}

export interface MeansureProps {
	timeSignature?: TimeSignatureProps;
	notes: Array<NoteProps|RestProps>;
	barline?: 'barline' | 'double' | 'bold double';
}

export interface TimeSignatureProps {
	upper: number;
	lower: number;
}

export interface MusicNotation {
	staves: StaveProps[];
	width: string;
	height: string;
	config: Configuration;
}

export interface StaveProps {
	measures: MeansureProps[];
	clef?: 'treble' | 'bass' | 'grand';
	keySigNumber?: number;
}

