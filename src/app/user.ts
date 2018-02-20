import { QuestionResultHistory } from "./question-result-history";
import { QuestionResult } from "./question-result";
import { UserData } from "./user-data";

export class User {

    constructor(private userData: UserData){}

    addQuestionResult(questionId: number, result: QuestionResult): void {
        let resultHistory: QuestionResultHistory = this.userData.results[questionId];
        if(!resultHistory){
            resultHistory = {questionResults: []};
            this.userData.results[questionId] = resultHistory;
        }
        resultHistory.questionResults.push(result);
    }
}
