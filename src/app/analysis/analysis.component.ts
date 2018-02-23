import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { UserService } from '../user.service';
import { QuestionResult } from '../question-result';
import { RuleUnderstanding } from '../rule-understanding';
import { RuleUnderstandingMap } from '../rule-understanding-map';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  totalAnswers: number;
  loadedQuestions: number = 0;

  correctAnswers: number;
  totalScore: number;

  correctQuestions: Question[] = [];
  wrongQuestions: Question[] = [];
  results: QuestionResult[] = [];

  ruleUnderstandings: RuleUnderstanding[];

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
        this.addQuestion(question, this.results[questionId].score);
      })
    });
  }

  addQuestion(question: Question, score: number): void {
    this.totalScore += score;
    if(score === 1){
      this.correctAnswers ++;
      this.correctQuestions.push(question);
    }else{
      this.wrongQuestions.push(question);
    }
    this.loadedQuestions ++;
    if(this.loadedQuestions >= this.totalAnswers){
      this.calculateRuleUnderstanding();
    }
  }

  calculateRuleUnderstanding(): void {
    let ruleMap = new RuleUnderstandingMap();
    ruleMap.addCorrectQuestions(this.correctQuestions);
    ruleMap.addWrongQuestions(this.wrongQuestions);
    this.ruleUnderstandings = ruleMap.getOrderedRuleUnderstandings();
  }

}
