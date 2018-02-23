import { RuleUnderstanding } from "./rule-understanding";
import { Question } from "./question";

export class RuleUnderstandingMap {

    ruleMap = new Map<string, RuleUnderstanding>();

    addCorrectQuestions(correctQuestions: Question[]): void {
        correctQuestions.forEach(correctQuestion => this.addCorrectQuestion(correctQuestion));
    }

    addCorrectQuestion(correctQuestion: Question): void {
        correctQuestion.ruleReferences.forEach(ruleReference => {
            let ruleUnderstanding: RuleUnderstanding = this.ruleMap[ruleReference];
            if (ruleUnderstanding === undefined) {
                ruleUnderstanding = new RuleUnderstanding();
                ruleUnderstanding.rule = { paragraph: ruleReference, text: "" };
            }
            ruleUnderstanding.addCorrectQuestion(correctQuestion);
            this.ruleMap[ruleReference] = ruleUnderstanding;
        });
    }

    addWrongQuestions(wrongQuestions: Question[]): void {
        wrongQuestions.forEach(wrongQuestion => this.addWrongQuestion(wrongQuestion));
    }

    addWrongQuestion(wrongQuestion: Question): void {
        wrongQuestion.ruleReferences.forEach(ruleReference => {
            let ruleUnderstanding: RuleUnderstanding = this.ruleMap.get(ruleReference);
            if (ruleUnderstanding === undefined) {
                ruleUnderstanding = new RuleUnderstanding();
                ruleUnderstanding.rule = { paragraph: ruleReference, text: "" };
            }
            ruleUnderstanding.addWrongQuestion(wrongQuestion);
            this.ruleMap.set(ruleReference, ruleUnderstanding);
        });
    }

    getOrderedRuleUnderstandings(): RuleUnderstanding[] {
        let unorderedUnderstandings: RuleUnderstanding[] = [];

        this.ruleMap.forEach(
            (ruleUnderstanding:RuleUnderstanding, paragraph:string) => {
                unorderedUnderstandings.push(ruleUnderstanding);
            }
        );

        unorderedUnderstandings.sort(
            (ruleUnderstandingA, ruleUnderstandingB) => ruleUnderstandingB.wrongQuestions.length - ruleUnderstandingA.wrongQuestions.length
        );
        return unorderedUnderstandings;
    }

}

