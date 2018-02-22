import { QuestionResult } from "./question-result";

export interface SessionUserData {
    questionsAnswered: number[];
    results: QuestionResult[];
}
