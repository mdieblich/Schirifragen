import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { UserService } from '../user.service';
import { QuestionResult } from '../question-result';

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
  results: QuestionResult[] = [];

  constructor(
    private questionService: QuestionService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.correctAnswers = 0;
    this.totalScore = 0;

    const answeredQuestions: Set<number> = this.userService.getAnsweredQuestions();
    this.results = this.userService.getQuestionResults();

    this.totalAnswers = answeredQuestions.size;
    answeredQuestions.forEach(questionId => {
      this.questionService.getQuestion(questionId).subscribe(question => {
        const score: number = this.results[questionId].score;
        this.totalScore += score;
        if(score === 1){
          this.correctAnswers ++;
          this.correctQuestions.push(question);
        }else{
          this.wrongQuestions.push(question);
        }
      })
    });
  }
}
