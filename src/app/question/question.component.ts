import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { Question } from '../question';
import { QuestionService } from '../question.service';
import { QuestionSuggestionService } from '../question-suggestion.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { QuestionResult } from '../question-result';
import { UserData } from '../user-data';
import { UserService } from '../user.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() id?: number;
  question: Question;
  selectedAnswers: boolean[] = [];
  correctAnswers: boolean[] = [];

  finished: boolean = false;
  score?: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private questionService: QuestionService,
    private suggestionService: QuestionSuggestionService,
    private userService: UserService) {
  }

  toLetter(i: number) {
    let firstLowerLetterCharCode: number = 'a'.charCodeAt(0);
    return String.fromCharCode(firstLowerLetterCharCode + i);
  }

  ngOnInit() {
    if (this.id) {
      this.loadQuestion();
    }
    else {
      if (this.idIsInRoute()) {
        this.setIdFromRoute();
      } else {
        this.suggestQuestionId();
        // this.setRandomId();
      }
    }
  }

  idIsInRoute(): boolean {
    return this.route.snapshot.paramMap.has('id');
  }

  setIdFromRoute(): void {
    this.setId(Number(this.route.snapshot.paramMap.get('id')));
  }

  setId(id: number) {
    this.id = id;
    this.loadQuestion();
    this.location.go("/question/"+id);
  }

  suggestQuestionId(): void {
    this.suggestionService.suggestQuestion().subscribe(
      suggestedId => this.setId(suggestedId)
    );
  }

  loadQuestion(): void {
    this.questionService.getQuestion(this.id)
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
    let correctChoicesCount = 0;
    for (let i = 0; i < this.correctAnswers.length; i++) {
      correctChoicesCount += this.correctAnswers[i] === this.selectedAnswers[i] ? 1 : 0;
    }
    this.score = correctChoicesCount / this.correctAnswers.length;

    this.userService.addQuestionResult(this.id, new QuestionResult(this.selectedAnswers));

    this.finished = true;
  }

  clear(): void {
    this.id = undefined;
    this.location.go("/question");

    this.question = undefined;

    this.score = undefined;
    this.finished = false;
  }

  next(): void {
    this.clear();
    this.suggestQuestionId();
  }
}
