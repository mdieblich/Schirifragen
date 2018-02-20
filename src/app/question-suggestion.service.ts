import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { QuestionService } from './question.service';
import { UserService } from './user.service';

@Injectable()
export class QuestionSuggestionService {

  constructor(
    private questionService: QuestionService,
    private userService: UserService
  ) { }

  suggestQuestion(): Observable<number> {
    const maxId: Observable<number> = this.questionService.getMaxId();
    return maxId.map(
      maxId => {
        let remainingQuestions: number[] = this.getRemainingQuestions(maxId);
        if(remainingQuestions.length == 0){
          this.userService.clearOldAnsweredQuestions();
          remainingQuestions = this.getRemainingQuestions(maxId);
        }
        return this.selectRandomId(remainingQuestions);
      }
    );
  }

  private getRemainingQuestions(maxId: number): number[] {
    const answeredQuestions: Set<number> = this.userService.getAnsweredQuestions();
    let remainingQuestions: number[] = [];
    for(let i=1; i<=maxId; i++){
      if(!answeredQuestions.has(i)){
        remainingQuestions.push(i);
      }
    }
    console.log("remainingQuestions", remainingQuestions);
    return remainingQuestions;
  }

  private selectRandomId(possibleQuestions: number[]): number {
    const index: number = this.getRandomInt(0, possibleQuestions.length-1);
    return possibleQuestions[index];
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
