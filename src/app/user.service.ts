import { Injectable } from '@angular/core';

import { LongTimeUserData } from './long-time-user-data';
import { QuestionResult } from './question-result';
import { QuestionResultHistory } from './question-result-history';
import { SessionUserData } from './session-user-data';

@Injectable()
export class UserService {
    // TODO: in IndexedDB auslagern!
    // TODO: Prüfen, ob LocalStorage/SessionStorage überhaupt zur Verfügung stehen

  constructor() { }

  private operateOnLongTimeData(action: (longTimeData: LongTimeUserData) => void): void{
    // TODO: Besserer Name als "LongTimeData". Total nichtssagend

    let longTimeData: LongTimeUserData = JSON.parse(localStorage.getItem("user"));
    if(!longTimeData){
      longTimeData = {results: {}};
    }

    action(longTimeData);

    localStorage.setItem("user", JSON.stringify(longTimeData));
  }

  private operateOnSessionData(action: (sessionData: SessionUserData) => void): void {
    // TODO: Besserer Name als "sessionData". Total nichtssagend

    this.readSessionData(
      sessionData => {
        action(sessionData);
        sessionStorage.setItem("user", JSON.stringify(sessionData));
      }
    );
  }

  private readSessionData(action: (sessionData: SessionUserData) => void): void {
    let sessionData: SessionUserData = JSON.parse(sessionStorage.getItem("user"));
    if(!sessionData){
      sessionData = {
        questionsAnswered: [],
        scores: []
      };
    }
    action(sessionData);
  }

  addQuestionResult(questionId: number, result: QuestionResult): void {
    this.operateOnLongTimeData( longTimeData => {
      let resultHistory: QuestionResultHistory = longTimeData.results[questionId];
      if(!resultHistory){
          resultHistory = {questionResults: []};
          longTimeData.results[questionId] = resultHistory;
      }
      resultHistory.questionResults.push(result);
    });

    this.operateOnSessionData(sessionData => {
      sessionData.questionsAnswered.push(questionId);
      sessionData.scores[questionId] = result.score;
    });
  }

  getAnsweredQuestions(): Set<number> {
    let answeredQuestions = new Set<number>();
    this.readSessionData(sessionData => {
      sessionData.questionsAnswered.forEach(questionId => answeredQuestions.add(questionId));
    });
    return answeredQuestions;
  }

  clearOldAnsweredQuestions(): void {
    this.operateOnSessionData(
      sessionData => {
        sessionData.questionsAnswered = [];
      }
    );
  }
}
