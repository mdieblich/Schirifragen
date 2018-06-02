import { Component, OnInit } from '@angular/core';
import { RuleService } from './rule.service';
import { Rule } from './rule';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  rules: Rule[] = [];

  constructor(private ruleService: RuleService) {
  }

  ngOnInit() {
    this.ruleService.getRules().subscribe(
      rule => this.addRule(rule)
    );
  }

  addRule(rule: Rule){
    this.rules.push(rule);
  }

}
