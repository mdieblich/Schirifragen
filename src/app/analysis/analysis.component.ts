import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  correctAnswers: number = 27;
  totalAnswers: number = 99;
  totalScore: number = 45;

  constructor() { }

  ngOnInit() {
  }

}
