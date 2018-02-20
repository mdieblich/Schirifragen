import { QuestionResultHistory } from "./question-result-history";

export interface UserData {
    results: { [id: number]: QuestionResultHistory};
}
