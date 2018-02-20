export class Question {
    id: number;
    question: string;
    answers: string[] = [];
    correctAnswers: number[] = [];
    ruleReferences: string[] = [];
}
