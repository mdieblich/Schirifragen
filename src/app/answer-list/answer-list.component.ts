import {  SimpleChanges, OnChanges } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit, OnChanges {

  @Input() finished: boolean;
  @Input() question: Question;
  correctAnswers: boolean[];
  
  @Input() selectedAnswers: boolean[];
  @Output() selectedAnswersChange = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if(propName === 'question'){

        this.correctAnswers = new Array(this.question.answers.length);
        this.correctAnswers.fill(false);
        
        this.question.correctAnswers.forEach(index => {
          this.correctAnswers[index] = true;
        });
      }
    }
  }

  toggle(i: number): void {
    if(!this.finished){
      this.selectedAnswers[i]=!this.selectedAnswers[i];
    }
  }

}
