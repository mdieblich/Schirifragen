import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  
  totalAnswers: number = 99;

  correctAnswers: number = 27;
  totalScore: number = 45;

  constructor() { }

  ngOnInit() {
  }

}
