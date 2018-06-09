import { Subparagraph } from "./subparagraph";

export class Paragraph {
    number: string;
    sections: string[];
    subparagraphs?: Subparagraph[];
    note?: string;
    comment?: string;
}
