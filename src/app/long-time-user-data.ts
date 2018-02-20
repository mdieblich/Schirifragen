import { QuestionResultHistory } from "./question-result-history";

export interface LongTimeUserData {
    results: { [id: number]: QuestionResultHistory};
}
