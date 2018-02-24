import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import "rxjs/add/operator/delay";

import { Question } from './question';
import { QUESTIONS } from './question-mock';

@Injectable()
export class QuestionService {

  // Cache des Maximums
  private maxId?: number;

  private allQuestionIds?: Set<number>;

  constructor() { }

  getQuestion(id: number): Observable<Question>{
    return of(QUESTIONS.find(question => question.id == id))/*.delay(250)*/;
  }

  getMaxId(): Observable<number> {
    if(this.maxId){
      return of(this.maxId);
    }
    const maxIdObservable: Observable<number> = of(QUESTIONS.length)/*.delay(250)*/;
    maxIdObservable.subscribe(maxId => this.maxId = maxId);
    return maxIdObservable;
  }

}
