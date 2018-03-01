import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-progress-bar',
  templateUrl: './score-progress-bar.component.html',
  styleUrls: ['./score-progress-bar.component.scss']
})
export class ScoreProgressBarComponent implements OnInit {

  @Input() value;
  @Input() max;
  @Input() thresholdGood;
  @Input() thresholdBad;

  constructor() { }

  ngOnInit() {
  }

}
