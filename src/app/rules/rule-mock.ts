import { Rule } from "./rule";

// https://www.thorntech.com/2012/07/4-things-you-must-do-when-putting-html-in-json/

export const RULES: Rule[] = 
[
    {
        number: "1",
        caption: "Die Spielfläche",
        paragraphs: 
        [
            {
                number: "1:1",
                sections: 
                [
                    "<u>Die Spielfläche</u> (Abb. 1) ist ein Rechteck von 40 m Länge und 20 m Breite und umfasst zwei Torräume (Regel 1:4 und Regel 6) und ein Spielfeld. Die Längsseiten heißen Seitelinien, die Breitseiten Torauslinien, zwischen den Torpfosten jedoch Torlinien.",
                    "Eine Sicherheitszone entlang der Spielfläche von mindestens 1 m neben den Seitenlinien und 2 m hinter den Torauslinien sollte gegeben sein.",
                    "Die Beschaffenheit der Spielfläche darf im Spielverlauf nicht zugunsten einer Mannschaft verändert werden."
                ]
            }
        ]
    }
];