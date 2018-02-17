import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { QUESTIONS } from '../question-mock';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Question;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private location: Location) { 
  }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.questionService.getQuestion(id)
      .subscribe(receivedQuestion => this.question = receivedQuestion);
  }

}
