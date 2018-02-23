import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { QuestionResult } from '../question-result';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() questions: Question[];
  @Input() results: QuestionResult[];

  constructor() { }

  ngOnInit() {
  }

  shortQuestionText(question: Question): string {
    if(question.text.length<30){
      return question.text;
    }
    return question.text.slice(0, 29)+"...";
  }

}
