export interface NoteRestProps {
	duration: string;
}

export interface RestProps extends NoteRestProps {

}

export interface NoteProps extends NoteRestProps {
	note: string;
	accidental?: string;
	dot?: boolean;
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
}

export interface StaveProps {
	meansures: MeansureProps[];
	clef?: 'treble' | 'bass' | 'grand';
}

