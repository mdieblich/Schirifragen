import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import "rxjs/add/operator/delay";

import { Question } from './question';
import { QUESTIONS } from './question-mock';

@Injectable()
export class QuestionService {

  constructor() { }

  getQuestion(id: number): Observable<Question>{
    return of(QUESTIONS.find(question => question.id == id)).delay(250);
  }

  getMaxId(): Observable<number> {
    return of(QUESTIONS.length).delay(250);
  }

}
