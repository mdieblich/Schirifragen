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
  selectedAnswers: boolean[] = [];

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

  setQuestion(question: Question){
    this.question = question;
    for(let i:number=0; i<this.question.answers.length; i++){
      this.selectedAnswers[i] = false;
    }
    console.log(this.selectedAnswers);
  }

  checkAnswers(): void{
    let selectedAnswersString:string = "";
    for(let i:number=0; i<this.selectedAnswers.length; i++){
      console.log("checke" + i);
      if(this.selectedAnswers[i]){
        console.log("match!");
        selectedAnswersString += i + ", ";
      }
    }
    console.log(selectedAnswersString);
  }

}
