import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import "rxjs/add/operator/delay";

import { Rule } from './rule';
import { RULES } from './rule-mock';

@Injectable()
export class RuleService {

  constructor() { }

  getRules(): Observable<Rule>{
    const delay = Math.floor((Math.random() * 2500) + 100);
    return from(RULES).delay(delay);
  }

}
