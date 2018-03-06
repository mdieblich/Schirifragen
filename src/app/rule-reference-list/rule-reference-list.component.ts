import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rule-reference-list',
  templateUrl: './rule-reference-list.component.html',
  styleUrls: ['./rule-reference-list.component.scss']
})
export class RuleReferenceListComponent implements OnInit {

  @Input() ruleReferences: string[];

  constructor() { }

  ngOnInit() {
  }

}
