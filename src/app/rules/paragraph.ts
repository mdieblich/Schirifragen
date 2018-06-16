import { Subparagraph } from "./subparagraph";

export class Paragraph {
    number: string;
    sections: string[]; //Hauptinhalt: Einzelne Absätze
    subparagraphs?: Subparagraph[]; // alphabetische Aufzählung (2:4a, 2:4b, usw..)
    note?: string;  // Hinweis (nach der Regel)
    comment?: string;   // Kommentar (nach der Regel)
    postsections?: string[];    // Absätze, die nach dem ganzen anderen kommen
}
