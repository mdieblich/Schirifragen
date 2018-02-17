import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { QUESTIONS } from '../question-mock';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Question;

  constructor(private questionService: QuestionService) { 
  }

  ngOnInit() {
    this.getQuestion(2);
  }

  getQuestion(id: number): void{
    this.questionService.getQuestion(id).subscribe(
      question => this.question = question
    );
  }

}
