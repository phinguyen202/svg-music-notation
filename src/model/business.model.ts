export interface NoteRest {
	duration: string;
}

export interface Rest extends NoteRest {

}

export interface Note extends NoteRest {
	note: string;
	accidental: string;
	dot: boolean;
	tie: boolean;
	lyrics?: string;
}

export interface Meansure {
	clef: string;
	timeSignature: string;
	noteAndRest: Note[];
	barline: string;
}

export interface MusicNotation {
	staves: StaveProps[];
}

export interface StaveProps {
	meansures: Meansure[];
}

