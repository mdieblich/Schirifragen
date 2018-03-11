import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-progress-bar',
  templateUrl: './score-progress-bar.component.html',
  styleUrls: ['./score-progress-bar.component.scss']
})
export class ScoreProgressBarComponent implements OnInit {

  @Input() value: number;
  @Input() max: number;
  @Input() thresholdGood: number;
  @Input() thresholdBad: number;
  @Input() showThresholds: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
