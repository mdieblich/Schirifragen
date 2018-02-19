import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { AppComponent } from './app.component';
import { RandomQuestionComponent } from './random-question/random-question.component';

const routes: Routes = [
  { path: '', redirectTo: '/question/1', pathMatch: 'full' },
  // { path: 'dashboard', component: TODO: Dashboard},
  { path: 'question/random', component: RandomQuestionComponent},
  { path: 'question/:id', component: QuestionComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
