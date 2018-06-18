import { Paragraph } from "./paragraph";

export class RuleSection {
    caption?: string;
    note?: string;  // Ein Hinweistext, der vorher erscheint
    paragraphs: Paragraph[];
}
