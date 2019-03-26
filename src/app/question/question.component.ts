import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Question } from '../question';
import { QuestionService } from '../question.service';
import { QuestionSuggestionService } from '../question-suggestion.service';
import { QuestionResult } from '../question-result';
import { UserService } from '../user.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() id?: number;
  start?: number;
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

  ngOnInit() {

    this.route.queryParams.subscribe(params => {this.start = params.start; });

    if (this.id) {
      this.loadQuestion();
    }
    else {
      if (this.idIsInRoute()) {
        this.setIdFromRoute();
      } else {
        this.suggestQuestionId();
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
    if(this.start){
      this.location.go("/question/"+id+"?start="+this.start);
    }
    else{
      this.location.go("/question/"+id);
    }
    this.loadQuestion();
  }

  suggestQuestionId(): void {
    this.suggestionService.suggestQuestion(this.start || 0).subscribe(
      suggestedId => {
        this.setId(suggestedId);
      },
      error => {
        this.noMoreQuestionsAvailable();
      }
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

    this.saveResult();

    this.finished = true;
  }

  saveResult(): void {
    this.userService.addQuestionResult(
      this.id, 
      this.createQuestionResult()
    );
  }

  createQuestionResult(): QuestionResult {
    return {
      selectedAnswers: this.selectedAnswers, 
      score: this.score
    };
  }

  clear(): void {
    window.scrollTo(0,0);
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

  toLetter(i: number) {
    let firstLowerLetterCharCode: number = 'a'.charCodeAt(0);
    return String.fromCharCode(firstLowerLetterCharCode + i);
  }

  noMoreQuestionsAvailable(): void {
    // TODO: Weiterleitung zu Auswertung
    if(confirm("Keine Fragen mehr. Zurücksetzen?")){
      this.userService.clearOldAnsweredQuestions();
      this.suggestQuestionId();
    }
  }

}
