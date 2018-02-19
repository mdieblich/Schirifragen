import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { QUESTIONS } from '../question-mock';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

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
    private questionService: QuestionService,
    private location: Location) { 
  }

  toLetter(i: number){
    let firstLowerLetterCharCode: number = 'a'.charCodeAt(0);
    return String.fromCharCode(firstLowerLetterCharCode+i);
  }

  ngOnInit() {
    if (this.id) {
      this.loadQuestion();
    }
    else {
      if (this.idIsInRoute()) {
        this.setIdFromRoute();
      } else {
        this.setRandomId();
      }
    }
  }

  idIsInRoute(): boolean {
    return this.route.snapshot.paramMap.has('id');
  }

  setIdFromRoute(): void {
    this.setId(Number(this.route.snapshot.paramMap.get('id')));
  }

  setId(id: number){
    this.id = id;
    this.loadQuestion();
  }
  
  setRandomId(): void {
    this.questionService.getMaxId().subscribe(
      maxId => this.setId(this.getRandomInt(1,maxId))
    );
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
    for(let i=0; i<this.correctAnswers.length; i++){
        correctChoicesCount += this.correctAnswers[i] === this.selectedAnswers[i] ? 1 : 0;
    }
    this.score = correctChoicesCount / this.correctAnswers.length;
    this.finished = true;
  }

  reset(): void {
    this.score = undefined;
    this.finished = false;
  }
}
