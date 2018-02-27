import {  SimpleChanges } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {

  @Input() finished: boolean;
  @Input() question: Question;
  correctAnswers: boolean[];
  
  @Input() selectedAnswers: boolean[];
  @Output() selectedAnswersChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() {

    this.correctAnswers = new Array(this.question.answers.length);
    this.correctAnswers.fill(false);
    
    this.question.correctAnswers.forEach(index => {
      this.correctAnswers[index] = true;
    });

  }
  egal(): void {
    console.log("egal");
  }

}
