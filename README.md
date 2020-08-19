# SVG Music Notation ♪♫..

There are some cases you want to have a music notation on your website. This library brings that capacibility to you.
The library is developing but we decided to release the first one because it's useful for simple cases.

### install
`
npm install svg-music-notation
`
### Required
The library is developed using react so you need react and react-dom

### How to use it?
Using by input a string like:
`javascript
const userSource = `
TrebleClef 4/4 C5-4n D5-4n E5-4n D5-4n || C5-4n D5-4n F5-4n E5-4n |B C5-4n D5-4n E5-4n D5-4n C5-4n |B
I don't know you, | but I want you | all the more for that
R-4n A4-8n G4-8n A4-8n G4-8n A4-8n G4-8n | C5-4n D5-4n E5-4n D5-8n C5-8n | C5-4n D5-4n F5-4n E5-4n |
\\E \\E \\E \\E \\E \\E | Words fall through me and | al -ways fool me,
`;

ReactDOM.render(
    <SVGMusicNotation height={'100%'} width={'800'} source={userSource} />,
    document.getElementById("root")
);
`

And the library will render something like this on your web:
![Falling slowly by Glen Hansard & Marketa Irglova](https://user-images.githubusercontent.com/23725530/78373263-9164e500-75f4-11ea-9494-49d8a1c44976.png)  
*Falling slowly by Glen Hansard & Marketa Irglova ( The barlines are changed )*

There are another way to put data into by using json:  
updating...

### Supported range
- Pitch (note) range: C4 to C6
- Duration (note and rest) range: 1n (whole), 2n (half), 4n (quarter), 8n (eighth), 16n(sixteenth)
- Barline: | (barline), || (double barline), |B (bold double barline)

### Lyrics rules
- \\E: empty  
*if you don't need lyrics, just let the line empty*
