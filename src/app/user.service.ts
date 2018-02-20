import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { UserData } from './user-data';
import { QuestionResult } from './question-result';
import { QuestionResultHistory } from './question-result-history';

@Injectable()
export class UserService {
    // TODO in IndexedDB auslagern!

  constructor(private localStorageService: LocalStorageService) { }

  private operateOnUserData(action: (userData: UserData) => void): void{
    
    let userData: UserData = this.localStorageService.get("user");
    if(!userData){
      userData = {results: {}};
    }

    action(userData);

    this.localStorageService.set("user", userData);
  }

  addQuestionResult(questionId: number, result: QuestionResult): void {
    this.operateOnUserData( userData=> {
      let resultHistory: QuestionResultHistory = userData.results[questionId];
      if(!resultHistory){
          resultHistory = {questionResults: []};
          userData.results[questionId] = resultHistory;
      }
      resultHistory.questionResults.push(result);
    });
  }
}
