import { Injectable } from '@angular/core';
import { QuestionService } from './question.service';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class QuestionSuggestionService {

  constructor(private questionService: QuestionService) { }

  suggestQuestion(): Observable<number> {
    const maxId: Observable<number> = this.questionService.getMaxId();
    return maxId.map(maxId => this.getRandomInt(1, maxId));
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
