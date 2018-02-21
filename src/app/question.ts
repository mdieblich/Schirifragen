export class Question {
    id: number;
    text: string;
    answers: string[] = [];
    correctAnswers: number[] = [];
    ruleReferences: string[] = [];
}
