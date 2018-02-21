import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  totalAnswers: number;

  correctAnswers: number;
  totalScore: number;

  correctQuestions: Question[] = [];
  wrongQuestions: Question[] = [];

  constructor(
    private questionService: QuestionService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.correctAnswers = 0;
    this.totalScore = 0;

    const answeredQuestions: Set<number> = this.userService.getAnsweredQuestions();
    const scores: number[] = this.userService.getQuestionScore();

    this.totalAnswers = answeredQuestions.size;
    answeredQuestions.forEach(questionId => {
      this.questionService.getQuestion(questionId).subscribe(question => {
        this.totalScore += scores[questionId];
        if(scores[questionId] === 1){
          this.correctAnswers ++;
          this.correctQuestions.push(question);
        }else{
          this.wrongQuestions.push(question);
        }
      })
    });
  }

  shortQuestionText(question: Question): string {
    if(question.text.length<30){
      return question.text;
    }
    return question.text.slice(0, 29)+"...";
  }

}
