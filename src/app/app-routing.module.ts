import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { AppComponent } from './app.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  // { path: '', redirectTo: '/question', pathMatch: 'full' },
  { path: '', redirectTo: '/question', pathMatch: 'full' },
  // { path: 'dashboard', component: TODO: Dashboard},
  { path: 'question', component: QuestionComponent},
  { path: 'analysis', component: AnalysisComponent},
  { path: 'question/:id', component: QuestionComponent},
  { path: 'rules', component: RulesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
