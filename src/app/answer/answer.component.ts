import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  @Input() finished: boolean;
  @Input() correctAnswer: boolean;

  @Input() selectedAnswer: boolean;
  @Output() selectedAnswerChange = new EventEmitter();
  
  @Input() i: number;
  @Input() answer: string;

  constructor() { }

  ngOnInit() {
  }
  
  toLetter(i: number) {
    let firstLowerLetterCharCode: number = 'a'.charCodeAt(0);
    return String.fromCharCode(firstLowerLetterCharCode + i);
  }

}
