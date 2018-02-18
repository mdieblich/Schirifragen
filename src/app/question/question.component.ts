import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { QUESTIONS } from '../question-mock';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuestionResult } from '../question-result';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Question;
  selectedAnswers: boolean[] = [];
  correctAnswers: boolean[] = [];

  result?: QuestionResult;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private location: Location) { 
  }

  ngOnInit() {
    this.loadQuestion();
  }

  loadQuestion(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.questionService.getQuestion(id)
      .subscribe(receivedQuestion => this.setQuestion(receivedQuestion));
  }

  setQuestion(question: Question): void {
    this.question = question;

    this.selectedAnswers = new Array(this.question.answers.length);
    this.selectedAnswers.fill(false);
    this.correctAnswers = new Array(this.question.answers.length);
    this.correctAnswers.fill(false);

    this.question.correctAnswers.forEach(index => {
      this.correctAnswers[index] = true;
    });
  }

  checkAnswers(): void {
    this.result = new QuestionResult(this.correctAnswers, this.selectedAnswers);
  }
}
