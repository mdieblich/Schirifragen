import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";

import { QuestionService } from './question.service';
import { UserService } from './user.service';

@Injectable()
export class QuestionSuggestionService {

  constructor(
    private questionService: QuestionService,
    private userService: UserService
  ) { }

  suggestQuestion(start: number): Observable<number> {
    const maxId: Observable<number> = this.questionService.getMaxId();
    return maxId/*.delay(250)*/.map(
      maxId => {
        let remainingQuestions: number[] = this.getRemainingQuestions(start, maxId);
        if(remainingQuestions.length == 0){
          throw new Error("No more questions");
        }
        return this.selectRandomId(remainingQuestions);
      }
    );
  }

  private getRemainingQuestions(start:number, maxId: number): number[] {
    const answeredQuestions: Set<number> = this.userService.getAnsweredQuestions();
    let remainingQuestions: number[] = [];
    for(let i=1; i<=maxId; i++){
      if(!answeredQuestions.has(i) && i>=start){
        remainingQuestions.push(i);
      }
    }
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
