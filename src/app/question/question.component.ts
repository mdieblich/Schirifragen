import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Question;

  constructor() { 
  }

  ngOnInit() {
    this.question = {
      id: 1,
      question:  "Welche Abmessungen sehen die Spielregeln für die Spielfläche vor?",
      answers: [
        "40 x 20 Meter",
        "42 x 20 Meter",
        "38 x 18 Meter",
        "Länge zwischen 38 und 42, Breite zwischen 18 und 22 Metern."],
      correctAnswers: [0]
    };
  }

}
