import { Configuration } from "./config";

export interface NoteRestProps {
	duration: string;
}

export interface RestProps extends NoteRestProps {

}

export interface NoteProps extends NoteRestProps {
	note: string;
	accidental?: string;
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
	clef: 'treble' | 'bass' | 'grand';
	staves: StaveProps[];
	width: string;
	height: string;
	config: Configuration;
}

export interface StaveProps {
	measures: MeansureProps[];
	clef?: 'treble' | 'bass' | 'grand';
}

