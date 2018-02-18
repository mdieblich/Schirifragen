export class QuestionResult {
    correctSelections: boolean[] = [];
    selectionMissing: boolean[] = [];
    wronglySelected: boolean[] = [];
    score: number;

    constructor(correctAnswers: boolean[], selectedAnswers: boolean[]){
        let correctChoicesCount = 0;
        for(let i=0; i<correctAnswers.length; i++){
            this.correctSelections[i] =  correctAnswers[i] ===  selectedAnswers[i];
            this.selectionMissing[i]  =  correctAnswers[i]  && !selectedAnswers[i];
            this.wronglySelected[i]   = !correctAnswers[i]  &&  selectedAnswers[i];
            correctChoicesCount += this.correctSelections[i] ? 1 : 0;
        }
        this.score = correctChoicesCount / correctAnswers.length;
    }
}
