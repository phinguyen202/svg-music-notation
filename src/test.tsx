import ReactDOM from "react-dom";
import SVGMusicNotation from "./index";
import React from "react";


// sample
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