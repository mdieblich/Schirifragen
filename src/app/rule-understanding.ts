import { Question } from "./question";
import { Rule } from "./rule";

export class RuleUnderstanding {

    rule: Rule;
    wrongQuestions: Question[] = [];
    correctQuestions: Question[] = [];

    constructor(){
    }

    addWrongQuestion(wrongQuestion: Question){
        this.wrongQuestions.push(wrongQuestion);
    }
    
    addCorrectQuestion(correctQuestion: Question){
        this.correctQuestions.push(correctQuestion);
    }
}
